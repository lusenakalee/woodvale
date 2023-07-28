import React from 'react'
import { getAuthToken } from '../../util/Auth';
import { json, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import AllLogs from '../../components/LogsComps/AllLogs';

function AllLogsPage() {
    const logs = useRouteLoaderData("logs")
  return (
    <React.Fragment>
        <AllLogs logs={logs}/>
    </React.Fragment>
  )
}

export default AllLogsPage

export async function loader({ request, params }) {
    const id = params.id;
    let url = "https://homes-test.onrender.com/daily-records/" + id ;
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
    ;
    return resData;
  }