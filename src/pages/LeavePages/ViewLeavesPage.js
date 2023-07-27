import React from 'react'
import { getAuthToken } from '../../util/Auth';
import { json, useRouteLoaderData } from 'react-router-dom';
import ViewLeavesForm from '../../components/LeaveComps/ViewLeavesForm';

function ViewLeavesPage() {
    const leaves = useRouteLoaderData("leaves")
  return (
    <ViewLeavesForm leaves={leaves}/>
  )
}

export default ViewLeavesPage

export async function loader({ request, params }) {
    const id = params.id;
    let url = "https://homes-test.onrender.com/leave-records/" + id ;
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
    console.log(resData)
    return resData;
  }