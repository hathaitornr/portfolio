import React from "react"
import { Section } from "../../../components"
import styles from "../../../styles/project.module.scss"

const GeriFinal = () => {
  return (
    <Section title="Final">
      <p className={styles.content}>
        The system is comprised of 2 parts:
        <ul>
          <li>
            A series of smart devices strategically installed in the elderly patient's room to collect data. In our
            prototype, we used Samsung's smart home starter kit, specifically its motion sensor, to collect live data.
            Using Samsung’s smart app written in groovy, the data was then pushed to our “Firebase Instance.” This
            allowed us to work with the data, create visualizations, and present the insights on our dashboard via
            JavaScript.
          </li>
          <br />
          <li>A dashboard that allows nurses to monitor and act upon the collected data.</li>
        </ul>
      </p>
    </Section>
  )
}

export default GeriFinal
