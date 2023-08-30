import React from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-2xl">CV Resume Maker</h1>
      <GeneralInfo />
      <Education />
    </div>
  )
}

export default App
