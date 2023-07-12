import React from 'react'
import { Link } from 'react-router-dom'

function ShowUserProfile({user}) {
  return (
    <React.Fragment>
        {user.username}
        <Link to={`./edit`}><button>Edit</button></Link>
    </React.Fragment>
  )
}

export default ShowUserProfile