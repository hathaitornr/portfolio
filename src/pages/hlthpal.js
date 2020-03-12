import React from 'react';
import styles from '../styles/contentor.module.scss';

import { Banner, Layout } from '../components';
import banner from '../images/hlthpal/banner.png';

const Hlthpal = () => {
    return <Layout><div><Banner image={banner} /></div></Layout>
};

export default Hlthpal;