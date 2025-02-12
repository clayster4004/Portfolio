// UNUSED
import React, { useState } from 'react';
import styles from '../styles/photoAlbum.module.css';

export default function PhotoAlbum({
  photos = [],
  width = "400px",   // default width and height
  height = "300px"
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!photos || photos.length === 0) {
    return <div className={styles['photo-album-empty']}>No photos available.</div>;
  }

  return (
    <div
      className={styles['photo-album-container']}
      style={{ width, height }}
    >
      <img
        src={photos[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className={styles['photo-album-image']}
      />
      <button
        className={`${styles['photo-album-arrow']} ${styles['photo-album-arrow-left']}`}
        onClick={handlePrev}
      >
        &#9664;
      </button>
      <button
        className={`${styles['photo-album-arrow']} ${styles['photo-album-arrow-right']}`}
        onClick={handleNext}
      >
        &#9654;
      </button>
    </div>
  );
}
