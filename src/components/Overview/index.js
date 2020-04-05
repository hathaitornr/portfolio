import React from 'react';
import { Section, TextWithImage, Image } from '..';
import styles from './styles.module.scss';

const Overview = ({ content, ...props }) => {
    const { headline, problem, solution, approach } = content;
    const { members, research, design, testing } = approach;
    const { feature1, feature2 } = solution;
    return <Section title={headline} style='main'>
        <Section title={problem.headline} sectionStyle='sub' headerStyle='subHeading'>
            <p className={styles.content}>{problem.content}</p>
        </Section>
        <Section title={solution.headline} sectionStyle='sub' headerStyle='subHeading'>
            <p className={styles.content}>{solution.content}</p>
            <TextWithImage content={feature1.content} image={feature1.image} reverse={feature1.reverse} {...props} />
            <TextWithImage content={feature2.content} image={feature2.image} reverse={feature2.reverse} {...props} />
        </Section>
        <Section title='Our Approach' sectionStyle='sub' headerStyle='subHeading'>
            <p className={styles.content}><strong>Members: </strong> {members}</p>
            <p className={styles.content}><strong>Design: </strong> {design}</p>
            <p className={styles.content}><strong>Research: </strong> {research}</p>
            <p className={styles.content}><strong>Testing: </strong> {testing}</p>
        </Section>
    </Section>;
};

export default Overview;