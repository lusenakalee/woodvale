import React from 'react'
import { getAuthToken } from '../../util/Auth';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import MedicalRecord from '../../components/MedicalRecordsComs/ViewMedicalRecord';

function ViewMedicalRecordPage() {
    const record = useRouteLoaderData('med-recs')
  return (
    <MedicalRecord record={record}/>
  )
}

export default ViewMedicalRecordPage

export async function loader({ request, params }) {
    const id = params.id;
    let url = "https://woodvale-test-2.onrender.com/medical-records/" + id;
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
    const response = await fetch("https://woodvale-test-2.onrender.com/medical-records/" + id,{
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
        { message: "Could not delete medical record." },
        {
          status: 500,
        }
      );
    }
    return redirect(`/login/residents/${id}/med-recs`);
  }