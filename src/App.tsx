import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import RoleWrapper from "./components/app-layout/RoleWrapper";

const App = () => {
  const Signin = lazy(() => import("./screens/signin"));
  const Overview = lazy(() => import("./screens/admin/overview"));
  const Dashboard = lazy(() => import("./screens/admin/dashboard"));
  const VehicleData = lazy(() => import("./screens/admin/vehicle-data"));
  const AlarmStatus = lazy(() => import("./screens/admin/alarm-status"));
  const BmsStatus = lazy(() => import("./screens/admin/bms-status"));
  const Product = lazy(() => import("./screens/admin/product"));
  const auth = true;

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {auth ? (
              <Route path="/" element={<RoleWrapper role="ROLE_USER" />}>
                <Route
                  index
                  path="/"
                  element={
                    <Suspense>
                      <Overview />
                    </Suspense>
                  }
                />

                <Route
                  path="/dashboard"
                  element={
                    <Suspense>
                      <Dashboard />
                    </Suspense>
                  }
                />
                <Route
                  path="/alarm-status"
                  element={
                    <Suspense>
                      <AlarmStatus />
                    </Suspense>
                  }
                />
                <Route
                  path="/bms-status"
                  element={
                    <Suspense>
                      <BmsStatus />
                    </Suspense>
                  }
                />
                <Route
                  path="/vehicle-data"
                  element={
                    <Suspense>
                      <VehicleData />
                    </Suspense>
                  }
                />

                <Route
                  path="/product"
                  element={
                    <Suspense>
                      <Product />
                    </Suspense>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <Suspense>
                      <Product />
                    </Suspense>
                  }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            ) : (
              <Route path="/" element={<Outlet />}>
                <Route
                  index
                  element={
                    <Suspense>
                      <Signin />
                    </Suspense>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            )}
          </Route>
        )
      )}
    />
  );
};

export default App;
