import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const HlthpalTesting = () => {
  return (
    <Section title="Testing">
      <Section title="Pilot Test" sectionStyle="sub" headerStyle="subHeading">
        <article className={styles.content}>
          Over the course of the project, we conducted several remote pilot tests with oncologists, and made several
          iterations on our mobile and dashboard prototypes. Prior to testing with actual patients, we had oncologists
          test out both the mobile and web applications. We wanted to see if the oncologist were able to successfully
          complete a series of tasks with ease and observe any potential usability flaws. For example, we had
          oncologists go through the mobile application and complete the questionnaire. While they were submitting their
          answers, we observed any difficulties they had and how long it took for them to complete the questionnaire.
          Afterward, I held semi-structured interviews with them to follow up on their experience and ask about any
          difficulties they had. Some of the key issues were:
          <ul>
            <li>
              One of the oncologists in Rwanda mentioned the importance of having a signature feature so that activity
              on the dashboard can be tracked and attributed to the right individuals. This is especially important in a
              high-stake situation like palliative care where life is involved.
            </li>
            <li>
              They wanted the Patient Registration Form to have a field for special demographic information. Rwanda has
              a national demographic classification system that wasn't reflected in our design.
            </li>
          </ul>
        </article>
      </Section>
      <Section title="Iterations" sectionStyle="sub" headerStyle="subHeading">
        Section for Iteration
      </Section>
      <Section title="Field Test" sectionStyle="sub" headerStyle="subHeading">
        <article className={styles.content}>
          We held a second field test with 50 patients and 10 oncologists over the span of one month.
          <ul>
            <li>
              The overall feedback from surveys was very positive. Doctors found that having a web dashboard allowed
              them to be more organized and efficient in monitoring patients, while patients found the mobile app to be
              easy-to-use and very convenient. Overall, it significantly improved symptom management for patients and
              communication between the patient and the doctor. One point of concern was that some patients felt that
              this new system would remove the need for in-person patient-doctor interactions. However, the oncologists
              assured them that they would still be holding appointments and providing the same quality of care.
            </li>
            <li>
              In addition to surveys, we analyzed quantitative data from the application. We measured the time it took
              to complete tasks as well as any technical errors. Analysis of the data showed that there were zero
              technical errors while performing tasks. Below is a visualization of the app usage of one of the
              oncologists:
            </li>
          </ul>
        </article>
      </Section>
    </Section>
  )
}

export default HlthpalTesting
