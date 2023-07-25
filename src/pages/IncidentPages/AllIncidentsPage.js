import React from 'react'
import ViewAllIncidents from '../../components/IncidentComps/ViewAllIncidents'
import { json, useLoaderData } from 'react-router-dom'
import { getAuthToken } from '../../util/Auth'

function AllIncidentsPage() {
    const incidents = useLoaderData()
  return (
    <ViewAllIncidents incidents={incidents} />
  )
}

export default AllIncidentsPage

export async function loader({ request, params }) {
    let url = "/incident-reports";
    const token = getAuthToken();
  
    const response = await fetch(url, {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.status === 404) {
      return response;
    }
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json({ message: "Server error" }, { status: 500 });
    }
  
    const resData = await response.json();
    return resData;
  }