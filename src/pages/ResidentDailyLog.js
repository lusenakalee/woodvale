import React from 'react'
import ResidentDailyLogComps from '../components/ResidentComps/ResidentDailyLogComps'
import Nav from '../components/Nav'

function ResidentDailyLog() {
  return (
    <>
      
    <div className="min-h-full">
      <Nav/>
    

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* here in the heading insert the exact date clicked from the list */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Date logs</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ResidentDailyLogComps/>
          </div>
      </main>
    </div>
  </>
  )
}

export default ResidentDailyLog