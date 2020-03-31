import React from 'react';
import { graphql } from 'gatsby';
import { Image, Section, Overview } from '../components'
import styles from '../styles/project.module.scss'

const Space = ({ data: { allProjectYaml: { nodes } } }) => {
    const { banner, overview } = nodes[0];
    return <div className={styles.container}>
        <Image image={banner} />
        <div className={styles.contentWrapper}>
            <Overview content={overview} />
            <Section title='Research'>
                <p className={styles.content}>We performed research to gain a better understanding of the marketing space and quickly realized how congested the space really was. There were many different companies providing software and applications for a variety of different purposes. There were applications for content management, performance analysis, and research. However, because each service was costly, companies would have to spend an abnormally high price to manage an efficient marketing campaign.</p>
                <Section title='User Interviews' sectionStyle='sub' headerStyle='subHeading'>
                    Section for User Interviews
                </Section>
                <Section title='Persona' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Persona
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
            </Section>
            <Section title='Testing'>
                Gunna need to figure out more stuff for this section
            </Section>
            <Section title='Final'>
                
            </Section>
        </div>
    </div>
};

export default Space;

export const query = graphql`
    query {
        allProjectYaml(filter: { title: { eq: "space" } }) {
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