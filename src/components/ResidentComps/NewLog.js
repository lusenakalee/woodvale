import React from 'react'
import Nav from '../RootComps/Nav'
import NewLogForm from './NewLogForm'

function NewLog() {
  return (
    <>
      
    <div className="min-h-full">
      <Nav/>
    

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Daily Log Take</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <NewLogForm/>
          </div>
      </main>
    </div>
  </>
  )
}

export default NewLog