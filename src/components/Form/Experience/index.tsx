import React, { useState } from 'react'
import InputField from 'components/Reusable/InputField'
import DateInput from 'components/Reusable/DateInput'
import SectionHeader from 'components/Reusable/SectionHeader'
import {
  clearData,
  loadFromLocalStorage,
  saveToLocalStorage
} from 'utils/utilities'
import Button from 'components/Reusable/Button'

interface ExperienceEntry {
  companyName: string
  positionTitle: string
  startDate: string
  endDate: string
  location: string
  description: string
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceEntry[]>(
    loadFromLocalStorage('experiences', [])
  )
  const [companyName, setCompanyName] = useState('')
  const [positionTitle, setPositionTitle] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [showInputs, setShowInputs] = useState(false)
  const [showExperiences, setShowExperiences] = useState(true)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  function handleEdit(index: number) {
    const experienceToEdit = experiences[index]

    if (experienceToEdit) {
      setCompanyName(experienceToEdit.companyName)
      setPositionTitle(experienceToEdit.positionTitle)
      if (experienceToEdit.startDate) {
        setStartDate(new Date(experienceToEdit.startDate))
      } else {
        setStartDate(null)
      }

      if (experienceToEdit.endDate) {
        setEndDate(new Date(experienceToEdit.endDate))
      } else {
        setEndDate(null)
      }
      setLocation(experienceToEdit.location)
      setDescription(experienceToEdit.description)
      setEditingIndex(index)
    }
    setShowExperiences(false)
    setShowInputs(true)
  }

  const handleSave = () => {
    const newExperience = {
      companyName: companyName,
      positionTitle: positionTitle,
      startDate: startDate ? startDate.toISOString() : '',
      endDate: endDate ? endDate.toISOString() : '',
      location: location,
      description: description
    }
    let updatedExperiences
    if (typeof editingIndex === 'number') {
      updatedExperiences = [...experiences]
      updatedExperiences[editingIndex] = newExperience
    } else {
      updatedExperiences = [...experiences, newExperience]
    }
    if (typeof editingIndex === 'number') {
      setEditingIndex(editingIndex + 1)
    } else {
      setEditingIndex(0)
    }
    setExperiences(updatedExperiences)
    saveToLocalStorage({ experiences: JSON.stringify(updatedExperiences) })
    setEditingIndex(null)
    handleClear()
    setShowInputs(false)
    setShowExperiences(true)
    setEditingIndex(null)
  }

  const handleClear = () => {
    clearData(
      [
        'companyName',
        'positionTitle',
        'startDate',
        'endDate',
        'location',
        'description'
      ],
      [
        setCompanyName,
        setPositionTitle,
        setStartDate,
        setEndDate,
        setLocation,
        setDescription
      ]
    )
  }

  const handleDelete = (index: number) => {
    const existingExperiences: ExperienceEntry[] = loadFromLocalStorage(
      'experiences',
      []
    )
    existingExperiences.splice(index, 1)
    setExperiences(existingExperiences)
    saveToLocalStorage({ experiences: JSON.stringify(existingExperiences) })
  }

  return (
    <div className="rounded-lg bg-slate-400 p-4">
      <SectionHeader
        title="Experience"
        toggleContent={() => {
          handleClear()
          setShowInputs(!showInputs)
          setShowExperiences(!showExperiences)
        }}
        label={showInputs ? 'Cancel' : 'Add New'}
        className={showInputs ? 'bg-red-500' : 'bg-blue-500'}
      />

      {showExperiences &&
        experiences.map((experience, index) => (
          <div
            key={index}
            className="m-4 flex items-center justify-between rounded-lg bg-slate-500 p-4"
          >
            <div>
              {experience.companyName} - {experience.positionTitle}
            </div>
            <div className="flex gap-2">
              <Button
                label="Edit"
                onClick={() => handleEdit(index)}
                className="bg-orange-500"
              />
              <Button
                label="Delete"
                onClick={() => handleDelete(index)}
                className="bg-red-500"
              />
            </div>
          </div>
        ))}

      {showInputs && (
        <>
          <InputField
            label="Company Name"
            value={companyName}
            type="text"
            placeholder="Resumes Inc."
            onChange={setCompanyName}
          />
          <InputField
            label="Position Title"
            value={positionTitle}
            type="text"
            placeholder="Associate"
            onChange={setPositionTitle}
          />
          <DateInput
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
          <DateInput label="End Date" value={endDate} onChange={setEndDate} />
          <InputField
            label="Location"
            value={location}
            type="text"
            placeholder="Phoenix, Arizona"
            onChange={setLocation}
          />
          <InputField
            label="Description"
            value={description}
            type="text"
            placeholder="Describe your job duties."
            onChange={setDescription}
          />
          <div className="flex justify-between">
            <Button
              label="Save"
              onClick={handleSave}
              className="m-4 ml-0 bg-green-500"
            />
            <Button
              label="Clear"
              onClick={handleClear}
              className="m-4 ml-0 bg-red-500"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Experience
