import React from 'react';
import styles from './styles.module.scss';

const ProjectOverview = ({ about, problem, goals, solution }) => (
    <div className={styles.container}>
        <div className={styles.item}>
            <p className={styles.title}>About</p>
            <p className={styles.sectionContent} dangerouslySetInnerHTML={{ __html: about }}/>
        </div>
        <div className={styles.item}>
            <p className={styles.title}>Problem</p>
            <p className={styles.sectionContent} dangerouslySetInnerHTML={{ __html: problem }}/>
        </div>
        <div className={styles.item}>
            <p className={styles.title}>Goals</p>
            <p className={styles.sectionContent} dangerouslySetInnerHTML={{ __html: goals }} />
        </div>
        <div className={styles.item}>
            <p className={styles.title}>Solution</p>
            <p className={styles.sectionContent} dangerouslySetInnerHTML={{ __html: solution }} />
        </div>
    </div>
);

export default ProjectOverview;