import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Archive.css";

export default function ArchiveMusic() {
  const navigate = useNavigate();
  usePageTitle("Music");

  return (
    <div className="archive-page-container">
      {/* Top Header with Back Button */}
      <div className="page-header-row">
        <button
          type="button"
          className="back-icon-btn"
          onClick={() => navigate("/archive")}
          aria-label="Go back to archive"
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
        <h1 className="section-heading !mb-0">Music</h1>
      </div>

      {/* Spotify Playlist Embed */}
      <div className="music-player-wrap">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px", border: "none" }}
          src="https://open.spotify.com/embed/playlist/0MHWoVPcVlnH9bggqCKnb9?utm_source=generator&si=afe2012f358447d2"
          width="100%"
          height="352"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </div>
  );
}
