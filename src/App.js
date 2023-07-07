import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Team from "./pages/Team";
import Residents from "./pages/Residents";
import IncidentForm from "./components/IncidentForm";
import ResidentDetails from "./components/ResidentComps/ResidentDetails";
import SignUp, { signUpAction } from "./components/SignupComps/SignUp";
import SignIn, { loginAction } from "./components/SignupComps/SignIn";
import AddResident from "./components/ResidentComps/AddResident";
import ResidentLog from "./components/ResidentComps/ResidentLog";
import AllResidentsLogs from "./components/ResidentComps/AllResidentsLogs";
import NewLog from "./components/ResidentComps/NewLog";
import ResidentDailyLog from "./pages/ResidentDailyLog";
import { tokenLoader } from "./util/Auth";
import ErrorPage from "./pages/RootPages/ErrorPage";
import RootLayout from "./pages/RootPages/RootLayout";
import HomePage from "./pages/RootPages/HomePage";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },{
    path: "/admin/signup/page",
    element: <SignUp/>,
    errorElement: <ErrorPage />,
    action: signUpAction
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
        action: loginAction
      },
      {
        path: "home",
        element:<Dashboard/>
      },
     
      {
        path: "logout",
        action: loginAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
