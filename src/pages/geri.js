import React from 'react';
import styles from '../styles/contentor.module.scss';

import { Banner, Layout } from '../components';
import banner from '../images/geri/banner.jpg';

const Geri = () => {
    return <Layout><div><Banner image={banner} /></div></Layout>
};

export default Geri;