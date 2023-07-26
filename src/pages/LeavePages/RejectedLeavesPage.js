import React from 'react'
import ViewLeaves from '../../components/LeaveComps/ViewLeaves'
import { json, useLoaderData } from 'react-router-dom'
import { getAuthToken } from '../../util/Auth'

function RejectedLeavesPage() {
    const leaves = useLoaderData()
  return (
    <React.Fragment>
          <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <ViewLeaves leaves={leaves} title="Rejected Leaves" />
        </div></main>
    </React.Fragment>
  )
}

export default RejectedLeavesPage

export async function loader({ request, params }) {
    let url = "https://homes-test.onrender.com/leave-records/rejected";
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