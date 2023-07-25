import React from 'react'
import ViewLeaves from '../../components/LeaveComps/ViewLeaves'
import { json, useLoaderData } from 'react-router-dom'
import { getAuthToken } from '../../util/Auth'

function PendingApprovalLeavesPage() {
    const leaves = useLoaderData()
  return (
    <React.Fragment>
        <ViewLeaves  leaves={leaves} title="Pending Approval" />
    </React.Fragment >)
}

export default PendingApprovalLeavesPage

export async function loader({ request, params }) {
    let url = "/leave-records/pending-approval";
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