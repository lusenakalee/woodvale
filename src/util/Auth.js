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

export function userTokenLoader() {
  return getAuthToken();
}

async function currentUserLoader() {
  let url = "/current_user";
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
  let url = "/dashboard/residents";
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
  console.log(resData);
  return resData;
}

async function leavesLoader() {
  let url = "/dashboard/leaves";
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
  console.log(resData);
  return resData;
}

async function totalIncidentsLoader() {
  let url = "/dashboard/incidents";
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
  console.log(resData);
  return resData;
}

async function activitiesLoader() {
  let url = "/dashboard/activities";
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
  console.log(resData);
  return resData;
}


async function dailyRecordsLoader() {
  let url = "/dashboard/daily-records";
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
  console.log(resData);
  return resData;
}









export function checkToken() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/login");
  }
}

export async function tokenLoader() {
  return defer({
    root: userTokenLoader(),
    user: await currentUserLoader(),
    totalResidents: await totalResidentsLoader(),
    leaves: await leavesLoader(),
    activities: await activitiesLoader(),
    dailyRecords: await dailyRecordsLoader(),

    totalIncidents: await totalIncidentsLoader(),
  });
}
