import React, { useEffect, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { useRouteLoaderData, useSubmit } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";



function ShowUserProfile({user}) {

  const token = useRouteLoaderData("root");
  const submit = useSubmit();
  const imgToken = getAuthToken();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  const data = useActionData();

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/users/img/${user.id}`, {
          headers: {
            Authorization: "Bearer " + imgToken,
          },
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } else {
          console.error("Error fetching image:", response.status);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  
  return (
    <React.Fragment>
        {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="flex gap-x-4">
                {imageUrl && (
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={imageUrl}
                    alt="Profile"
                  />
                )}
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {user.first_name}'s Information
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {" "}
                    General details and Information.
                  </p>
                </div>
              </div>

      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Full name
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {user.first_name} {user.last_name}
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          Username
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {user.username} 
        </dd>
      </div>
      <div className="px-4 py-3 sm:grid sm:grid-cols-3 hover:bg-white sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">
          User type
        </dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {user.is_admin=== true ? "Admin": "Care Giver"} 
        </dd>
      </div>
    
        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
   
        <dd>
          <Link to={`./edit`}>
            <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Edit
            </button>
          </Link>
        </dd>
      </div>
    
    </React.Fragment>
  )
}

export default ShowUserProfile