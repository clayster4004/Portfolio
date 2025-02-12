import TechnologyElement from "./TechnologyElement";
import styles from '../styles/technologyContainer.module.css';
export default function TechnologyUsed( { techElems } ) {
  return (
    <div className={styles.techContainer}>
      {techElems.map((techElem, index) => (
        <TechnologyElement
          key={index}
          techName={techElem.techName}
          techImg={techElem.techImg}
        />
      ))}
    </div>
  );
}