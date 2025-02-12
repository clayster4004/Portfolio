"use client";
import styles from "../styles/navButton.module.css";
export default function NavButton({ text, onClick }) {
  return (
    <button className={styles.navButton} onClick={onClick}>
      {text}
    </button>
  );
}