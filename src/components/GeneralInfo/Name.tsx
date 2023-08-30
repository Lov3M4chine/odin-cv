import React from 'react'

interface NameProps {
  value: string
  onChange: (value: string) => void
}

const Name: React.FC<NameProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        id="name"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border p-2"
        placeholder="John Smith"
      />
    </div>
  )
}

export default Name
