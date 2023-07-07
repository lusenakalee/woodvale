import React from 'react'
import ActivityForm from '../../../components/ActivityComps/ActivityForm'

function NewActivityPage() {
  return (
    <React.Fragment>
        <ActivityForm method="post" title="Set us new activity"/>
    </React.Fragment>
  )
}

export default NewActivityPage