import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MyRequestsPage from "../pages/MyRequestsPage";
import AdminPage from "../pages/AdminPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/my-requests", element: <MyRequestsPage /> },
  { path: "/admin", element: <AdminPage /> },
]);

export default router;
