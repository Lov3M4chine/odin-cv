import React, { useState } from 'react'
import InputField from '../Reusable/InputField'
import DateInput from '../Reusable/DateInput'

const Experience: React.FC = () => {
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [schoolAddress, setSchoolAddress] = useState('')

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl">Education</h1>
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
      <DateInput label="Start Date" value={startDate} onChange={setStartDate} />
      <DateInput label="End Date" value={endDate} onChange={setEndDate} />
      <InputField
        label="School Address"
        value={schoolAddress}
        type="text"
        placeholder="Phoenix, Arizona"
        onChange={setSchoolAddress}
      />
    </div>
  )
}

export default Experience
