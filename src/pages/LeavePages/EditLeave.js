import React from 'react'
import NewLeaveForm from '../../components/LeaveComps/NewLeaveForm'
import { useRouteLoaderData } from 'react-router-dom'

function EditLeave() {
  const leave = useRouteLoaderData("leave")
  return (
    <React.Fragment>
      <NewLeaveForm leave={leave} method="patch"/>
    </React.Fragment>
  )
}

export default EditLeave