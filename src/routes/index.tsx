import { Navigate, RouteObject } from "react-router-dom";
import LazyImport from "../components/LazyImport";
import { Login } from "../pages";

const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/login" replace={true} /> },
  {
    path: "/",
    element: null,
    children: [],
  },
  {
    path: "/login",
    element: <LazyImport lazyChildren={Login} />,
  },
];
export default routes;
