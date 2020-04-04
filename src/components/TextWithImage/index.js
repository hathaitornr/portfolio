import React from 'react';
import styles from './styles.module.scss';

const TextWithImage = ({ content, image, order }) => {
    return (
        <div className={styles.container}>
            <div>
                {content}
            </div>
            <div className={styles[order]}>
                {image}
            </div>
        </div>
    );
};

export default TextWithImage;

TextWithImage.defaultProps = {
    order: "second"
}