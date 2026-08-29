import React from 'react'
import OurMissionSection from './_components/our-mission'
import OurCoreValuesSection from './_components/our-core-values'
import OurQualityProcessSection from './_components/our-quality-process'
import ExpertTeamSection from './_components/expert-team'

const AboutUsPage = () => {
  return (
    <div className="bg-black text-white">
      <OurMissionSection/>
      <OurCoreValuesSection/>
      <OurQualityProcessSection/>
      <ExpertTeamSection/>
    </div>
  )
}

export default AboutUsPage
