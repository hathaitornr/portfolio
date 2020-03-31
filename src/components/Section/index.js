import React from 'react';
import styles from './styles.module.scss';

const Section = ({ title, sectionStyle, headerStyle, children }) => (
    <div className={styles[sectionStyle === 'main' ? 'container' : 'subContainer']}>
        <h1 className={styles[headerStyle]}>{title}</h1>
        {children}
    </div>
);

Section.defaultProps = {
    titleSize: 'sectionHeading',
    sectionStyle: 'main',
    headerStyle: 'heading'
}

export default Section;