import React, { useState } from 'react'
import InputField from '../Reusable/InputField'
import SectionHeader from '../Reusable/SectionHeader'
import Button from '../Reusable/Button'
import { clearData, saveToLocalStorage } from 'utils/utilities'

const GeneralInfo: React.FC = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '')
  const [email, setEmail] = useState(localStorage.getItem('email') || '')
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '')
  const [personalAddress, setPersonalAddress] = useState(
    localStorage.getItem('personalAddress') || ''
  )
  const [showInputs, setShowInputs] = useState(true)

  const handleSave = () => {
    saveToLocalStorage({
      name: name,
      email: email,
      phone: phone,
      personalAddress: personalAddress
    })
  }

  const handleClear = () => {
    clearData(
      ['name', 'email', 'phone', 'personalAddress'],
      [setName, setEmail, setPhone, setPersonalAddress]
    )
  }

  return (
    <div className="rounded-lg bg-slate-400 p-4">
      <SectionHeader
        title="General Information"
        showContent={showInputs}
        toggleContent={() => setShowInputs(!showInputs)}
      />

      {showInputs && (
        <>
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
          <div className="flex justify-between">
            <Button label="Save" onClick={handleSave} />
            <Button label="Clear" onClick={handleClear} />
          </div>
        </>
      )}
    </div>
  )
}

export default GeneralInfo
