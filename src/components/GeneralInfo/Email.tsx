import React from 'react'

interface EmailProps {
  value: string
  onChange: (value: string) => void
}

const Email: React.FC<EmailProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="example@example.com"
        className="mt-1 w-full rounded-md border p-2"
      />
    </div>
  )
}

export default Email
