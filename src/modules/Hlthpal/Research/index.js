import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const HlthpalResearch = () => {
  return (
    <Section title="Research">
      <p className={styles.content}>
        “A physical aid is much better of a predictor for sickness in the elderly than doctors” – this is what we
        discovered during our research and it posed a potential scenario for smart home tech to shine. This is because a
        lot of simple behaviors gathered by nurses in-person can assist in predicting illness among elderly patients.
        With smart home systems, the process of gathering data can be done passively and efficiently.
      </p>
      <Section title="User Interviews" sectionStyle="sub">
        Section for User Interviews
      </Section>
      <Section title="User Pain Points" sectionStyle="sub">
        Section for User Pain Points
      </Section>
    </Section>
  )
}

export default HlthpalResearch
