import React from 'react'
import CarePlanNav from '../../components/CarePlanComps/CarePlanNav'
import { Outlet } from 'react-router-dom'

function CarePlanRoot() {
  return (
    <React.Fragment>
        <CarePlanNav/>
        <Outlet/>
    </React.Fragment>
  )
}

export default CarePlanRoot