import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Banner = ({ image }) => <div className={styles.container}><img src={image} className={styles.img}/></div>;

export default Banner;
//className={styles[image]}