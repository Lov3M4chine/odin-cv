import React, { useState } from 'react'
import InputField from '../Reusable/InputField'

const GeneralInfo: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [personalAddress, setPersonalAddress] = useState('')

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl">General Information</h1>
      <InputField
        label="Full Name"
        value={name}
        type="text"
        placeholder="John Smith"
        onChange={setName}
      />
      <InputField
        label="Email"
        value={email}
        type="email"
        placeholder="example@outlook.com"
        onChange={setEmail}
      />
      <InputField
        label="Phone Number"
        value={phone}
        type="tel"
        placeholder="(555) 555-5555"
        onChange={setPhone}
      />
      <InputField
        label="Address"
        value={personalAddress}
        type="text"
        placeholder="Phoenix, Arizona"
        onChange={setPersonalAddress}
      />
      {/* You can also add a 'Submit' button or other UI elements here. */}
    </div>
  )
}

export default GeneralInfo
