import React from 'react';
import { Section, TextWithImage } from '..';
import styles from './styles.module.scss';

const Overview = ({ content, ...props }) => {
    const { headline, problem, solution, approach } = content;
    const { members, research, design, testing } = approach;
    console.log(solution);
    return <Section title={headline} style='main'>
        <Section title={problem.headline} sectionStyle='sub' headerStyle='subHeading'>
            <p className={styles.content}>{problem.content}</p>
        </Section>
        <Section title={solution.headline} sectionStyle='sub' headerStyle='subHeading'>
            <p className={styles.content}>{solution.content}</p>

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