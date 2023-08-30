import React from 'react'

interface InputFieldProps {
  label: string
  value: string
  type: string
  placeholder: string
  onChange: (value: string) => void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  type,
  placeholder,
  onChange
}) => {
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
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border p-2"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputField
