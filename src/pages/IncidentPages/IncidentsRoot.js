import React from 'react'
import IncidentsNav from '../../components/IncidentComps/IncidentsNav'
import { Outlet } from 'react-router-dom'

function IncidentsRoot() {
  return (
    <React.Fragment>
        <IncidentsNav/>
        <Outlet/>
    </React.Fragment>
  )
}

export default IncidentsRoot