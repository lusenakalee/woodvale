import React from 'react'
import EditProfile from '../../components/UserComps/EditProfile'
import { useRouteLoaderData } from 'react-router-dom'

function EditProfilePage() {
    const user = useRouteLoaderData('profile')
  return (
    <EditProfile user={user} method='patch'/>
  )
}

export default EditProfilePage