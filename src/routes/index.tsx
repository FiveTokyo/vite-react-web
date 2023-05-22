import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components";
import LazyImport from "../components/LazyImport";
import { Home, Login } from "../pages";
import UploadFile from "../pages/uploadFile";

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
    path: "back", //后台
    element: <Layout />,
    children: [
      {
        path: "home",
        element: LazyImport(Home),
      },
      {
        path: "upload",
        element: <UploadFile/>,
      },
    ],
  },
];


export default routes;
