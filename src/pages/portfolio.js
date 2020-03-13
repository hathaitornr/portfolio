import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/portfolio.module.scss';

import { Layout, GeriProfile, ContentorProfile, HlthpalProfile, SpaceProfile } from '../components';

const Portfolio = () => {
    return (
      <Layout>
        <div className={styles.container}>
            <div id='portfolio-headline' className={styles.headline}>
                <h1>Portfolio</h1>
            </div>
            <div id='item-container' className={styles.itemContainer}>
                <figure className={styles.projectBox}>
                    <Link to='/geri'>
                        <GeriProfile />
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/hlthpal'>
                        <HlthpalProfile />
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/contentor'>
                        <ContentorProfile />
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/space'>
                        <SpaceProfile />
                    </Link>
                </figure>
            </div>
        </div>
      </Layout>
    )
};

export default Portfolio;
