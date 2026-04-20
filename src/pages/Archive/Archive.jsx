import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Archive.css";

// ─── ARCHIVE IMAGE DATA ──────────────────────────────────────────────────────
//
//  HOW TO ADD A NEW PHOTO:
//  1. Drop your image into  src/assets/images/
//  2. Add an import at the top of this block:
//       import archive_5 from "..//../assets/images/archive_5.jpg";
//  3. Add a new entry to the `archiveImages` array below.
//     Required fields: id, image, imageQuote
//     Optional: date (shown in modal)
//
// ────────────────────────────────────────────────────────────────────────────

import archive_1 from "..//../assets/images/archive_1.jpg";
import archive_2 from "..//../assets/images/archive_2.jpg";
import archive_3 from "..//../assets/images/archive_3.jpg";
import archive_4 from "..//../assets/images/archive_4.jpg";
import archive_5 from "..//../assets/images/archive_5.jpg";

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
  // ← Add new entries here
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Archive() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (item) => setSelectedImage(item);
  const closeImage = () => setSelectedImage(null);

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
          <h2>
            Archives <i className="fa-solid fa-folder-open"></i>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {archiveImages.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openImage(item)}
              aria-label={`View photo: ${item.imageQuote}`}
            >
              <img src={item.image} alt={`Archive ${item.id}`} loading="lazy" />
              <div className="gallery-overlay">
                <i className="fa-solid fa-expand"></i>
              </div>
              {/* Hover caption */}
              <div className="gallery-caption">{item.imageQuote}</div>
            </div>
          ))}
        </div>
      </section>

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
            className="close-btn"
            onClick={closeImage}
            aria-label="Close photo view"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt="Fullscreen view" />
            <div className="image-quote-overlay">
              <p>{selectedImage.imageQuote}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
