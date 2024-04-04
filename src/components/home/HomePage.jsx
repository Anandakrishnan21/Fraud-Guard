import React from 'react'
import Header from '../common/Header'
import ExcelForm from './ExcelForm'

function HomePage() {
  return (
    <div className="backgroundImg flex flex-col gap-4 text-neutral-50 min-h-screen p-4">
      <Header />
      <ExcelForm />
    </div>
  )
}

export default HomePage
