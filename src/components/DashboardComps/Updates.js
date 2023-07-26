import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";

function Updates() {
  const { residents } = useRouteLoaderData("root");

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const year = today.getFullYear();

  // Format the date as you desire
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate); // Output: "2023-07-26"

  // Filter residents registered today
  const residentsRegisteredToday = residents.filter(
    (resident) => resident.date_registered === formattedDate
  );

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            

            {/* Display residents registered today */}
            { residentsRegisteredToday &&    residentsRegisteredToday.map((resident) => (
              <div
                className="py-8 flex flex-wrap md:flex-nowrap"
                key={resident.id}
              >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    New Resident
                  </span>
                  <span className="text-sm text-gray-500">
                    {resident.date_registered}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {resident.first_name} {resident.last_name} has just been
                    registered as a resident
                  </h2>
                  <p className="leading-relaxed">
                    The resident was registered by{" "}
                    {resident.registered_by.first_name}{" "}
                    {resident.registered_by.last_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Updates;
