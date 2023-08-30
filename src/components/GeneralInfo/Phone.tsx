import React from 'react'

interface PhoneProps {
  value: string
  onChange: (value: string) => void
}

const Phone: React.FC<PhoneProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        id="phone"
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="(555) 555-5555"
        className="mt-1 w-full rounded-md border p-2"
      />
    </div>
  )
}

export default Phone
