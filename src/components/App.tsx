import React from 'react'
import GeneralInfo from './Form/GeneralInfo'
import Education from './Form/Education'
import Experience from './Form/Experience'
import ResumeEducation from './Resume/ResumeEducation'
import ResumeExperience from './Resume/ResumeExperience'
import ResumeGeneralInfo from './Resume/ResumeGeneralInfo'
import { downloadResumeAsPDF } from 'utils/utilities'

const handleDownloadPDF = () => {
  downloadResumeAsPDF('resumeContainer')
}

const App: React.FC = () => {
  return (
    <div className="container mx-auto flex min-w-fit flex-col gap-10 bg-slate-300 p-8">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl">CV Resume Maker</h1>
        <button
          className=" w-fit rounded-lg bg-green-500 p-2 text-lg"
          onClick={handleDownloadPDF}
        >
          Download as PDF
        </button>
      </div>
      <div className="flex">
        <div className="m-6 flex w-1/2 flex-col gap-3">
          <GeneralInfo />
          <Education />
          <Experience />
        </div>
        <div id="resumeContainer" className="w-1/2 bg-white">
          <ResumeGeneralInfo />
          <ResumeEducation />
          <ResumeExperience />
        </div>
      </div>
    </div>
  )
}

export default App
