import React, { useState } from 'react'
import InputField from 'components/Reusable/InputField'
import DateInput from '../Reusable/DateInput'
import SectionHeader from 'components/Reusable/SectionHeader'
import Button from 'components/Reusable/Button'
import {
  clearData,
  loadFromLocalStorage,
  saveToLocalStorage
} from 'utils/utilities'

interface EducationEntry {
  school: string
  degree: string
  startDate: string
  endDate: string
  schoolAddress: string
}

const Education: React.FC = () => {
  const [educations, setEducations] = useState<EducationEntry[]>(
    loadFromLocalStorage('educations', [])
  )
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [schoolAddress, setSchoolAddress] = useState('')
  const [showInputs, setShowInputs] = useState(false)
  const [showEducations, setShowEducations] = useState(true)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  function handleEdit(index: number) {
    const educationToEdit = educations[index]

    if (educationToEdit) {
      setSchool(educationToEdit.school)
      setDegree(educationToEdit.degree)
      setStartDate(new Date(educationToEdit.startDate))
      setEndDate(new Date(educationToEdit.endDate))
      setSchoolAddress(educationToEdit.schoolAddress)
      setEditingIndex(index)
    }
    setShowEducations(false)
    setShowInputs(true)
  }

  const handleSave = () => {
    const newEducation = {
      school: school,
      degree: degree,
      startDate: startDate ? startDate.toISOString() : '',
      endDate: endDate ? endDate.toISOString() : '',
      schoolAddress: schoolAddress
    }
    let updatedEducations
    if (typeof editingIndex === 'number') {
      updatedEducations = [...educations]
      updatedEducations[editingIndex] = newEducation
    } else {
      updatedEducations = [...educations, newEducation]
    }
    if (typeof editingIndex === 'number') {
      setEditingIndex(editingIndex + 1)
    } else {
      setEditingIndex(0)
    }
    setEducations(updatedEducations)
    saveToLocalStorage({ educations: JSON.stringify(updatedEducations) })

    handleClear()
    setShowInputs(false)
    setShowEducations(true)
    setEditingIndex(null)
  }

  const handleClear = () => {
    clearData(
      ['school', 'degree', 'startDate', 'endDate', 'schoolAddress'],
      [setSchool, setDegree, setStartDate, setEndDate, setSchoolAddress]
    )
  }

  const handleDelete = (index: number) => {
    const existingEducations: EducationEntry[] = loadFromLocalStorage(
      'educations',
      []
    )
    existingEducations.splice(index, 1)
    setEducations(existingEducations)
    saveToLocalStorage({ educations: JSON.stringify(existingEducations) })
    if (editingIndex === 0) {
      setEditingIndex(null)
    }
  }

  return (
    <div className="rounded-lg bg-slate-400 p-4">
      <SectionHeader
        title="Education"
        toggleContent={() => {
          handleClear()
          setShowInputs(!showInputs)
          setShowEducations(!showEducations)
        }}
        label={showInputs ? 'Cancel' : 'Add New'}
        className={showInputs ? 'bg-red-500' : 'bg-blue-500'}
      />

      {showEducations &&
        educations.map((education, index) => (
          <div
            key={index}
            className="m-4 flex items-center justify-between rounded-lg bg-slate-500 p-4"
          >
            <div>
              {education.school} - {education.degree}
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
            label="School"
            value={school}
            type="text"
            placeholder="Arizona State University"
            onChange={setSchool}
          />
          <InputField
            label="Degree"
            value={degree}
            type="text"
            placeholder="Computer Science"
            onChange={setDegree}
          />
          <DateInput
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
          <DateInput label="End Date" value={endDate} onChange={setEndDate} />
          <InputField
            label="School Address"
            value={schoolAddress}
            type="text"
            placeholder="Phoenix, Arizona"
            onChange={setSchoolAddress}
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

export default Education
