import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Archive.css";

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ArchiveMusic() {
  const navigate = useNavigate();
  usePageTitle("Music");

  return (
    <div className="archive">
      <section id="archive-music" className="archive-section">
        {/* Header */}
        <div className="archive-header">
          <button
            className="back-btn"
            onClick={() => navigate("/archive")}
            aria-label="Go back to archive"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>Music<span className="archive-title-dot">.</span></h2>
        </div>

        {/* Spotify Playlist Embed */}
        <div className="music-embed-wrap">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/0MHWoVPcVlnH9bggqCKnb9?utm_source=generator&si=afe2012f358447d2"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
