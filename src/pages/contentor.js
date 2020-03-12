import React from 'react';
import styles from '../styles/contentor.module.scss';

import { Banner, Layout } from '../components';
import banner from '../images/contentor/banner.jpg';

const Contentor = () => {
    return <Layout><div><Banner image={banner} /></div></Layout>
};

export default Contentor;