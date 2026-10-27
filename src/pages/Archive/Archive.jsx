import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Archive.css";

const folders = [
  { label: "music", route: "/archive/music" },
  { label: "gallery", route: "/archive/gallery" },
];

export default function Archive() {
  const navigate = useNavigate();
  usePageTitle("Archives");

  return (
    <div className="archive-page-container">
      {/* Top Header with Back Button */}
      <div className="page-header-row">
        <button
          type="button"
          className="back-icon-btn"
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
        <h1 className="section-heading !mb-0">Archives</h1>
      </div>

      {/* Folder Row */}
      <div className="archive-folders-wrap">
        {folders.map((folder) => (
          <button
            key={folder.label}
            type="button"
            className="ref-folder-card card-hover"
            onClick={() => navigate(folder.route)}
            aria-label={`Open ${folder.label} folder`}
          >
            <span className="ref-folder-icon-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width="64"
                height="48"
                className="ref-folder-svg"
              >
                <path
                  fill="var(--text-muted)"
                  d="M128 512L512 512C547.3 512 576 483.3 576 448L576 208C576 172.7 547.3 144 512 144L362.7 144C355.8 144 349 141.8 343.5 137.6L305.1 108.8C294 100.5 280.5 96 266.7 96L128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512z"
                ></path>
              </svg>
            </span>
            <span className="ref-folder-name font-mono">{folder.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
