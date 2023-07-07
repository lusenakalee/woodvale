import React from 'react'
import ResidentForm from '../../components/ResidentComps/AddResidentForm'

function NewResidentPage() {
  return (
    <React.Fragment>


        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <ResidentForm title="New Resident Form" method="post"/>
            </div>
        </main>
    </React.Fragment>
  )
}

export default NewResidentPage