import React from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import CaregivingHands from '../../components/assets/images/CaregivingHands.jpeg'


function SignUp() {
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
              src={CaregivingHands}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
          

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Administrator registration
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
              Empowering Administrators for Streamlined Operations, Personalized Care, and Enriched Senior Living Experiences.
              </p>
              {data && data.errors && (
                <ul>
                  {Object.values(data.errors).map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              )}

              <Form method="POST" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    required
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    required
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    required
                    name="username"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="home-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Home Name
                  </label>

                  <input
                    type="text"
                    id="home-name"
                    required
                    name="home-name"
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
                    name="password1"
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password2"
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}

                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                   {isSubmitting ? "Submitting..." : "Create an account"}
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

export default SignUp;

export async function signUpAction({ request }) {
  const data = await request.formData();
  const signupData = {
    username: data.get("username"),
    password1: data.get("password1"),
    password2: data.get("password2"),
    home_name: data.get("home-name"),
    first_name: data.get("first_name"),
    last_name: data.get("last_name"),
    is_admin: true,
  };
  const response = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(signupData),
  });
  if (response.status === 409) {
    return response;
  }

  if (response.status === 417) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not register user" }, { status: 500 });
  }

  return redirect("/login");
}
