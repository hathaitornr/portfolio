import React from 'react';
import styles from '../styles/contentor.module.scss';

import { Banner, Layout } from '../components';
import banner from '../images/space/banner.png';

const Space = () => {
    return <Layout><div><Banner image={banner} /></div></Layout>
};

export default Space;