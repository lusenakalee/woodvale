import {  redirect } from "react-router-dom";

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

export function tokenLoader() {
  return getAuthToken();
}

export  function checkToken() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/login");
  }
}

