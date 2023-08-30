import React from 'react'

interface DegreeProps {
  value: string
  onChange: (value: string) => void
}

const Degree: React.FC<DegreeProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="degree"
        className="block text-sm font-medium text-gray-700"
      >
        Degree
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border p-2"
        placeholder="Computer Science"
      />
    </div>
  )
}

export default Degree
