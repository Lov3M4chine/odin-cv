import React from 'react'
import Button from '../Reusable/Button'

interface SectionHeaderProps {
  title: string
  toggleContent: () => void
  label: string
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  toggleContent,
  label,
  className
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl">{title}</h1>
      <Button label={label} onClick={toggleContent} className={className} />
    </div>
  )
}

export default SectionHeader
