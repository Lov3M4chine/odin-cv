import { ExperienceEntry } from 'components/Form/Experience'
import React, { useState, useEffect } from 'react'
import { formatDate } from 'utils/utilities'

const ResumeExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceEntry[]>(() => {
    const storedData = localStorage.getItem('experiences')
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    const updateEducationsFromLocalStorage = () => {
      const storedData = localStorage.getItem('experiences')
      setExperiences(storedData ? JSON.parse(storedData) : [])
    }

    // Listen for the custom event and then update state
    window.addEventListener(
      'experienceUpdated',
      updateEducationsFromLocalStorage
    )

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener(
        'experienceUpdated',
        updateEducationsFromLocalStorage
      )
    }
  }, [])

  return (
    <>
      <div className="m-6 flex justify-center bg-slate-300 text-xl">
        Experience
      </div>
      {experiences.map((experience) => (
        <div key={experience.companyName} className="m-6 flex gap-6">
          <div className="w-[250px]">
            <div>
              {experience.startDate && formatDate(experience.startDate)}
              {experience.startDate && ' - '}
              {experience.endDate ? formatDate(experience.endDate) : 'Present'}
            </div>
            <div className="flex flex-wrap">{experience.location}</div>
          </div>
          <div className="w-full">
            <div className="font-bold">{experience.companyName}</div>
            <div>{experience.positionTitle}</div>
            <div>{experience.description}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ResumeExperience
