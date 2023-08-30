import React from 'react'

interface DateInputProps {
  label: string
  value: Date | null
  onChange: (date: Date | null) => void
}

const DateInput: React.FC<DateInputProps> = ({ label, value, onChange }) => {
  const inputId = label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={inputId}
        type="date"
        value={value ? value.toISOString().split('T')[0] : ''}
        onChange={(e) => onChange(new Date(e.target.value))}
        className="mt-1 w-full rounded-md border p-2"
      />
    </div>
  )
}

export default DateInput
