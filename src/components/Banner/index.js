import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const Banner = ({ image }) => <img src={image} className={styles.container}/>;

export default Banner;
//className={styles[image]}