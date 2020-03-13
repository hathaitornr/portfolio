import React from 'react';
import styles from './styles.module.scss';

const Section = ({ title, titleSize, children }) => (
    <div>
        <h1 className={styles[titleSize]}>{title}</h1>
        {children}
    </div>
);

Section.defaultProps = {
    titleSize: 'heading'
}

export default Section;