import React from 'react'
import CarePlanNav from '../../components/CarePlanComps/CarePlanNav'
import { Outlet } from 'react-router-dom'

function CarePlanRoot() {
  return (
    <React.Fragment>
        <CarePlanNav/>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Outlet/>
        </div>
        </main>
    </React.Fragment>
  )
}

export default CarePlanRoot