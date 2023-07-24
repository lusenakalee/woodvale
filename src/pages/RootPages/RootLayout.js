import React, { Suspense } from "react";
import Nav from "../../components/RootComps/Nav";
import { Await, Outlet, useRouteLoaderData } from "react-router-dom";

function RootLayout() {
  const {token} = useRouteLoaderData("root");
  const { user } = useRouteLoaderData("root");
  return (
    <React.Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={user}>
          {(loadedUser) => token && <Nav userData={loadedUser} />}
        </Await>
      </Suspense>
      <Outlet />
    </React.Fragment>
  );
}

export default RootLayout;
