import React, { useState } from 'react'
import Name from './Name'
import Email from './Email'
import Phone from './Phone'
import Location from '../Reusable/Location'

const GeneralInfo: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [personalAddress, setPersonalAddress] = useState('')

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl">General Information</h1>
      <Name value={name} onChange={setName} />
      <Email value={email} onChange={setEmail} />
      <Phone value={phone} onChange={setPhone} />
      <Location
        label="Address"
        value={personalAddress}
        onChange={setPersonalAddress}
      />
      {/* You can also add a 'Submit' button or other UI elements here. */}
    </div>
  )
}

export default GeneralInfo
