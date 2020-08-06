import React from "react"
import { ProjectOverview, Section } from '../../../components';

const ContentorOverview = () => (
  <Section title='Overview'>
    <ProjectOverview
      about={`
        <span><strong>My role:</strong> UX/UI Lead</span><br /><br />
        <span><strong>Design Tools:</strong> Sketch, Figma, HTML, CSS, Javascript</span><br /><br />
        <span><strong>Research Tools:</strong> Competitive Analysis, Surveys, User Interviews, Persona, Concept Testing</span>`}
      problem={`
        <span>Digital marketing is a highly complex space with <strong>many different tools & platforms</strong> handling different functions like 
        content creation, social media management, analytics, etc. This complexity doesn't allow <strong>small and medium-sized businesses</strong> 
        (which are low on resources, infrastructure, and money) to make informed decisions and run their marketing campaigns effectively.</span>`}
      goals={`
        <span><strong>1. Workflow Efficiency:</strong> We wanted to build a system that would allow a small marketing team complete many tasks more efficiently.</span><br /><br />
        <span><strong>2. Customizable Content:</strong> We wanted to ensure our app would automate multiple tasks without stifling the creative freedom of the writers.</span>
      `}
      solution={`
        <span><strong>Contentor</strong> is an all-in-one platform designed to assist small businesses in creating content <strong>quicker</strong> and 
        <strong>more efficiently</strong>. Utilizing AI technology, it handles content generation, publishing, and analytics in a few simple steps.</span>
      `}
      />
  </Section>
);

export default ContentorOverview
