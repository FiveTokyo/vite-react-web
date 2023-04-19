import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components";
import LazyImport from "../components/LazyImport";
import { Home, Login } from "../pages";

const routes = [
  {
    path: "/login",
    element: LazyImport(Login),
  },
  {
    path: "/",
    element: <Navigate to="/back/home" replace={true} />,
  },
  {
    path: "/back", //后台
    element: <Layout />,
    children: [
      {
        path: "/back/home",
        element: LazyImport(Home),
      },
    ],
  },
];


export default routes;
