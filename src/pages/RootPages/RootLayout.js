import React from 'react'
import Nav from '../../components/RootComps/Nav'
import { Outlet, useRouteLoaderData } from 'react-router-dom'


function RootLayout() {
  const token = useRouteLoaderData('root')
  return (
    <React.Fragment>
      {token && <Nav/>}
        <Outlet/>
    </React.Fragment>
  )
}

export default RootLayout