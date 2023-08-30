import React from 'react'
import Button from './Button'

interface SectionHeaderProps {
  title: string
  showContent: boolean
  toggleContent: () => void
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showContent,
  toggleContent
}) => (
  <div className="flex items-center justify-between">
    <h1 className="mb-4 text-xl">{title}</h1>
    <Button label={showContent ? 'Hide' : 'Show'} onClick={toggleContent} />
  </div>
)

export default SectionHeader
