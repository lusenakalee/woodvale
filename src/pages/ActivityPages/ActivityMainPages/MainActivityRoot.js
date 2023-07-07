import React from 'react'
import ActivityMainNav from '../../../components/ActivityComps/ActivityMainNav'
import { Outlet } from 'react-router-dom'

function MainActivityRoot() {
  return (
    <React.Fragment>
        <ActivityMainNav/>
        <Outlet/>
    </React.Fragment>
  )
}

export default MainActivityRoot