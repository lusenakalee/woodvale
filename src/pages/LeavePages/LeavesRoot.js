import React from 'react'
import LeavesNav from '../../components/LeaveComps/LeavesNav'
import { Outlet } from 'react-router-dom'

function LeavesRoot() {
  return (
    <React.Fragment>
        <LeavesNav/>
        <Outlet/>
    </React.Fragment>
  )
}

export default LeavesRoot