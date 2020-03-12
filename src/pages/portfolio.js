// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-3/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/portfolio.module.scss';

import geri from '../images/portfolio/geri.png';
import hlthpal from '../images/portfolio/hlthpal.png';
import space from '../images/portfolio/space.png';
import contentor from '../images/portfolio/contentor.jpg';

import { Layout } from '../components';

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
                        <img src={geri} alt='Geri' width="440" height="300"/>
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/hlthpal'>
                        <img src={hlthpal} alt='HlthPal' width="440" height="300"/>
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/contentor'>
                        <img src={contentor} alt='Contentor' width="440" height="300"/>
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/space'>
                        <img src={space} alt='Space' width="440" height="300"/>
                    </Link>
                </figure>
            </div>
        </div>
      </Layout>
    )
};

export default Portfolio;
