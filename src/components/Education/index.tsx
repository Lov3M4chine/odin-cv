import React, { useState } from 'react'
import School from './School'
import Degree from './Degree'
import DateInput from '../Reusable/DateInput'
import Location from '../Reusable/Location'

const Education: React.FC = () => {
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [schoolAddress, setSchoolAddress] = useState('')

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl">Education</h1>
      <School value={school} onChange={setSchool} />
      <Degree value={degree} onChange={setDegree} />
      <DateInput label="Start Date" value={startDate} onChange={setStartDate} />
      <DateInput label="End Date" value={endDate} onChange={setEndDate} />
      <Location
        label="School Address"
        value={schoolAddress}
        onChange={setSchoolAddress}
      />
    </div>
  )
}

export default Education
