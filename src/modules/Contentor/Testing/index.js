import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const ContentorTesting = () => {
  return (
    <Section title="Testing">
      Gunna need to figure out more stuff for this section
      <Section title="Second Iteration" sectionStyle="sub">
        Section for Second Iteration
      </Section>
      <Section title="Pilot Study" sectionStyle="sub">
        <article className={styles.content}>
          The study was divided into 3 parts:
          <ul>
            <li>First, we had a short interview with each participant to collect general demographic information.</li>
            <li>
              Second, we introduced them to our marketing platform prototype. We asked them to conduct a task in which
              they would try to generate a sentence and schedule a post to be published. While they were interacting
              with the prototype, we recorded the amount of time it took to complete the task, any particular parts of
              the site they struggled to use, and whether or not they were successful.
            </li>
            <li>
              Finally, we held a short interview afterward where we asked them about their experience with the platform.
              We asked them questions regarding how they felt using our platform and why, and had them rate the
              difficulty of the tool. We also asked follow up questions regarding certain parts of the task that we
              noticed they struggled with.
            </li>
          </ul>
          From this initial pilot study, we found that users were confused by "Social Media" dropdown. While they
          understood that they could choose different options, such as "Facebook" or "Twitter", most were not aware that
          the "Social Media" text was its own option. In addition, many were confused about the purpose of the
          individual social media options if the main "Social Media" option already allowed you to choose between the
          different sites to publish to. We also found that users were very confused about the difference between the
          campaign report in the main page, and the one on the social media page.
        </article>
      </Section>
      <Section title="Further Iterations" sectionStyle="sub">
        <article className={styles.content}>
          We made a couple of improvements after collecting feedback from marketing managers:
          <ul>
            <li>
              In response to users' confusion with social media choices, we settled on having a single "Social Media"
              button where users can choose from different social media platforms. We also changed the name of the
              button to "Create Campaign" to make the purpose more direct.
            </li>
            <li>
              We separated the keyword inputs and the marketing copy suggestions into separate pages to make the site
              less congested.
            </li>
            <li>
              We chose to focus specifically on social media campaigns and removed the media-specific campaign reports,
              and instead, displayed the social media marketing reports on the main page.
            </li>
          </ul>
          As we were iterating on the platform, we performed more usability tests on different prototypes to expose more
          UX flaws and gather more feedback.
        </article>
      </Section>
    </Section>
  )
}

export default ContentorTesting
