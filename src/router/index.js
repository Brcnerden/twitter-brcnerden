import { createBrowserRouter } from "react-router-dom";
import { CreateUserPage } from "../pages/CreateUserPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/CreateUser",
    element: <CreateUserPage />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
]);

export { ROUTER };
