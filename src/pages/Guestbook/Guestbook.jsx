import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, googleProvider, db } from "../../firebase.js";
// import guestbookBanner from "./image/guest-book.png";
import guestbookBanner from "./image/guestBook.png";
import "./Guestbook.css";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(timestamp) {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const AUTH_ERROR_MAP = {
  "auth/popup-blocked":
    "Popup was blocked. Please allow popups for this site.",
  "auth/unauthorized-domain":
    "Domain not authorized. Add it in Firebase Console → Auth → Authorized Domains.",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Avatar({ photoURL, name, size = "lg" }) {
  if (photoURL) {
    return (
      <img
        src={photoURL}
        alt={name}
        className={`gb-avatar gb-avatar--${size}`}
        referrerPolicy="no-referrer"
      />
    );
  }
  return (
    <div className={`gb-avatar gb-avatar--fallback gb-avatar--${size}`}>
      {name?.[0]?.toUpperCase() || "?"}
    </div>
  );
}

function MessageCard({ msg, isOwn }) {
  return (
    <article className={`gb-message-card${isOwn ? " gb-message-card--mine" : ""}`}>
      <div className="gb-message-header">
        <Avatar photoURL={msg.photoURL} name={msg.name} size="lg" />
        <div className="gb-message-meta">
          <span className="gb-message-name">
            {msg.name}
            {isOwn && <span className="gb-you-badge">you</span>}
          </span>
          <span className="gb-message-date">{formatDate(msg.createdAt)}</span>
        </div>
      </div>
      <p className="gb-message-text">{msg.message}</p>
    </article>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Guestbook() {
  const navigate = useNavigate();

  // Auth
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signInError, setSignInError] = useState("");

  // Compose
  const [message, setMessage] = useState("");
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState("");
  const textareaRef = useRef(null);

  // Messages feed
  const [messages, setMessages] = useState([]);
  const [msgsLoading, setMsgsLoading] = useState(true);
  const [msgsError, setMsgsError] = useState("");

  // ── Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  // ── Firestore real-time listener
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setMsgsLoading(false);
        setMsgsError("");
      },
      (err) => {
        console.error("Firestore error:", err);
        setMsgsLoading(false);
        setMsgsError("Could not load messages. Please try again later.");
      }
    );
    return unsub;
  }, []);

  // ── Handlers
  const handleSignIn = async () => {
    setSignInError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Sign-in error:", err.code, err.message);
      if (err.code !== "auth/popup-closed-by-user") {
        setSignInError(
          AUTH_ERROR_MAP[err.code] ?? `Sign-in failed: ${err.message}`
        );
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };

  const handlePost = async () => {
    const trimmed = message.trim();
    if (!trimmed || !user) return;
    if (trimmed.length > 280) {
      setPostError("Message must be 280 characters or fewer.");
      return;
    }

    // ── Optimistic update: clear input instantly so UI feels fast.
    // The Firestore local cache will surface the new doc before the
    // server confirms, so the message appears in the feed right away.
    setMessage("");
    setPosting(true);
    setPostError("");

    try {
      await addDoc(collection(db, "guestbook"), {
        uid: user.uid,
        name: user.displayName || "Anonymous",
        photoURL: user.photoURL || "",
        message: trimmed,
        createdAt: serverTimestamp(),
      });
      textareaRef.current?.focus();
    } catch (err) {
      // Restore message on failure so the user doesn't lose their text
      setMessage(trimmed);
      setPostError("Failed to post. Please try again.");
      console.error("Post error:", err);
    } finally {
      setPosting(false);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handlePost();
  };

  const charCount = message.length;
  const overLimit = charCount > 280;

  // ── Render
  return (
    <div className="guestbook">
      {/* Back */}
      <button
        className="gb-back-btn"
        onClick={() => navigate("/")}
        aria-label="Go back home"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Hero */}
      <section className="gb-hero" aria-label="Guestbook header">
        <img
          src={guestbookBanner}
          alt="Guestbook banner"
          className="gb-hero-img"
          aria-hidden="true"
        />
        <div className="gb-hero-overlay"></div>
        <div className="gb-hero-content">
          <h1 className="gb-title">
            Guestbook<span className="gb-dot">.</span>
          </h1>
          <p className="gb-subtitle">Write something. Future me will smile.</p>
        </div>
      </section>

      {/* Content */}
      <div className="gb-container">

        {/* Compose / Sign-in */}
        <section className="gb-compose-section" aria-label="Leave a message">
          {authLoading ? (
            <div className="gb-auth-loading" aria-label="Loading…">
              <span className="gb-spinner"></span>
            </div>
          ) : user ? (
            <div className="gb-composer">
              <div className="gb-composer-header">
                <div className="gb-user-info">
                  <Avatar photoURL={user.photoURL} name={user.displayName} size="sm" />
                  <span className="gb-user-name">{user.displayName}</span>
                </div>
                <button
                  className="gb-signout-btn"
                  onClick={handleSignOut}
                  aria-label="Sign out"
                >
                  Sign out
                </button>
              </div>

              <textarea
                ref={textareaRef}
                id="guestbook-message"
                className={`gb-textarea${overLimit ? " gb-textarea--error" : ""}`}
                placeholder="Leave a message… (Ctrl+Enter to post)"
                value={message}
                onChange={(e) => { setMessage(e.target.value); setPostError(""); }}
                onKeyDown={handleKeyDown}
                rows={4}
                aria-label="Your message"
              />

              <div className="gb-composer-footer">
                <span className={`gb-char-count${overLimit ? " gb-char-count--over" : ""}`}>
                  {charCount} / 280
                </span>
                <button
                  id="guestbook-post-btn"
                  className="gb-post-btn"
                  onClick={handlePost}
                  disabled={posting || !message.trim() || overLimit}
                >
                  {posting ? (
                    <><span className="gb-spinner gb-spinner--sm"></span>Posting…</>
                  ) : (
                    <><i className="fa-solid fa-paper-plane"></i>Post</>
                  )}
                </button>
              </div>

              {postError && (
                <p className="gb-error" role="alert">{postError}</p>
              )}
            </div>
          ) : (
            <div className="gb-signin-cta">
              <p className="gb-signin-label">To leave a message</p>
              <button
                id="guestbook-signin-btn"
                className="gb-google-btn"
                onClick={handleSignIn}
                aria-label="Continue with Google"
              >
                <FaGoogle className="gb-google-icon" aria-hidden="true" />
                Continue with Google
              </button>
              {signInError && (
                <p className="gb-error gb-signin-error" role="alert">
                  {signInError}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Divider */}
        <div className="gb-divider" aria-hidden="true"></div>

        {/* Messages feed */}
        <section className="gb-messages-section" aria-label="Recent messages">
          <h2 className="gb-messages-heading">
            Recent Messages
            {messages.length > 0 && (
              <span className="gb-messages-count">{messages.length}</span>
            )}
          </h2>

          {msgsLoading ? (
            <div className="gb-msgs-loading">
              <span className="gb-spinner"></span>
              <span>Loading messages…</span>
            </div>
          ) : msgsError ? (
            <div className="gb-empty">
              <span className="gb-empty-icon">⚠️</span>
              <p>{msgsError}</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="gb-empty">
              <span className="gb-empty-icon">✍️</span>
              <p>No messages yet. Be the first to sign the guestbook!</p>
            </div>
          ) : (
            <div className="gb-messages-list">
              {messages.map((msg) => (
                <MessageCard
                  key={msg.id}
                  msg={msg}
                  isOwn={user?.uid === msg.uid}
                />
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
