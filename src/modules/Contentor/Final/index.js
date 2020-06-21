import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const ContentorFinal = () => {
  return (
    <Section title="Final">
      <p className={styles.content}>The workflow is broken into 3 main parts:</p>
      <p className={styles.content}>When the user launches our system, they are brought to the login page.</p>
      <p className={styles.content}>
        After the user logs in, they are brought to the dashboard. The dashboard allows the user to see their previous
        campaign performance, i.e. total reach and conversion rate, as well as any upcoming posts.
      </p>
      <p className={styles.content}>
        In the content generation page, the user simply has to enter a few keywords, separated by commas, and click
        "Generate". We decided to focus solely on social media advertising and to exclude email marketing. We made this
        decision to reduce the complexity of the application. Based on user feedback, we found that we needed to focus
        on a specific medium so that we could show a clearer user journey.
      </p>
      <p className={styles.content}>
        With those few keywords, our ML algorithm generates different suggested copies for Facebook, Twitter, and
        Instagram. From these copies, the user can select which copy they want for any of these platforms. Our
        application also fetches appropriate images based on the keywords to go along with the campaign. In this
        example, we used "spring break, sunny" as input keywords.
      </p>
      <p className={styles.content}>
        After the user clicks "Publish", our ML algorithm automatically schedules the post at a calculated optimal time
        that will optimize conversion rates.
      </p>
    </Section>
  )
}

export default ContentorFinal
