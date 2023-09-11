import { EducationEntry } from 'components/Form/Education'
import React, { useState, useEffect } from 'react'
import { formatDate } from 'utils/utilities'

const ResumeEducation: React.FC = () => {
  const [educations, setEducations] = useState<EducationEntry[]>(() => {
    const storedData = localStorage.getItem('educations')
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    const updateEducationsFromLocalStorage = () => {
      const storedData = localStorage.getItem('educations')
      setEducations(storedData ? JSON.parse(storedData) : [])
    }

    // Listen for the custom event and then update state
    window.addEventListener(
      'educationUpdated',
      updateEducationsFromLocalStorage
    )

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener(
        'educationUpdated',
        updateEducationsFromLocalStorage
      )
    }
  }, [])

  return (
    <>
      <div className="m-6 flex items-center justify-center bg-slate-300 text-xl">
        Education
      </div>
      {educations.map((education) => (
        <div key={education.school} className="m-6 flex gap-6">
          <div className="w-[250px]">
            <div>
              {education.startDate && formatDate(education.startDate)}
              {education.startDate && ' - '}
              {education.endDate ? formatDate(education.endDate) : 'Present'}
            </div>

            <div className="flex flex-wrap">{education.schoolAddress}</div>
          </div>
          <div className="w-full">
            <div className="font-bold">{education.school}</div>
            <div>{education.degree}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ResumeEducation
