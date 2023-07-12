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
import { logoutAction } from "./pages/RootPages/Logout";
import { activitiesLoader } from "./pages/ActivityPages/ActivityMainPages/ActivitiesPage";

const ResidentRoot = lazy(() => import("./pages/ResidentPages/ResidentsRoot"));

const ActivityRoot = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/MainActivityRoot")
);

const MedRecordRoot = lazy(() =>
  import("./pages/MedicalRecordsPages/MedicalRecordsRoot")
);

const LeavesRoot = lazy(() => import("./pages/LeavePages/LeavesRoot"));

const IncidentRoot = lazy(() => import("./pages/IncidentPages/IncidentsRoot"));

const NewIncidentPage = lazy(() =>
  import("./pages/IncidentPages/NewIncidentsPage")
);

const ViewIncidentsPage = lazy(() =>
  import("./pages/IncidentPages/ViewIncidentsPage")
);

const EditIncidentPage = lazy(() =>
  import("./pages/IncidentPages/EditIncidents")
);

const NewLeavesPage = lazy(() => import("./pages/LeavePages/NewLeavesPage"));

const EditLeavesPage = lazy(() => import("./pages/LeavePages/EditLeave"));

const ViewLeavesPage = lazy(() => import("./pages/LeavePages/ViewLeavesPage"));

const NewMedRecordPage = lazy(() =>
  import("./pages/MedicalRecordsPages/NewMedicalRecordPage")
);

const EditMedRecordPage = lazy(() =>
  import("./pages/MedicalRecordsPages/EditMedicalRecordPage")
);

const ViewMedicalRecordPage = lazy(() =>
  import("./pages/MedicalRecordsPages/ViewMedicalRecordPage")
);

const UserDetailPage = lazy(() => import("./pages/UserPages/UserDetailPage"));

const UserEditPage = lazy(() => import("./pages/UserPages/UserEditPage"));

const UserCreationPage = lazy(() => import("./pages/UserPages/NewUserPage"));

const UsersPage = lazy(() => import("./pages/UserPages/AllUsers"));

const UserRoot = lazy(() => import("./pages/UserPages/UserRoot"));

const CarePlanRoot = lazy(() => import("./pages/CarePlanPages/CarePlanRoot"));

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

const AllLogsPage = lazy(() => import("./pages/LogsPages/AllLogsPage"));

const NewLogsPage = lazy(() => import("./pages/LogsPages/NewLogsPage"));

const EditLogsPage = lazy(() => import("./pages/LogsPages/EditLogsPage"));

const ProfilePage = lazy(() => import("./pages/UserPages/ProfilePage"));

const ProfileEditPage = lazy(() => import("./pages/UserPages/EditProfilePage"));

const ActivitiesPage = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/ActivitiesPage")
);

const EditResidentPage = lazy(() =>
  import("./pages/ResidentPages/EditResidentPage")
);

const ViewCarePlan = lazy(() =>
  import("./pages/CarePlanPages/ViewCarePlanPage")
);

const NewCarePlanPage = lazy(() =>
  import("./pages/CarePlanPages/NewCarePlanPage")
);
const EditCarePlanPage = lazy(() =>
  import("./pages/CarePlanPages/EditCarePlanPage")
);

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
        path: "profile",
        id: "profile",
        loader: (meta) =>
          import("./pages/UserPages/ProfilePage").then((module) =>
            module.loader(meta)
          ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProfilePage />
              </Suspense>
            ),
          },
          {
            path: "edit",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <ProfileEditPage />
              </Suspense>
            ),
            action: (meta) =>
              import("./components/UserComps/EditProfile").then((module) =>
                module.action(meta)
              ),
          },
        ],
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
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ResidentRoot />
          </Suspense>
        ),
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
              {
                path: "incident",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <IncidentRoot />
                  </Suspense>
                ),
                id: "incidents",
                loader: (meta) =>
                  import("./pages/IncidentPages/ViewIncidentsPage").then(
                    (module) => module.loader(meta)
                  ),
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading</p>}>
                        <ViewIncidentsPage />
                      </Suspense>
                    ),
                  },
                  {
                    path: "new",
                    element: (
                      <Suspense fallback={<p>Loading</p>}>
                        <NewIncidentPage />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import("./components/IncidentComps/NewIncidentForm").then(
                        (module) => module.action(meta)
                      ),
                  },
                  {
                    path: "edit",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <EditIncidentPage />
                      </Suspense>
                    ),
                  },
                ],
              },
              {
                path: "leaves",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <LeavesRoot />
                  </Suspense>
                ),
                id: "leaves",
                loader: (meta) =>
                  import("./pages/LeavePages/ViewLeavesPage").then((module) =>
                    module.loader(meta)
                  ),
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading</p>}>
                        <ViewLeavesPage />
                      </Suspense>
                    ),
                  },
                  {
                    path: "new",
                    action: (meta) =>
                      import("./components/LeaveComps/NewLeaveForm").then(
                        (module) => module.action(meta)
                      ),
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <NewLeavesPage />
                      </Suspense>
                    ),
                  },
                  {
                    path: "edit",
                    element: (
                      <Suspense fallback={<p>Loading..</p>}>
                        <EditLeavesPage />
                      </Suspense>
                    ),
                  },
                ],
              },
              {
                path: "med-recs",
                id: "med-recs",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <MedRecordRoot />
                  </Suspense>
                ),
                loader: (meta) =>
                  import(
                    "./pages/MedicalRecordsPages/ViewMedicalRecordPage"
                  ).then((module) => module.loader(meta)),
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <ViewMedicalRecordPage />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import(
                        "./pages/MedicalRecordsPages/ViewMedicalRecordPage"
                      ).then((module) => module.action(meta)),
                  },
                  {
                    path: "new",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <NewMedRecordPage />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import(
                        "./components/MedicalRecordsComs/MedRecordsForm"
                      ).then((module) => module.action(meta)),
                  },
                  {
                    path: "edit",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <EditMedRecordPage />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import(
                        "./pages/MedicalRecordsPages/EditMedicalRecordPage"
                      ).then((module) => module.action(meta)),
                  },
                ],
              },
              {
                path: "care-plan",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <CarePlanRoot />
                  </Suspense>
                ),
                id: "care-plan",
                loader: (meta) =>
                  import("./pages/CarePlanPages/ViewCarePlanPage").then(
                    (module) => module.loader(meta)
                  ),
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <ViewCarePlan />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import("./pages/CarePlanPages/ViewCarePlanPage").then(
                        (module) => module.action(meta)
                      ),
                  },
                  {
                    path: "new",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <NewCarePlanPage />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import("./components/CarePlanComps/CarePlanForm").then(
                        (module) => module.action(meta)
                      ),
                  },
                  {
                    path: "edit",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <EditCarePlanPage />
                      </Suspense>
                    ),
                    action: (meta) =>
                      import("./pages/CarePlanPages/EditCarePlanPage").then(
                        (module) => module.action(meta)
                      ),
                  },
                ],
              },
              {
                path: "logs",
                element: (
                  <Suspense fallback={<p>Loading..</p>}>
                    <AllLogsPage />
                  </Suspense>
                ),
                loader: (meta) =>
                  import("./pages/LogsPages/AllLogsPage").then((module) =>
                    module.loader(meta)
                  ),
              },
              {
                path: "new-log",
                element: (
                  <Suspense fallback={<p>Loading..</p>}>
                    <NewLogsPage />
                  </Suspense>
                ),
                action: (meta) =>
                  import("./components/LogsComps/NewLogsForm").then((module) =>
                    module.action(meta)
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
