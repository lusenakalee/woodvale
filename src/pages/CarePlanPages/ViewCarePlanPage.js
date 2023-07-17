import React from 'react'
import ViewCarePLan from '../../components/CarePlanComps/ViewCarePLan'
import { getAuthToken } from '../../util/Auth';
import { json, redirect, useLoaderData, useRouteLoaderData } from 'react-router-dom';

function ViewCarePlanPage() {
    const carePlan = useRouteLoaderData('care-plan')
  return (
    <ViewCarePLan carePlan={carePlan}/>
  )
}

export default ViewCarePlanPage

export async function loader({ request, params }) {
    const id = params.id;
    let url = "/care-plan/" + id + "/plan";
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
      throw json({ message: "Wrong Url" }, { status: 500 });
    }
  
    const resData = await response.json();
    return resData;
  }

  export async function action({ request, params }) {
    const token = getAuthToken();
  
    const id = params.id;
    const response = await fetch("/care-plan/" + id, {
      method: request.method,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 404) {
      return response;
    }
    if (!response.ok) {
      throw json(
        { message: "Could not delete care plan." },
        {
          status: 500,
        }
      );
    }
    return redirect(`/login/residents/${id}/care-plan`);
  }