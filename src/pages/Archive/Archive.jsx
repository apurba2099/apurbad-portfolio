import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Archive.css";

// ─── FOLDERS ─────────────────────────────────────────────────────────────────

const folders = [
  { label: "music",   route: "/archive/music"   },
  { label: "gallery", route: "/archive/gallery" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Archive() {
  const navigate = useNavigate();
  usePageTitle("Archive");

  return (
    <div className="archive">
      <section id="archive" className="archive-section">
        {/* Header */}
        <div className="archive-header">
          <button
            className="back-btn"
            onClick={() => navigate("/")}
            aria-label="Go back home"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>Archives<span className="archive-title-dot">.</span></h2>
        </div>

        {/* Folder Grid */}
        <div className="folder-grid">
          {folders.map((folder) => (
            <button
              key={folder.label}
              className="folder-item"
              onClick={() => navigate(folder.route)}
              aria-label={`Open ${folder.label} folder`}
            >
              <i className="fa-solid fa-folder folder-icon"></i>
              <span className="folder-label">{folder.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
