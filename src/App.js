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

const AllResidentsPage = lazy(() =>
  import("./pages/ResidentPages/AllResidentsPage")
);

const NewResidentPage = lazy(() =>
  import("./pages/ResidentPages/NewResidentPage")
);

const ResidentDetailPage = lazy(() =>
  import("./pages/ResidentPages/ResidentDetailPage")
);

const router = createBrowserRouter([
  {
    path: "/",
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
        action: loginAction,
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
                action: (meta) => import("./pages/ResidentPages/ResidentDetailPage").then((module)=>module.action(meta))
              },
              {
                path: "edit",
                element:(
                  <Suspense fallback={<p>Loading...</p>}>
                    <NewResidentPage />
                  </Suspense>
                ),
                action: (meta) =>
                import("./components/ResidentComps/AddResidentForm").then(
                  (module) => module.residentAction(meta)
                )
              }
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
