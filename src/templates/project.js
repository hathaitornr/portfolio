import React from 'react';
import { graphql } from 'gatsby';
import { Image } from '../components'
import styles from '../styles/project.module.scss'

const Project = ({ data: { allProjectYaml: { nodes } } }) => {
    const [data] = nodes;
    return <div className={styles.container}>
        <Image image={data.banner} />
    </div>
};

export default Project;

export const query = graphql`
    query($title: String!) {
        allProjectYaml(filter: { title: { eq: $title } }) {
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
            }
        }
    }
`