import { useState, useEffect, useRef } from "react";
import { usePageTitle } from "../../hooks/usePageTitle";
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
import guestbookBanner from "./image/guestBook.png";
import "./Guestbook.css";

function formatDate(timestamp) {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function Avatar({ photoURL, name, size = "lg" }) {
  if (photoURL) {
    return (
      <img
        src={photoURL}
        alt={name || ""}
        className={`gb-avatar gb-avatar--${size}`}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
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
    <article className={`ref-msg-card ${isOwn ? "ref-msg-card--mine" : ""}`}>
      <div className="ref-msg-avatar-col">
        <Avatar photoURL={msg.photoURL} name={msg.name} size="lg" />
      </div>
      <div className="ref-msg-content-col">
        <div className="ref-msg-meta-row">
          <span className="ref-msg-author">{msg.name}</span>
          {isOwn && <span className="ref-you-tag">you</span>}
          <time className="ref-msg-time">{formatDate(msg.createdAt)}</time>
        </div>
        <p className="ref-msg-body">{msg.message}</p>
      </div>
    </article>
  );
}

export default function Guestbook() {
  const navigate = useNavigate();
  usePageTitle("Guestbook");

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [signInError, setSignInError] = useState("");

  const [message, setMessage] = useState("");
  const [postError, setPostError] = useState("");
  const textareaRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [msgsLoading, setMsgsLoading] = useState(true);
  const [msgsError, setMsgsError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "guestbook"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(docs);
        setMsgsLoading(false);
        setMsgsError("");
      },
      (error) => {
        console.error("Firestore listener error:", error);
        setMsgsError("Failed to load messages.");
        setMsgsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    setSignInError("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setSignInError("Failed to sign in. Please try again.");
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

    setMessage("");
    setPostError("");

    try {
      await addDoc(collection(db, "guestbook"), {
        uid: user.uid,
        name: user.displayName || "Anonymous",
        photoURL: user.photoURL || null,
        message: trimmed,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      setMessage(trimmed);
      setPostError("Failed to post message. Please try again.");
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handlePost();
  };

  const charCount = message.length;
  const overLimit = charCount > 280;

  return (
    <main className="guestbook-page-wrap">
      <div className="guestbook-container">
        {/* Top Header Row with Back Button */}
        <div className="gb-header-section">
          <div className="gb-title-row">
            <button
              type="button"
              className="back-icon-btn gb-back-btn"
              onClick={() => navigate("/")}
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <h1 className="gb-main-heading font-serif">
              Guestbook<span style={{ color: "var(--accent)" }}>.</span>
            </h1>
          </div>
          <p className="subtitle">Write something. Future me will smile.</p>
        </div>

        {/* Banner with clean aspect ratio */}
        <div className="gb-banner-wrap">
          <img
            src={guestbookBanner}
            alt="Guestbook"
            className="gb-banner-img"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Compose / Sign-in */}
        <section className="gb-action-box">
          {authLoading ? (
            <div className="gb-skeleton-loader"></div>
          ) : user ? (
            <div className="gb-composer-box">
              <div className="gb-composer-top">
                <div className="gb-user-info">
                  <Avatar photoURL={user.photoURL} name={user.displayName} size="sm" />
                  <span className="gb-user-name">{user.displayName}</span>
                </div>
                <button
                  type="button"
                  className="gb-signout-btn"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>

              <textarea
                ref={textareaRef}
                className={`ref-textarea gb-textarea ${overLimit ? "error-border" : ""}`}
                placeholder="Leave a message… (Ctrl+Enter to post)"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setPostError("");
                }}
                onKeyDown={handleKeyDown}
                rows="3"
              ></textarea>

              <div className="gb-composer-bottom">
                <span className={`gb-char-counter ${overLimit ? "text-danger" : ""}`}>
                  {charCount}/280
                </span>
                <button
                  type="button"
                  className="ref-submit-btn"
                  onClick={handlePost}
                  disabled={!message.trim() || overLimit}
                >
                  Post Message
                </button>
              </div>

              {postError && <p className="gb-error-hint">{postError}</p>}
            </div>
          ) : (
            <div className="gb-signin-prompt">
              <button
                type="button"
                className="gb-google-signin-btn"
                onClick={handleGoogleSignIn}
                aria-label="Sign in to Leave a Message"
              >
                <span className="gb-google-icon-wrapper">
                  <svg
                    className="gb-google-svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                </span>
                <span className="gb-google-text">Sign in to Leave a Message</span>
              </button>
              {signInError && <p className="gb-error-hint">{signInError}</p>}
            </div>
          )}
        </section>

        {/* Recent Messages Section */}
        <section className="gb-messages-section">
          <h2 className="section-heading !mb-6">Recent Messages</h2>

          {msgsLoading ? (
            <div className="gb-messages-list">
              <div className="gb-msg-skeleton"></div>
              <div className="gb-msg-skeleton"></div>
            </div>
          ) : msgsError ? (
            <p className="subtitle text-danger">{msgsError}</p>
          ) : messages.length === 0 ? (
            <p className="subtitle">No messages yet. Be the first to leave one!</p>
          ) : (
            <div className="gb-messages-list">
              {messages.map((msg) => (
                <MessageCard
                  key={msg.id}
                  msg={msg}
                  isOwn={user && msg.uid === user.uid}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
