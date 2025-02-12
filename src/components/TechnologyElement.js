import styles from '../styles/technologyElement.module.css';

export default function TechnologyElement( { techName, techImg } ) {
  return (
    <div className={styles.techElement}>
      <img src={techImg} alt={techName} />
      <p>{techName}</p>
    </div>
  );
}