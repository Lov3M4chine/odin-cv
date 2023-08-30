import React, { useState } from 'react'
import InputField from 'components/Reusable/InputField'
import DateInput from '../Reusable/DateInput'
import SectionHeader from 'components/Reusable/SectionHeader'

const Education: React.FC = () => {
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [schoolAddress, setSchoolAddress] = useState('')
  const [showInputs, setShowInputs] = useState(true)

  return (
    <div className="p-4">
      <SectionHeader
        title="Education"
        showContent={showInputs}
        toggleContent={() => setShowInputs(!showInputs)}
      />

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
        </>
      )}
    </div>
  )
}

export default Education
