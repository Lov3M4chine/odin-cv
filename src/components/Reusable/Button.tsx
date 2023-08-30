import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`rounded bg-blue-500 px-3 py-1 text-white ${className}`}
  >
    {label}
  </button>
)

export default Button
