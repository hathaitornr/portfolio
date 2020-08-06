import React from "react"
import { ProjectOverview, Section } from '../../../components';

const HlthpalOverview = () => (
  <Section title='Overview'>
    <ProjectOverview
      about={`
        <span><strong>My role:</strong> UX/UI Lead, Full Stack Engineer </span><br /><br />
        <span><strong>Design Tools:</strong> Storyboard, User Flow Diagram, Wireframe, Sketch, Invision</span><br /><br />
        <span><strong>Research Tools:</strong> Literature Review, Focus Group, Semi-Structured User Interview, Survey, Persona, Pilot Test, Field Test, Qualitative and Quantitative Analysis </span><br /><br />
        <span><strong>Engineering Tools:</strong> React JS, React-Native, Django, MySQL, Python</span>  
      `}
      problem={`
        <span>While many resources are dedicated to cancer care in places like the United States, there are significantly less resources for cancer patients in 
        developing countries.</span><br /><br />
        <span>Our focus is on Rwanda where palliative care for cancer patients at the end-of-life can be <strong>fragmented</strong> and care-communication is often sub-optimal.</span>`}
      goals={`
        <span><strong>1. Low-income, low-literate society:</strong> Any technical solution we brainstormed had to work for a low-income, low-literate society.</span><br /><br />
        <span><strong>2. Improve Patient-reporting experience:</strong> Patients have to travel a long time, sometimes to a different city, to meet with clinicians. We wanted to find a way to make symptom reporting simpler and less time consuming for patients.</span><br /><br />
        <span><strong>3. Create smoother clinician workflow:</strong> We needed to ensure our intervention would allow clinicians to more easily manage a large number of patients</span>
        `}
      solution={`
        <span>Hlthpal is a <strong>low-cost mobile application</strong> for cancer patients to more easily report their symptoms and a <strong>web dashboard</strong> for clinicians to organize and manage 
        patient files. This platform centralizes symptom management, improves upon paper-based methods and patient care coordination, and evaluates quality of life and 
        life expectancy of cancer patients.</span>
      `}
      />
  </Section>
);

export default HlthpalOverview
