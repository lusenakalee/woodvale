import React from 'react'

function ActivitiesList({activities}) {
  return (
    <React.Fragment>
        {activities.map((item)=>(
            <p>{item.name}</p>
        ))}
    </React.Fragment>
  )
}

export default ActivitiesList