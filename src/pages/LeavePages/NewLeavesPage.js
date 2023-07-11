import React from 'react'
import NewLeaveForm from '../../components/LeaveComps/NewLeaveForm'

function NewLeavesPage() {
  return (
    <React.Fragment>
        <NewLeaveForm method="post"/>
    </React.Fragment>
  )
}

export default NewLeavesPage