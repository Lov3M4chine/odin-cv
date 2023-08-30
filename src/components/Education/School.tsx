import React from 'react'

interface SchoolProps {
  value: string
  onChange: (value: string) => void
}

const School: React.FC<SchoolProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="school"
        className="block text-sm font-medium text-gray-700"
      >
        School
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border p-2"
        placeholder="Arizona State University"
      />
    </div>
  )
}

export default School
