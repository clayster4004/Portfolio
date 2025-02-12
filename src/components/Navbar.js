"use client";
import NavButton from "./NavButton";
import styles from "../styles/navbar.module.css";

export default function Navbar({ buttons }) {
  return (
    <div className={styles.navbar}>
      {buttons.map((button, index) => (
        <NavButton
          key={index}
          text={button.text}
          onClick={button.onClick} // passed from the parent
        />
      ))}
    </div>
  );
}
