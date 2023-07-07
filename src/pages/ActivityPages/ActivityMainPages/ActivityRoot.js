import React from 'react'
import ActivityNav from '../../../components/ActivityComps/ActivityNav'
import { Outlet } from 'react-router-dom'

function ActivityRoot() {
  return (
    <React.Fragment>
        <ActivityNav/>
        <Outlet/>
    </React.Fragment>
  )
}

export default ActivityRoot