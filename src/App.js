import "./App.css";
import Dashboard from "./pages/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp, { signUpAction } from "./components/SignupComps/SignUp";
import SignIn, { loginAction } from "./components/SignupComps/SignIn";
import ErrorPage from "./pages/RootPages/ErrorPage";
import HomePage from "./pages/RootPages/HomePage";
import { Suspense, lazy } from "react";
import { logoutAction } from "./pages/RootPages/Logout";
import { activitiesLoader } from "./pages/ActivityPages/ActivityMainPages/ActivitiesPage";

const ResidentRoot = lazy(() => import("./pages/ResidentPages/ResidentsRoot"));

const AttachmentRoot = lazy(() =>
  import("./pages/AttachmentPages/AttachmentRoot")
);

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

const IncidentDetailPage = lazy(() =>
  import("./pages/IncidentPages/IncidentDetailPage")
);

const NewLeavesPage = lazy(() => import("./pages/LeavePages/NewLeavesPage"));

const EditLeavesPage = lazy(() => import("./pages/LeavePages/EditLeave"));

const LeavesDetailPage = lazy(() =>
  import("./pages/LeavePages/LeaveDetailPage")
);

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

const AllAttAchmentsPage = lazy(() =>
  import("./pages/AttachmentPages/AllAttachmentsPage")
);

const RootLayout = lazy(() => import("./pages/RootPages/RootLayout"));

const AllLogsPage = lazy(() => import("./pages/LogsPages/AllLogsPage"));

const NewLogsPage = lazy(() => import("./pages/LogsPages/NewLogsPage"));

const EditLogsPage = lazy(() => import("./pages/LogsPages/EditLogsPage"));

const ProfilePage = lazy(() => import("./pages/UserPages/ProfilePage"));

const ProfileEditPage = lazy(() => import("./pages/UserPages/EditProfilePage"));

const LeaveApprovePage = lazy(() =>
  import("./pages/LeavePages/LeaveApprovePage")
);

const LeaveRejectPage = lazy(() =>
  import("./pages/LeavePages/LeaveRejectPage")
);

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

const NewAttachmentPage = lazy(() =>
  import("./pages/AttachmentPages/NewAttachmentPage")
);

const ActivityDetailPage = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/ActivityDetailPage")
);

const ActivityEditPage = lazy(() =>
  import("./pages/ActivityPages/ActivityMainPages/ActivityEditPage")
);

const LogDetailPage = lazy(() => import("./pages/LogsPages/LogDetailsPage"));

const RequestDemoPage = lazy(() => import("./pages/RootPages/RequestDemoPage"));

const ResidentReturnPage = lazy(() =>
  import("./pages/LeavePages/ReturnResidentPage")
);

const CancelReturnPage = lazy(() =>
  import("./pages/LeavePages/CancelReturnResidentPage")
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
    path: "/demo",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <RequestDemoPage />
      </Suspense>
    ),
  },

  {
    path: "/login",
    id: "root",
    loader: (meta) =>
      import("./util/Auth").then((module) => module.tokenLoader(meta)),
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <RootLayout />
      </Suspense>
    ),
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
        path: "staff",
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
          {
            path: ":id",
            loader: (meta) =>
              import(
                "./pages/ActivityPages/ActivityMainPages/ActivityDetailPage"
              ).then((module) => module.loader(meta)),
            id: "activity-detail",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <ActivityDetailPage />
                  </Suspense>
                ),
                action: (meta) =>
                  import("./components/ActivityComps/ActivityDetail").then(
                    (module) => module.action(meta)
                  ),
              },
              {
                path: "edit",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <ActivityEditPage />
                  </Suspense>
                ),
                action: (meta) =>
                  import("./components/ActivityComps/ActivityForm").then(
                    (module) => module.action(meta)
                  ),
              },
            ],
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
                    path: ":incidentId",
                    id: "incident",
                    loader: (meta) =>
                      import("./pages/IncidentPages/IncidentDetailPage").then(
                        (module) => module.loader(meta)
                      ),
                    children: [
                      {
                        index: true,
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <IncidentDetailPage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import(
                            "./pages/IncidentPages/IncidentDetailPage"
                          ).then((module) => module.action(meta)),
                      },
                      {
                        path: "edit",
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <EditIncidentPage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import(
                            "./components/IncidentComps/NewIncidentForm"
                          ).then((module) => module.action(meta)),
                      },
                    ],
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
                    path: ":leaveId",
                    id: "leave",
                    loader: (meta) =>
                      import("./pages/LeavePages/LeaveDetailPage").then(
                        (module) => module.loader(meta)
                      ),
                    children: [
                      {
                        index: true,
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <LeavesDetailPage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import("./pages/LeavePages/LeaveDetailPage").then(
                            (module) => module.action(meta)
                          ),
                      },
                      {
                        path: "edit",
                        element: (
                          <Suspense fallback={<p>Loading..</p>}>
                            <EditLeavesPage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import("./components/LeaveComps/NewLeaveForm").then(
                            (module) => module.action(meta)
                          ),
                      },
                      {
                        path: "approve",
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <LeaveApprovePage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import("./pages/LeavePages/LeaveApprovePage").then(
                            (module) => module.leaveApproveAction(meta)
                          ),
                      },
                      {
                        path: "reject",
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <LeaveRejectPage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import("./pages/LeavePages/LeaveRejectPage").then(
                            (module) => module.leaveRejectAction(meta)
                          ),
                      },
                      {
                        path: "reverse",
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <CancelReturnPage />
                          </Suspense>
                        ),
                        action: (meta) =>
                          import(
                            "./pages/LeavePages/CancelReturnResidentPage"
                          ).then((module) => module.action(meta)),
                      },
                      {
                        path: "return",
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <ResidentReturnPage />
                          </Suspense>
                        ),
                        action:(meta) =>
                        import(
                          "./pages/LeavePages/ReturnResidentPage"
                        ).then((module) => module.action(meta)),
                      },
                    ],
                  },
                  ,
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
                path: "attachment",
                element: (
                  <Suspense fallback={<p>Loading...</p>}>
                    <AttachmentRoot />
                  </Suspense>
                ),
                id: "attachments",
                loader: (meta) =>
                  import("./pages/AttachmentPages/AllAttachmentsPage").then(
                    (module) => module.loader(meta)
                  ),
                children: [
                  ({
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <AllAttAchmentsPage />
                      </Suspense>
                    ),
                  },
                  {
                    path: "new",
                    element: (
                      <Suspense fallback={<p>Loading...</p>}>
                        <NewAttachmentPage />
                      </Suspense>
                    ),
                  }),
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
                loader: (meta) =>
                  import("./pages/LogsPages/AllLogsPage").then((module) =>
                    module.loader(meta)
                  ),
                id: "logs",
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<p>Loading..</p>}>
                        <AllLogsPage />
                      </Suspense>
                    ),
                  },
                  {
                    path: ":logID",
                    id: "log-detail",
                    loader: (meta) =>
                      import("./pages/LogsPages/LogDetailsPage").then(
                        (module) => module.loader(meta)
                      ),
                    children: [
                      {
                        index: true,
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <LogDetailPage />
                          </Suspense>
                        ),
                      },
                      {
                        path: "edit",
                        element: (
                          <Suspense fallback={<p>Loading...</p>}>
                            <EditLogsPage />
                          </Suspense>
                        ),
                      },
                    ],
                  },
                ],
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
