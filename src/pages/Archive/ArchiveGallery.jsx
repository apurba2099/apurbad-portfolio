import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import "./Archive.css";

import archive_1 from "../../assets/images/archive_1.jpg";
import archive_2 from "../../assets/images/archive_2.jpg";
import archive_3 from "../../assets/images/archive_3.jpg";
import archive_4 from "../../assets/images/archive_4.jpg";
import archive_5 from "../../assets/images/archive_5.jpg";

const archiveImages = [
  {
    id: 1,
    image: archive_1,
    imageQuote:
      "My first Client 🤩 Project meeting and successfully done the deal ✅",
    date: "2025",
  },
  {
    id: 2,
    image: archive_2,
    imageQuote: "Late night debugging session that finally worked! 😴💤",
    date: "2025",
  },
  {
    id: 3,
    image: archive_3,
    imageQuote: "Client Satisfied Status after project completion! 🤩",
    date: "2025",
  },
  {
    id: 4,
    image: archive_4,
    imageQuote: "At the serious moment when I cook something! 😎",
    date: "2025",
  },
  {
    id: 5,
    image: archive_5,
    imageQuote:
      "First company meetup — great vibes, great people, unforgettable moments! 🤓",
    date: "2026",
  },
];

export default function ArchiveGallery() {
  const navigate = useNavigate();
  usePageTitle("Gallery");
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (item) => setSelectedImage(item);
  const closeImage = () => setSelectedImage(null);

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
        <h1 className="section-heading !mb-0">Gallery</h1>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-masonry-grid">
        {archiveImages.map((item) => (
          <div
            key={item.id}
            className="ref-gallery-item card-hover"
            onClick={() => openImage(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openImage(item)}
            aria-label={`View photo: ${item.imageQuote}`}
          >
            <img
              src={item.image}
              alt={`Archive ${item.id}`}
              className="ref-gallery-img"
              loading="lazy"
              decoding="async"
            />
            <div className="gallery-hover-overlay">
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
                className="gallery-expand-icon"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
            <div className="gallery-caption-bar">{item.imageQuote}</div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fullscreen-modal"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Full size photo view"
        >
          <button
            type="button"
            className="close-modal-btn"
            onClick={closeImage}
            aria-label="Close photo view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt="Fullscreen view"
              className="modal-image"
            />
            <div className="modal-caption-wrap">
              <p>{selectedImage.imageQuote}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
