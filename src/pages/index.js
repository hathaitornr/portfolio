import React from 'react';
import Img from 'gatsby-image';
import styles from '../styles/about.module.scss';
import { SEO } from '../components';

const IndexPage = ({ data }) => {
    console.log(data);
    return (<>
        <SEO title="Ammew" />
        <div id='about-container' className={styles.container}>
            <div id='img-section' className={styles.imgSection}>
                <Img fixed={data.file.childImageSharp.fixed} alt='Profile' />
            </div>
            <div id='about-section' className={styles.aboutSection}>
                <h3>Hi, I'm Mew!</h3>
                <p>Hi, my name is Hathaitorn but I go by Mew! I am a recent graduate from Cornell Tech with a dual Master's degree in Information Systems &amp; Applied Information Science with a concentration in HCI. 
                <br/><br/>
                I am passionate about designing and developing interactive applications that create meaningful impact for users. I also love creating new toys that people can enjoy and play with, whether it be a digital art experience, a robot, or an app!</p>
                <p><a href="https://www.linkedin.com/in/hrojnirun/">LinkedIn</a></p>
            </div>
        </div>
    </>)
};

export default IndexPage;

export const data = graphql`
    query {
        file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
            }
        }
        }
    }
`