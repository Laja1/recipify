import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import CreateRecipe from "../pages/create-recipe";

export const routeconfig = [
  {
    path: "/",
    element: <Outlet />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: "/login", element: <Login /> },
  { path: "/create-recipe", element: <CreateRecipe /> },
];
