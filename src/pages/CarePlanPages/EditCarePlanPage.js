import React from "react";
import CarePlanForm from "../../components/CarePlanComps/CarePlanForm";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function EditCarePlanPage() {
  const carePlan = useRouteLoaderData("care-plan");
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <CarePlanForm
          carePlan={carePlan}
          method="patch"
          title="Edit Care Plan"
        />
      </div>
    </main>
  );
}

export default EditCarePlanPage;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  const id = params.id;
  const carePlanData = {
    dietary_requirements: data.get("diet"),
    mobility_assistance: data.get("mobility"),
    medication_administration: data.get("medication"),
    personal_hygiene: data.get("hygiene"),
    activity_schedule: data.get("activity"),
    instructions: data.get("instructions"),
  };
  let url = "https://woodvale-test-2.onrender.com/care-plan/"+id;
  if (method === "PATCH") {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(carePlanData),
    });
    if (response.status === 400) {
      return response;
    }
    if (!response.ok) {
      throw json(
        { message: "Failed to update the care plan" },
        { status: 500 }
      );
    }
    return redirect(`/login/residents/${id}/care-plan`);
  }
}
