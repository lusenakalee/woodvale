import React from 'react'
import NewIncidentForm from '../../components/IncidentComps/NewIncidentForm'
import { useRouteLoaderData } from 'react-router-dom';

function EditIncidents() {
  const incident = useRouteLoaderData("incident");
  return (
    <NewIncidentForm method="patch" incident={incident}/>
  )
}

export default EditIncidents