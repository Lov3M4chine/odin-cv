import React, { useState } from 'react'
import InputField from '../Reusable/InputField'
import DateInput from '../Reusable/DateInput'
import SectionHeader from '../Reusable/SectionHeader'

const Experience: React.FC = () => {
  const [companyName, setCompanyName] = useState('')
  const [positionTitle, setPositionTitle] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [location, setLocation] = useState('')
  const [showInputs, setShowInputs] = useState(true)

  return (
    <div className="p-4">
      <SectionHeader
        title="Experience"
        showContent={showInputs}
        toggleContent={() => setShowInputs(!showInputs)}
      />
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
        </>
      )}
    </div>
  )
}

export default Experience
