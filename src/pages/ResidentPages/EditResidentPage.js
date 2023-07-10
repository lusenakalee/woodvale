import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import ResidentForm from '../../components/ResidentComps/AddResidentForm'

function EditResidentPage() {
  const resident = useRouteLoaderData("resident-detail")
  return (
    <ResidentForm resident={resident} method="patch"/>
  )
}

export default EditResidentPage