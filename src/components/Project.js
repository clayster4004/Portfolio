import styles from '../styles/project.module.css';

export default function Project( { projectName, projectDesc, photoAlbum, techElems, ghLink } ) {
  return (
    <div className={styles.wholeProject}>
      <div className={styles.projectNameDesc}>
        <div>
          <h1>{projectName}</h1>
          <p>{projectDesc}</p>
        </div>
        <div>
          {photoAlbum}
        </div>
      </div>
      <div className={styles.techElems}>
        {techElems}
        <div>
        <button className={styles.checkItOut} href={ghLink} target="_blank">Check it out!</button>
        </div>
      </div>
    </div>
  );

}