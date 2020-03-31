import React from 'react';
import { graphql } from 'gatsby';
import { Image, Section, Overview } from '../components'
import styles from '../styles/project.module.scss'

const Geri = ({ data: { allProjectYaml: { nodes } } }) => {
    const { banner, overview } = nodes[0];
    return <div className={styles.container}>
        <Image image={banner} />
        <div className={styles.contentWrapper}>
            <Overview content={overview} />
            <Section title='Research'>
                <p className={styles.content}>“A physical aid is much better of a predictor for sickness in the elderly than doctors” – this is what we discovered during our research and it posed a potential scenario for smart home tech to shine. This is because a lot of simple behaviors gathered by nurses in-person can assist in predicting illness among elderly patients. With smart home systems, the process of gathering data can be done passively and efficiently.</p>
                <Section title='User Interviews' sectionStyle='sub' headerStyle='subHeading'>
                    Section for User Interviews
                </Section>
                <Section title='User Pain Points' sectionStyle='sub' headerStyle='subHeading'>
                    Section for User Pain Points
                </Section>
            </Section>
            <Section title='Design'>
                <Section title='Ideation' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Ideation
                </Section>
                <Section title='Product Loop' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Product Loop
                </Section>
                <Section title='Prototype' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Prototype
                </Section>
                <Section title='Iterations' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Iteration
                </Section>
            </Section>
            <Section title='Testing'>
                Gunna need to figure out more stuff for this section
            </Section>
            <Section title='Final'>
                <p className={styles.content}>The system is comprised of 2 parts:
                <ul>
                    <li>A series of smart devices strategically installed in the elderly patient's room to collect data. In our prototype, we used Samsung's smart home starter kit, specifically its motion sensor, to collect live data. Using Samsung’s smart app written in groovy, the data was then pushed to our “Firebase Instance.” This allowed us to work with the data, create visualizations, and present the insights on our dashboard via JavaScript.</li>
                    <br/>
                    <li>A dashboard that allows nurses to monitor and act upon the collected data.</li></ul></p>
            </Section>
        </div>
    </div>
};

export default Geri;

export const query = graphql`
    query {
        allProjectYaml(filter: { title: { eq: "geri"  } }) {
            nodes {
                title
                path
                banner {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
                overview {
                    headline
                    problem {
                        content
                        headline
                    }
                    solution {
                        content
                        headline
                    }
                    approach {
                        members
                        tools
                        research
                        design
                        testing
                    }
                }
            }
        }
    }
`