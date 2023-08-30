import React from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'

const App: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10 p-8">
      <h1 className="mb-6 text-2xl text-slate-300">CV Resume Maker</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )
}

export default App
