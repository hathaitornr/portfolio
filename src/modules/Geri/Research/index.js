import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const GeriResearch = () => {
  return (
    <Section title="Research">
      <p className={styles.content}>
        We performed research to gain a better understanding of the marketing space and quickly realized how congested
        the space really was. There were many different companies providing software and applications for a variety of
        different purposes. There were applications for content management, performance analysis, and research. However,
        because each service was costly, companies would have to spend an abnormally high price to manage an efficient
        marketing campaign.
      </p>
      <Section title="Surveys" sectionStyle="sub" headerStyle="subHeading">
        <article className={styles.content}>
          From these surveys, we narrowed down a list of potential users from different aspects of the marketing field,
          ranging from content writers to managers. We chose users who volunteered to be interviewed and provided very
          rich responses. The purpose of the interview was to dive deeper into some of the survey responses and hear
          more about the participants' issues. From these interviews, we extracted these key findings:
          <ul>
            <li>
              Demographics: We started by asking some general demographic questions such as age, sex, occupation, and
              years in that occupation.
            </li>
            <li>
              Company-related Questions: We also ask information about the size of their company and their marketing
              team, and the industry they are in.
            </li>
            <li>
              Work-related Tasks: The next step in the survey was a list of different marketing job functions, from
              which the participants would select from to indicate their primary responsibilities and how much time they
              spend on each one.
            </li>
            <li>
              Tools: The next step was a list of different marketing tools and services. The participant would select
              whether or not they knew what the tool was, if they have used it, how often do they use it, how much the
              tool assists them in their responsibilities, etc.
            </li>
            <li>
              Short Answer: The last section asked them questions about their opinions of their job functions, areas for
              improvement, and notable issues.
            </li>
            <li>Interview: Finally, we asked if they would be open to an interview in the future.</li>
          </ul>
        </article>
      </Section>
      <Section title="User Interviews" sectionStyle="sub" headerStyle="subHeading">
        <article className={styles.content}>
          From these surveys, we narrowed down a list of potential users from different aspects of the marketing field,
          ranging from content writers to managers. We chose users who volunteered to be interviewed and provided very
          rich responses. The purpose of the interview was to dive deeper into some of the survey responses and hear
          more about the participants' issues. From these interviews, we extracted these key findings:
          <ul>
            <li>
              Demographics: We started by asking some general demographic questions such as age, sex, occupation, and
              years in that occupation.
            </li>
            <li>
              Company-related Questions: We also ask information about the size of their company and their marketing
              team, and the industry they are in.
            </li>
            <li>
              Work-related Tasks: The next step in the survey was a list of different marketing job functions, from
              which the participants would select from to indicate their primary responsibilities and how much time they
              spend on each one.
            </li>
            <li>
              Tools: The next step was a list of different marketing tools and services. The participant would select
              whether or not they knew what the tool was, if they have used it, how often do they use it, how much the
              tool assists them in their responsibilities, etc.
            </li>
            <li>
              Short Answer: The last section asked them questions about their opinions of their job functions, areas for
              improvement, and notable issues.
            </li>
            <li>Interview: Finally, we asked if they would be open to an interview in the future.</li>
          </ul>
        </article>
      </Section>
      <Section title="Persona" sectionStyle="sub" headerStyle="subHeading">
        <p className={styles.content}>
          Based on our findings from those user interviews, we created two user personas to represent a potential
          clinician and patient and their issues. We wanted to get a sense of a user's motivations and frustrations in
          their current situation and how we can address those points.
        </p>
      </Section>
      <Section title="User Pain Points" sectionStyle="sub" headerStyle="subHeading">
        <article className={styles.content}>
          Below is a summary of the user pain points
          <ul>
            <li>There are many services and tools that target only subsets of the marketing workflow</li>
            <li>
              Small businesses and startups cannot afford a marketing team and usually leave these tasks to someone who
              lacks the marketing expertise
            </li>
            <li>These companies need a tool that can push content out quickly and monitor campaigns efficiently.</li>
          </ul>
        </article>
      </Section>
    </Section>
  )
}

export default GeriResearch
