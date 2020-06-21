import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const HlthpalDesign = () => {
  return (
    <Section title="Design">
      <Section title="Ideation" sectionStyle="sub" headerStyle="subHeading">
        <p className={styles.content}>
          To improve upon this method, we had to consider two important questions: (1) How do we convert this
          paper-based data collection tool into an equally, if not more, effective digital format? and (2) How do we
          design this application for a low-literate, low-income society?
        </p>
        <p className={styles.content}>
          In regard to the latter question, we discussed the need for low-end mobile devices that would be more
          accessible in developing countries. To pursue this solution, we used a lower version SDK that would be
          compatible with older phones. In regard to our first question, we designed a user flow that would summarize
          the actions of potential users, whether they be patients or clinicians, as seen below. We visualized a mobile
          application for patients where they could report their symptoms, and a web dashboard for oncologists where
          they could easily store and view all of their patient records.
        </p>
      </Section>
      <Section title="Product Loop" sectionStyle="sub" headerStyle="subHeading">
        Section for Product Loop
      </Section>
      <Section title="Prototype" sectionStyle="sub" headerStyle="subHeading">
        Section for Prototype
      </Section>
    </Section>
  )
}

export default HlthpalDesign
