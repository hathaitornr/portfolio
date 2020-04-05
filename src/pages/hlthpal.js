import React from 'react';
import { graphql } from 'gatsby';
import { Image, Section, Overview, Sidebar } from '../components'
import styles from '../styles/project.module.scss'

const Hlthpal = ({ data: { allProjectYaml: { nodes } } }) => {
    const { banner, overview } = nodes[0];
    return <div className={styles.container}>
        <Image image={banner} alt='Banner'/>
        <div className={styles.contentWrapper}>
            <Overview content={overview} />
            <Section title='Research'>
                <Section title='Literature Review' sectionStyle='sub' headerStyle='subHeading'>
                    <p className={styles.content}>We performed extensive literature review on healthcare and technology in developing countries to get a sense for the space we were entering. In response to the inaccessibility of healthcare in developing countries, researchers are leveraging the use of technology, especially mobile phones, to make healthcare more accessible in these areas. For example, in a study in Uganda, the researchers conducted residential training for community-based peer health workers (PHW) and gave them mobile phones. These PHWs would conduct home visits and send text messages reporting adherence and clinical data. These data would be analyzed and reviewed by clinical staff, who would give recommendations back to the PHWs and/or directly to patients. The result showed that 89% of clinic staff strongly agreed that mobile phones used by PHWs improved the overall care of the clinic patients.</p>
                    <p className={styles.content}>Given the growing pace of mHealth applications in developing countries and the intangible value shown by palliative care applications deployed in developed countries, we are well-positioned to design a tool that takes the lessons learnt from both branches to develop a tool that addresses the needs of patients receiving palliative care in developing countries.</p>
                </Section>
                <Section title='User Interviews' sectionStyle='sub' headerStyle='subHeading'>
                    <article className={styles.content}>Due to the unique challenge of targeting users in a different continent, we knew that arranging user interviews would be difficult. However, due to our partnership with Harvard Medical School, which was spearheading the effort to introduce the healthcare interventions to Rwandan clinics, we were able to speak with experts in the field and hold remote user interviews with oncologists in Rwanda and Harvard. From these interviews, we extracted these key findings:
                        <ul>
                            <li>Before the actual writing process, writers have to spend the majority of a work week performing market research.</li>
                            <li>When it comes down to the writing process, they have to spend time thinking of the optimal keywords that would attract the ideal user</li>
                            <li>Due to an increase in the number of digital platforms, writers have to spend a lot of time rewriting the same content to match the styles of each medium.</li>
                            <li>There is no singular tool for all of these functions. Marketing teams must use different tools for each task.</li>
                            <li>Not all companies have large marketing teams. Some companies delegate these tasks to a few employees, who do not possess the necessary marketing skills.</li>
                        </ul>
                    </article>
                </Section>
                <Section title='Persona' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Persona
                </Section>
                <Section title='Storyboard' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Storyboard
                </Section>
                <Section title='User Pain Points' sectionStyle='sub' headerStyle='subHeading'>
                    Section for User Pain Points
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
                <Section title='Pilot Test' sectionStyle='sub' headerStyle='subHeading'>
                    <article className={styles.content}>
                        Over the course of the project, we conducted several remote pilot tests with oncologists, and made several iterations on our mobile and dashboard prototypes. Prior to testing with actual patients, we had oncologists test out both the mobile and web applications. We wanted to see if the oncologist were able to successfully complete a series of tasks with ease and observe any potential usability flaws. For example, we had oncologists go through the mobile application and complete the questionnaire. While they were submitting their answers, we observed any difficulties they had and how long it took for them to complete the questionnaire. Afterward, I held semi-structured interviews with them to follow up on their experience and ask about any difficulties they had. Some of the key issues were:
                        <ul>
                            <li>One of the oncologists in Rwanda mentioned the importance of having a signature feature so that activity on the dashboard can be tracked and attributed to the right individuals. This is especially important in a high-stake situation like palliative care where life is involved.</li>
                            <li>They wanted the Patient Registration Form to have a field for special demographic information. Rwanda has a national demographic classification system that wasn't reflected in our design.</li>
                        </ul>
                    </article>
                </Section>
                <Section title='Iterations' sectionStyle='sub' headerStyle='subHeading'>
                    Section for Iteration
                </Section>
                <Section title='Field Test' sectionStyle='sub' headerStyle='subHeading'>
                    <article className={styles.content}>
                        We held a second field test with 50 patients and 10 oncologists over the span of one month.
                        <ul>
                            <li>The overall feedback from surveys was very positive. Doctors found that having a web dashboard allowed them to be more organized and efficient in monitoring patients, while patients found the mobile app to be easy-to-use and very convenient. Overall, it significantly improved symptom management for patients and communication between the patient and the doctor. One point of concern was that some patients felt that this new system would remove the need for in-person patient-doctor interactions. However, the oncologists assured them that they would still be holding appointments and providing the same quality of care.</li>
                            <li>In addition to surveys, we analyzed quantitative data from the application. We measured the time it took to complete tasks as well as any technical errors. Analysis of the data showed that there were zero technical errors while performing tasks. Below is a visualization of the app usage of one of the oncologists:</li>
                        </ul>
                    </article>
                </Section>
            </Section>
            <Section title='Final'>
                <article className={styles.content}>The system is comprised of 2 parts:
                <ul>
                    <li>A series of smart devices strategically installed in the elderly patient's room to collect data. In our prototype, we used Samsung's smart home starter kit, specifically its motion sensor, to collect live data. Using Samsung’s smart app written in groovy, the data was then pushed to our “Firebase Instance.” This allowed us to work with the data, create visualizations, and present the insights on our dashboard via JavaScript.</li>
                    <br/>
                    <li>A dashboard that allows nurses to monitor and act upon the collected data.</li></ul></article>
            </Section>
        </div>
    </div>
};

export default Hlthpal;

export const query = graphql`
    query {
        allProjectYaml(filter: { title: { eq: "hlthpal" } }) {
            nodes {
                ...basicInfo
            }
        }
    }
`