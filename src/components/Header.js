import styles from '../styles/header.module.css';

const Header = ({ header }) => {
  return (
    <div className={styles.header}>
      <h1>{header}</h1>
    </div>
  );
}

export default Header;