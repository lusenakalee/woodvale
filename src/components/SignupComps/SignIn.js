import { Form, json, redirect, useActionData, useNavigation } from "react-router-dom";
import cg from '../../components/assets/images/cg.jpeg'
import React, { useRef } from 'react';

  
  function SignIn() {
    const navigation = useNavigation();
    const data = useActionData();
    const  isSubmitting = navigation.state === "submitting"
    
 


  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src={cg}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome Back.
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Our innovative CRM (Caregiver Relationship Management) system is
                designed to streamline and enhance every aspect of care
                delivery, allowing you to focus on what truly matters -
                enriching the lives of your clients.
              </p>
              {data && data.errors && (
                <ul>
                  {Object.values(data.errors).map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              )}
              {data && data.message && <p>{data.message}</p>}
              <Form method="post" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="username"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    type="submit"
                    disabled={isSubmitting}
                  >
                     {isSubmitting ? "Logging in..." : "Log In"}
                  </button>
                </div>
              </Form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default SignIn;

export async function loginAction({ request, params }) {
  const data = await request.formData();
  const loginData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  const response = await fetch("https://homes-test.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(loginData),
  });
  if (response.status === 401) {
    return response;
  }
  if (response.status === 400) {
    return response;
  }
  if (!response) {
    return json({ message: "Could not authenticate user" }, { status: 500 });
  }

  const resData = await response.json();
  const access_token = resData.access_token;
  const refresh_token = resData.refresh_token;

  localStorage.setItem("access_token", access_token);
  localStorage.setItem("refresh_token", refresh_token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 24);
  localStorage.setItem("expiration", expiration.toISOString());
  return redirect("./home");
}
