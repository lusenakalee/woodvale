import React from 'react'
import ResidentForm from '../../components/ResidentComps/AddResidentForm'

function NewResidentPage() {
  return (
    <React.Fragment>
        <ResidentForm title="New Resident Form" method="post"/>
    </React.Fragment>
  )
}

export default NewResidentPage