import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <React.Fragment>
    <div>HomePage</div>
    <Link to="/login">Login Page</Link>
    </React.Fragment>   
  )
}

export default HomePage