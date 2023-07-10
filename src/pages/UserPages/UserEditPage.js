import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import UserForm from '../../components/UserComps/UserForm'

function UserEditPage() {
    const user = useRouteLoaderData('user-detail')
  return (
    <React.Fragment>
        <UserForm user={user} method="patch"/>
    </React.Fragment>
  )
}

export default UserEditPage