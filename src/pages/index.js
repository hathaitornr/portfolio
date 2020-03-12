import React from 'react';
import styles from '../styles/about.module.scss';
import { Image } from '../components';
import { Layout, SEO } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            {/* <SEO title="Ammew" /> */}
            <div id='about-container' className={styles.container}>
                <div id='img-section' className={styles.imgSection}>
                    <Image name={'photo.png'} />
                </div>
                <div id='about-section' className={styles.aboutSection}>
                    <h3>Hi, I'm Mew!</h3>
                    <p>Hi, my name is Hathaitorn but I go by Mew! I am a recent graduate from Cornell Tech with a dual Master's degree in Information Systems &amp; Applied Information Science with a concentration in HCI. 
                    <br/><br/>
                    I am passionate about designing and developing interactive applications that create meaningful impact for users. I also love creating new toys that people can enjoy and play with, whether it be a digital art experience, a robot, or an app!</p>
                    <p><a href="https://www.linkedin.com/in/hrojnirun/">LinkedIn</a></p>
                </div>
            </div>
        </Layout>
    )
};

export default IndexPage;