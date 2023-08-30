import React from 'react'

interface LocationProps {
  label: string
  value: string
  onChange: (value: string) => void
}

const Location: React.FC<LocationProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={label.toLowerCase()}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Phoenix, Arizona"
        className="mt-1 w-full rounded-md border p-2"
      />
    </div>
  )
}

export default Location
