import React from 'react'
import ActivityForm from '../../../components/ActivityComps/ActivityForm'
import { useRouteLoaderData } from 'react-router-dom'

function ActivityEditPage() {
    const activity = useRouteLoaderData("activity-detail")
  return (
    <React.Fragment>
        <ActivityForm activity={activity} method="patch"/>
    </React.Fragment>
  )
}

export default ActivityEditPage