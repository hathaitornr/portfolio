import React, { useMemo } from 'react';
import { Link, graphql } from 'gatsby';
import styles from '../styles/portfolio.module.scss';

import { Image } from '../components';

const Portfolio = ({ data: { allFile: { nodes } }}) => {
    const data = useMemo(() => {
        const res = {};
        nodes.forEach(node => {
            if (node.childImageSharp.original.src.includes("geri")) {
                res.geri = node;
            } else if (node.childImageSharp.original.src.includes("hlthpal")) {
                res.hlthpal = node;
            } else if (node.childImageSharp.original.src.includes("contentor")) {
                res.contentor = node;
            } else if (node.childImageSharp.original.src.includes("space")) {
                res.space = node;
            }
        });
        return res;
    }, [nodes]);
    return (
        <div className={styles.container}>
            <div id='portfolio-headline' className={styles.intro}>
                <p>Portfolio</p>
            </div>
            <div id='item-container' className={styles.itemContainer}>
                <figure className={styles.projectBox}>
                    <Link to='/hlthpal'>
                        <Image image={data.hlthpal} alt='Hlthpal' />
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/contentor'>
                        <Image image={data.contentor} alt='Contentor' />
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/geri'>
                        <Image image={data.geri} alt='Geri' />
                    </Link>
                </figure>
                <figure className={styles.projectBox}>
                    <Link to='/space'>
                        <Image image={data.space} alt='Space' />
                    </Link>
                </figure>
            </div>
        </div>
    )
};

export default Portfolio;

export const query = graphql`
query MyQuery {
    allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
      nodes {
        childImageSharp {
          original {
              src
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`