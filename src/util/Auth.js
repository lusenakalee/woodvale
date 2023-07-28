import { defer, json, redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpiration = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpiration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }
  if (tokenDuration < 0) {
    return null;
  }
  return token;
}

export async function userTokenLoader() {
  return getAuthToken();
}

async function currentUserLoader() {
  let url = "https://homes-test.onrender.com/current_user";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}

async function totalResidentsLoader() {
  let url = "https://homes-test.onrender.com/dashboard/residents";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}

async function leavesLoader() {
  let url = "https://homes-test.onrender.com/dashboard/leaves";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  
  return resData;
}

async function totalIncidentsLoader() {
  let url = "https://homes-test.onrender.com/dashboard/incidents";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}

async function activitiesLoader() {
  let url = "https://homes-test.onrender.com/dashboard/activities";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}

async function dailyRecordsLoader() {
  let url = "https://homes-test.onrender.com/dashboard/daily-records";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}


async function usersCountLoader() {
  let url = "https://homes-test.onrender.com/dashboard/users";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  ;
  return resData;
}






async function lastLoginLoader() {
  let url = "https://homes-test.onrender.com/dashboard/last-login";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  
  return resData;
}

async function healthDataLoader() {
  let url = "https://homes-test.onrender.com/dashboard/residents/health_data";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (response.status === 401) {
    return;
  }
  if (response.status === 400) {
    return response;
  }
  if (response.status === 404) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Server Error" }, { status: 500 });
  }

  const resData = await response.json();
  ;
  return resData;
}

export function checkToken() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/login");
  }
}

export async function residentsLoader() {
  const token = getAuthToken();

  const response = await fetch("https://homes-test.onrender.com/residents", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    },
  });
  if(response.status === 401){
    return
  }
  if (!response.ok) {
    throw json({ message: "Cant get residents" }, { status: 500 });
  } else {
    const resData = await response.json();
    ;
    return resData;
  }
}

export async function tokenLoader() {
  return defer({
    token: await userTokenLoader(),
    user: await currentUserLoader(),
    totalResidents: await totalResidentsLoader(),
    leaves: await leavesLoader(),
    activities: await activitiesLoader(),
    dailyRecords: await dailyRecordsLoader(),
    lastLogin: await lastLoginLoader(),
    totalIncidents: await totalIncidentsLoader(),
    healthData: await healthDataLoader(),
    usersCount: await usersCountLoader(),
    residents: await residentsLoader(),
  });
}
