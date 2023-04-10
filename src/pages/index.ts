import { lazy } from "react";
const Login = lazy(() => import("./login"));
const Home = lazy(() => import("./home"));
export { Login, Home };
