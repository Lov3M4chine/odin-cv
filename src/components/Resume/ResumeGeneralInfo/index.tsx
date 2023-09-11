import React, { useState, useEffect } from 'react'

const ResumeGeneralInfo: React.FC = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: localStorage.getItem('name') || '',
    email: localStorage.getItem('email') || '',
    phone: localStorage.getItem('phone') || '',
    personalAddress: localStorage.getItem('personalAddress') || ''
  })

  // This will keep the displayed info in sync with local storage
  useEffect(() => {
    const handleInfoUpdate = () => {
      setGeneralInfo({
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        phone: localStorage.getItem('phone') || '',
        personalAddress: localStorage.getItem('personalAddress') || ''
      })
    }

    window.addEventListener('generalInfoUpdated', handleInfoUpdate)

    return () => {
      window.removeEventListener('generalInfoUpdated', handleInfoUpdate)
    }
  }, [])
  return (
    <>
      <div className="bg-blue-500 p-6">
        <div className="flex justify-center pb-2 text-3xl">
          {generalInfo.name}
        </div>
        <div className="flex justify-center gap-3">
          <div>Email: {generalInfo.email}</div>
          <div>Tel: {generalInfo.phone}</div>
          <div>Address: {generalInfo.personalAddress}</div>
        </div>
      </div>
    </>
  )
}

export default ResumeGeneralInfo
