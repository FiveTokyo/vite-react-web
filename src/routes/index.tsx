import { Navigate, RouteObject } from "react-router-dom";
import LazyImport from "../components/LazyImport";
import Login from "../pages/login";

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/login" replace={true} /> },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routes;
