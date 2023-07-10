import React from 'react'
import { Form, json, redirect } from 'react-router-dom'

function UserForm({method, user, title}) {
  return (
    <React.Fragment>
        <Form method={method}>
            new user
        </Form>
    </React.Fragment>
  )
}

export default UserForm
export async function action({request, params}){
    const data = await request.formData()
    const method = request.method
    const signupData = {
      username: data.get("username"),
      password1: data.get("password1"),
      password2: data.get("password2"),
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      is_admin: data.get("is-admin") //boolean field should be a dropdown of true or false
    }
    const response = await fetch("/user", {
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
  
    return redirect("/login/team");
  }