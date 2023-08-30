import React from 'react'

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
    <button
      onClick={toggleContent}
      className="rounded bg-blue-500 px-3 py-1 text-white"
    >
      {showContent ? 'Hide' : 'Show'}
    </button>
  </div>
)

export default SectionHeader
