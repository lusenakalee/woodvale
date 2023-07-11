import React from 'react'
import NewIncidentForm from '../../components/IncidentComps/NewIncidentForm'

function NewIncidentsPage() {
  return (
    <React.Fragment>
        <NewIncidentForm method="post"/>
    </React.Fragment>
  )
}

export default NewIncidentsPage