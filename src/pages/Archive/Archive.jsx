import { useState } from "react";
import "./Archive.css";
import { useNavigate } from "react-router-dom";

import archive_1 from "..//../assets/images/archive_1.jpg";
import archive_2 from "..//../assets/images/archive_2.jpg";
import archive_3 from "..//../assets/images/archive_3.jpg";
import archive_4 from "..//../assets/images/archive_4.jpg";

export default function Archive() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Navigate handler function
  const handleNavClick = (path) => {
    navigate(path);
  };

  // Gallery images data
  const images = [
    {
      id: 1,
      image: archive_1, // Replace with your actual image path
      imageQuote:
        "My first Client🤩 Project meeting and successfully done the deal✅",
    },
    {
      id: 2,
      image: archive_2,
      imageQuote: "Late night debugging session that finally worked!😴💤",
    },
    {
      id: 3,
      image: archive_3,
      imageQuote: "Client Satisfied Status after project completiion! 🤩",
    },
    {
      id: 4,
      image: archive_4,
      imageQuote: "At the serious moment when i cook something!😎",
    },
  ];

  // Open image in fullscreen
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Close fullscreen image
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="archive">
      {/* Archive Section */}
      <section id="archive" className="archive-section">
        <div className="archive-header">
          <a className="back-btn" onClick={() => handleNavClick("/")}>
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <h2>
            Archives <i className="fa-solid fa-folder-open"></i>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {images.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openImage(item)}
            >
              <img src={item.image} alt={`Archive ${item.id}`} />
              <div className="gallery-overlay">
                <i className="fa-solid fa-expand"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fullscreen-modal" onClick={closeImage}>
          <button className="close-btn" onClick={closeImage}>
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
