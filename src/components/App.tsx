import React from 'react'
import GeneralInfo from './Form/GeneralInfo'
import Education from './Form/Education'
import Experience from './Form/Experience'
import ResumeHeader from './Resume/ResumeHeader'

const App: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10 bg-slate-300 p-8">
      <h1 className="flex text-2xl">CV Resume Maker</h1>
      <div className="flex">
        <div className="m-6 flex w-1/2 flex-col gap-3">
          <GeneralInfo />
          <Education />
          <Experience />
        </div>
        <div className="w-1/2 bg-white">
          <ResumeHeader />
        </div>
      </div>
    </div>
  )
}

export default App
