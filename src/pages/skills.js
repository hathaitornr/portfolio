import React from "react"
import { Link } from "gatsby"
import styles from "../styles/skills.module.scss"

const Skills = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>UX Methods</h1>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Qualitative Interviews</b>
        </h2>
        <p>
          I used qualitative interviews in many of my projects. It allowed me to contemplate the types of questions that
          are important and to get specific answers to address those concerns. Here are some examples:
          <br />
          <br />
          <li>
            <Link className={styles.link} href="hlthpal.html">
              HlthPal
            </Link>
            : In this project, we spoke with oncologists and asked them about their daily routine and work schedule.
            More specifically, we asked about challenges they face and specific tasks they perform when caring for
            cancer patients. Finally, we asked how they managed patient data and any tools they use to perform this task
            and any others.
          </li>
          <br />
          <li>
            <Link className={styles.link} to="geri.html">
              Geri
            </Link>
            : In this project, we spoke with nurses, doctors, and caretakers at nursing homes. Here, we asked them
            questions regarding their daily tasks and how they monitor their patients. Specifically we asked if patients
            are monitored 24/7 and how nurses keep track of patient files and ailments.
          </li>
          <br />
          <li>
            <Link className={styles.link} to="contentor.html">
              Contentor
            </Link>
            : In this project, we spoke with social media managers, content creators, and marketeers to get a sense of
            their work duties and challenges they face on the job. We also asked for their feedback about what sort of
            tool they would find the most useful to help them perform their duties.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Contextual Inquiry</b>
        </h2>
        <p>
          Contextual inquiries were very useful to gather large amounts of unstructured data while observing ideal users
          in their natural setting. Here are some examples:
          <br />
          <br />
          <li>
            <Link className={styles.link} to="">
              SmartKitchen
            </Link>
            : In this project, we observed students and young professionals as they tried to cook dinner. We wanted to
            gather data on the food choices of this particular demographic as they manage a busy lifestyle. We found
            that many of our participants made very simple dishes that took very little time to prepare and cook, and
            most of them used their mobile devices while cooking.
          </li>
          <br />
          <li>
            <Link className={styles.link} to="hlthpal.html">
              HlthPal
            </Link>
            : While we could not shadow community health workers in Rwanda, we were fortunate to be able to shadow
            nurses at Coler Hospital. We observed nurses as they perused patient information, administered treatments,
            and made friendly conversation with patients.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Survey Design</b>
        </h2>
        <p>
          For some projects, it was difficult to reach out to ideal participants. As such, we created surveys to try to
          reach out to members of various organizations.
          <br />
          <br />
          <li>
            <Link className={styles.link} to="hlthpal.html">
              HlthPal
            </Link>
            : We wanted to reach out to cancer survivors to hear more about their experiences. However, due to the
            challenge of finding and meeting up with cancer survivors, we created a survey that was sent out to cancer
            survivor groups. The survey primarily asked them details about the quality of care they received while in
            the hospital or in treatment.
          </li>
          <br />
          <li>
            <Link className={styles.link} to="contentor.html">
              Contentor
            </Link>
            : We reached out to many different people working in the marketing industry to gather a large amount of
            feedback as quickly as possible. We asked them questions regarding their personal information, their company
            and the industry it belongs to, their work-related functions and tools, and any issues they have come across
            in their existing workflow.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Persona</b>
        </h2>
        <p>
          After performing research and user interviews, I and my team decided to use personas to encapsulate all of our
          key findings into an ideal user.
          <br />
          <br />
          <li>
            <Link className={styles.link} to="hlthpal.html">
              HlthPal
            </Link>
            : For this project, we found that our ideal user was an oncologist who would benefit from a patient
            dashboard to manage and organize all of his patient files.
          </li>
          <br />
          <li>
            <Link className={styles.link} to="contentor.html">
              Contentor
            </Link>
            : For this project, we found that our ideal user was an overworked employee at a startup who has to spend a
            lot of time using different tools to perform market research, content creation, and performance
            monitoring/analytics.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Usability-Lab Studies</b>
        </h2>
        <p>
          For my projects, I was involved in bringing in test users to play around with my application to test the
          functionality and observe an UX issues.
          <br />
          <br />
          <li>
            <Link className={styles.link} to="hlthpal.html">
              HlthPal
            </Link>
            : We brought in clinicians and potential patients to use our web and mobile applications to observe how they
            understood the workflow and record any issues they had with the functionality or the experience as a whole.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Participatory Design</b>
        </h2>
        <p>
          In cases where we were in regular contact with our target users, we were fortunate enough to gather their
          feedback for how the application should be envisioned.
          <br />
          <br />
          <li>
            <Link className={styles.link} to="risland.html">
              RIsland
            </Link>
            : We regularly spoke with members of the garden club who had their own vision and passion for the project.
            We deliberated and brainstormed new ideas to create a sense of community for the site based on an
            appreciation of nature.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Rigorous Evaluation Protocol</b>
        </h2>
        <p>
          In one project, I wrote a rigorous evaluation protocol for user testing. The purpose of this protocol was to
          have users engage in a series of tasks to observe and record any potential UX issues.
          <br />
          <br />
          <li>
            <Link className={styles.link} to="">
              SmartKitchen
            </Link>
            : In this project, I created a protocol to see how participants would interact with a smart kitchen
            prototype. I wrote out a list of tasks such as re-ordering items in the smart fridge or set up an expiration
            notification. Finally, after the user performs the tasks, they would be asked a series of questions using a
            Likert scale to record their opinions on the overall experience.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>A/B Testing</b>
        </h2>
        <p>
          In cases where teammates disagreed on the most optimal approach towards a particular task, we initiated A/B
          tests in order to solve the dilemma.
          <br />
          <br />
          <li>
            <Link className={styles.link} to="hlthpal.html">
              HlthPal
            </Link>
            : We were tasked with adding a feature to the app that would switch the language of the UI based on a user's
            input. We found that there were 2 approaches to this. Either we could make copies of all of the pages and
            have each set contain text for a specific langauge, or we could store all of the text in different json
            files and load them into the app, depending on the language selected. We decided to perform an A/B test on
            this and found that the latter approach performed faster.
          </li>
        </p>
      </div>
      <div className={styles.skillItem}>
        <h2 className={styles.skillTitle}>
          <b>Heuristic Evaluation</b>
        </h2>
        <p>
          While I did not use heuristic evaluation in any large-scale project, I did perform a heuristic evaluation of
          the site Indeed.com. In my evaluation of the site, I made a note of any UX errors based on the following
          criteria:
          <br />
          <br />
          <li>Visibility of system status</li>
          <li>Match between system and the real world</li>
          <li>User control and freedom</li>
          <li>Consistency and standards</li>
          <li>Error Prevention</li>
          <li>Recognition rather than recall</li>
          <li>Flexibility and efficiency of use</li>
          <li>Aesthetic and minimalist design</li>
          <li>Help users recognize, diagnose, and recover from errors</li>
          <li>Help and documentation</li>
          <br />I made a list of possible UX issues and rated them based on the severity of the issue and how it could
          affect a user's experience on the site.
        </p>
        <br />
      </div>
    </div>
  )
}

export default Skills
