import "./App.css";
import Dashboard from "./pages/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp, { signUpAction } from "./components/SignupComps/SignUp";
import SignIn, { loginAction } from "./components/SignupComps/SignIn";
import { tokenLoader } from "./util/Auth";
import ErrorPage from "./pages/RootPages/ErrorPage";
import RootLayout from "./pages/RootPages/RootLayout";
import HomePage from "./pages/RootPages/HomePage";
import { Suspense, lazy } from "react";
import ResidentsRoot from "./pages/ResidentPages/ResidentsRoot";
import { logoutAction } from "./pages/RootPages/Logout";
import { activitiesLoader } from "./pages/ActivityPages/ActivityMainPages/ActivitiesPage";

const ActivityRoot = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/MainActivityRoot")
);

const UserCreationPage = lazy(() => import("./pages/UserPages/NewUserPage"));

const UsersPage = lazy(() => import("./pages/UserPages/AllUsers"));

const UserRoot = lazy(() => import("./pages/UserPages/UserRoot"));

const NewActivityPage = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/NewActivityPage")
);

const AllResidentsPage = lazy(() =>
  import("./pages/ResidentPages/AllResidentsPage")
);

const NewResidentPage = lazy(() =>
  import("./pages/ResidentPages/NewResidentPage")
);

const ResidentDetailPage = lazy(() =>
  import("./pages/ResidentPages/ResidentDetailPage")
);

const ActivitiesPage = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/ActivitiesPage")
);

const EditResidentPage = lazy(() =>
  import("./pages/ResidentPages/EditResidentPage")
);

<<<<<<< HEAD
const UserDetailPage = lazy(() => import("./pages/UserPages/UserDetailPage"));

const UserEditPage = lazy(() => import("./pages/UserPages/UserEditPage"));

=======
>>>>>>> 10a292dd41d576531e24463cb5d88f6e216e5726
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <HomePage />,
  },
  {
    path: "/admin/signup/page",
    element: <SignUp />,
    errorElement: <ErrorPage />,
    action: signUpAction,
  },
  {
    path: "/login",
    id: "root",
    loader: tokenLoader,
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
        action: loginAction,
      },
      {
        path: "home",
        element: <Dashboard />,
      },

      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "team",
        id: "users",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <UserRoot />
          </Suspense>
        ),
        loader: () =>
          import("./pages/UserPages/AllUsers").then((module) =>
            module.loader()
          ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <UsersPage />
              </Suspense>
            ),
          },
          {
            path: "new",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <UserCreationPage />
              </Suspense>
            ),
            action: (meta) =>
              import("./components/UserComps/UserForm").then((module) =>
                module.action(meta)
              ),
          },
          {
            path: ":id",
            loader: (meta) =>
              import("./pages/UserPages/UserDetailPage").then((module) =>
                module.loader(meta)
              ),
            id: "user-detail",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <UserDetailPage />
                  </Suspense>
                ),
                action: (meta) =>
                  import("./pages/UserPages/UserDetailPage").then((module) =>
                    module.action(meta)
                  ),
              },
              {
                path: "edit",
                action: (meta) =>
                  import("./components/UserComps/UserForm").then((module) =>
                    module.action(meta)
                  ),
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <UserEditPage />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "activity",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ActivityRoot />
          </Suspense>
        ),
        id: "activities",
        loader: activitiesLoader,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ActivitiesPage />
              </Suspense>
            ),
          },
          {
            path: "new",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <NewActivityPage />
              </Suspense>
            ),
            action: (meta) =>
              import("./components/ActivityComps/ActivityForm").then((module) =>
                module.action(meta)
              ),
          },
        ],
      },
      {
        path: "residents",
        id: "all-residents",
        element: <ResidentsRoot />,
        loader: () =>
          import("./pages/ResidentPages/AllResidentsPage").then((module) =>
            module.loader()
          ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <AllResidentsPage />
              </Suspense>
            ),
          },
          {
            path: "new",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <NewResidentPage />
              </Suspense>
            ),
            action: (meta) =>
              import("./components/ResidentComps/AddResidentForm").then(
                (module) => module.residentAction(meta)
              ),
          },
          {
            path: ":id",
            id: "resident-detail",
            loader: (meta) =>
              import("./pages/ResidentPages/ResidentDetailPage").then(
                (module) => module.loader(meta)
              ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <ResidentDetailPage />
                  </Suspense>
                ),
                action: (meta) =>
                  import("./pages/ResidentPages/ResidentDetailPage").then(
                    (module) => module.action(meta)
                  ),
              },
              {
                path: "edit",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <EditResidentPage />
                  </Suspense>
                ),
                action: (meta) =>
                  import("./components/ResidentComps/AddResidentForm").then(
                    (module) => module.residentAction(meta)
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
