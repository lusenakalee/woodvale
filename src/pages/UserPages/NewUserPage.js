import React from 'react'
import UserForm from '../../components/UserComps/UserForm'

function NewUserPage() {
  return (
    <React.Fragment>
        <UserForm method="post" title="Create a new user"/>
    </React.Fragment>
  )
}

export default NewUserPage
