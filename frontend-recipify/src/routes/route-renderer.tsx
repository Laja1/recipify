import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeconfig } from "./route-config";
const RouteRenderer = () => {
  const routes = createBrowserRouter(routeconfig);
  return <RouterProvider router={routes} />;
};

export default RouteRenderer;
