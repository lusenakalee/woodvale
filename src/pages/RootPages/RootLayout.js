import React from 'react'
import Nav from '../../components/RootComps/Nav'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <React.Fragment>
        <Nav/>
        <Outlet/>
    </React.Fragment>
  )
}

export default RootLayout