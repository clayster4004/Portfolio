import styles from '../styles/socialButton.module.css';

export default function SocialButton({ img, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
      <img src={img} alt="social media icon" />
    </a>
  );
}