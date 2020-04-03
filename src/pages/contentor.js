import React from 'react';
import { graphql } from 'gatsby';
import { Image, Section, Overview } from '../components'
import styles from '../styles/project.module.scss'

const Contentor = ({ data: { allProjectYaml: { nodes } } }) => {
    const { banner, overview } = nodes[0];
    return <div className={styles.container}>
        <Image image={banner} />
        <div className={styles.contentWrapper}>
            <Overview content={overview} />
            <Section title='Research'>
                <p className={styles.content}>We performed research to gain a better understanding of the marketing space and quickly realized how congested the space really was. There were many different companies providing software and applications for a variety of different purposes. There were applications for content management, performance analysis, and research. However, because each service was costly, companies would have to spend an abnormally high price to manage an efficient marketing campaign.</p>
                <Section title='Surveys' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>
                    From these surveys, we narrowed down a list of potential users from different aspects of the marketing field, ranging from content writers to managers. We chose users who volunteered to be interviewed and provided very rich responses. The purpose of the interview was to dive deeper into some of the survey responses and hear more about the participants' issues. From these interviews, we extracted these key findings:
                        <ul>
                            <li>Demographics: We started by asking some general demographic questions such as age, sex, occupation, and years in that occupation.</li>
                            <li>Company-related Questions: We also ask information about the size of their company and their marketing team, and the industry they are in.</li>
                            <li>Work-related Tasks: The next step in the survey was a list of different marketing job functions, from which the participants would select from to indicate their primary responsibilities and how much time they spend on each one.</li>
                            <li>Tools: The next step was a list of different marketing tools and services. The participant would select whether or not they knew what the tool was, if they have used it, how often do they use it, how much the tool assists them in their responsibilities, etc.</li>
                            <li>Short Answer: The last section asked them questions about their opinions of their job functions, areas for improvement, and notable issues.</li>
                            <li>Interview: Finally, we asked if they would be open to an interview in the future.</li>
                        </ul>
                    </p>
                </Section>
                <Section title='User Interviews' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>
                        From these surveys, we narrowed down a list of potential users from different aspects of the marketing field, ranging from content writers to managers. We chose users who volunteered to be interviewed and provided very rich responses. The purpose of the interview was to dive deeper into some of the survey responses and hear more about the participants' issues. From these interviews, we extracted these key findings:
                        <ul>
                            <li>Demographics: We started by asking some general demographic questions such as age, sex, occupation, and years in that occupation.</li>
                            <li>Company-related Questions: We also ask information about the size of their company and their marketing team, and the industry they are in.</li>
                            <li>Work-related Tasks: The next step in the survey was a list of different marketing job functions, from which the participants would select from to indicate their primary responsibilities and how much time they spend on each one.</li>
                            <li>Tools: The next step was a list of different marketing tools and services. The participant would select whether or not they knew what the tool was, if they have used it, how often do they use it, how much the tool assists them in their responsibilities, etc.</li>
                            <li>Short Answer: The last section asked them questions about their opinions of their job functions, areas for improvement, and notable issues.</li>
                            <li>Interview: Finally, we asked if they would be open to an interview in the future.</li>
                        </ul>
                    </p>
                </Section>
                <Section title='Persona' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>Based on our findings from those user interviews, we created two user personas to represent a potential clinician and patient and their issues. We wanted to get a sense of a user's motivations and frustrations in their current situation and how we can address those points.</p>
                </Section>
                <Section title='User Pain Points' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>
                        Below is a summary of the user pain points
                        <ul>
                            <li>There are many services and tools that target only subsets of the marketing workflow</li>
                            <li>Small businesses and startups cannot afford a marketing team and usually leave these tasks to someone who lacks the marketing expertise</li>
                            <li>These companies need a tool that can push content out quickly and monitor campaigns efficiently.</li>
                        </ul>
                    </p>
                </Section>
            </Section>
            <Section title='Design'>
                <Section title='Ideation' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>To improve upon this method, we had to consider two important questions: (1) How do we convert this paper-based data collection tool into an equally, if not more, effective digital format? and (2) How do we design this application for a low-literate, low-income society?</p>
                    <p className={styles.content}>In regard to the latter question, we discussed the need for low-end mobile devices that would be more accessible in developing countries. To pursue this solution, we used a lower version SDK that would be compatible with older phones. In regard to our first question, we designed a user flow that would summarize the actions of potential users, whether they be patients or clinicians, as seen below. We visualized a mobile application for patients where they could report their symptoms, and a web dashboard for oncologists where they could easily store and view all of their patient records.</p>
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
                <Section title='Second Iteration' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Second Iteration
                </Section>
                <Section title='Pilot Study' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>
                        The study was divided into 3 parts:
                        <ul>
                            <li>First, we had a short interview with each participant to collect general demographic information.</li>
                            <li>Second, we introduced them to our marketing platform prototype. We asked them to conduct a task in which they would try to generate a sentence and schedule a post to be published. While they were interacting with the prototype, we recorded the amount of time it took to complete the task, any particular parts of the site they struggled to use, and whether or not they were successful.</li>
                            <li>Finally, we held a short interview afterward where we asked them about their experience with the platform. We asked them questions regarding how they felt using our platform and why, and had them rate the difficulty of the tool. We also asked follow up questions regarding certain parts of the task that we noticed they struggled with.</li>
                        </ul>
                        From this initial pilot study, we found that users were confused by "Social Media" dropdown. While they understood that they could choose different options, such as "Facebook" or "Twitter", most were not aware that the "Social Media" text was its own option. In addition, many were confused about the purpose of the individual social media options if the main "Social Media" option already allowed you to choose between the different sites to publish to. We also found that users were very confused about the difference between the campaign report in the main page, and the one on the social media page.
                    </p>
                </Section>
                <Section title='Further Iterations' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>
                        We made a couple of improvements after collecting feedback from marketing managers:
                        <ul>
                            <li>In response to users' confusion with social media choices, we settled on having a single "Social Media" button where users can choose from different social media platforms. We also changed the name of the button to "Create Campaign" to make the purpose more direct.</li>
                            <li>We separated the keyword inputs and the marketing copy suggestions into separate pages to make the site less congested.</li>
                            <li>We chose to focus specifically on social media campaigns and removed the media-specific campaign reports, and instead, displayed the social media marketing reports on the main page.</li>
                        </ul>
                        As we were iterating on the platform, we performed more usability tests on different prototypes to expose more UX flaws and gather more feedback.
                    </p>
                </Section>
            </Section>
            <Section title='Final'>
                <p className={styles.content}>The workflow is broken into 3 main parts:</p>
                <p className={styles.content}>When the user launches our system, they are brought to the login page.</p>
                <p className={styles.content}>After the user logs in, they are brought to the dashboard. The dashboard allows the user to see their previous campaign performance, i.e. total reach and conversion rate, as well as any upcoming posts.</p>
                <p className={styles.content}>In the content generation page, the user simply has to enter a few keywords, separated by commas, and click "Generate". We decided to focus solely on social media advertising and to exclude email marketing. We made this decision to reduce the complexity of the application. Based on user feedback, we found that we needed to focus on a specific medium so that we could show a clearer user journey.</p>
                <p className={styles.content}>With those few keywords, our ML algorithm generates different suggested copies for Facebook, Twitter, and Instagram. From these copies, the user can select which copy they want for any of these platforms. Our application also fetches appropriate images based on the keywords to go along with the campaign. In this example, we used "spring break, sunny" as input keywords.</p>
                <p className={styles.content}>After the user clicks "Publish", our ML algorithm automatically schedules the post at a calculated optimal time that will optimize conversion rates.</p>
            </Section>
        </div>
    </div>
};

export default Contentor;

export const query = graphql`
    query {
        allProjectYaml(filter: { title: { eq: "contentor" } }) {
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