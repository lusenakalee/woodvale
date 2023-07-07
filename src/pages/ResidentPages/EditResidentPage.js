import React from 'react'
import NewResidentPage from './NewResidentPage'
import { useRouteLoaderData } from 'react-router-dom'

function EditResidentPage() {
    const resident = useRouteLoaderData("resident-detail")
  return (
    <NewResidentPage resident={resident}/>
  )
}

export default EditResidentPage