import { Navigate, createBrowserRouter } from "react-router-dom";
import { CreateUserPage } from "../pages/CreateUserPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

const GUEST_ROUTER = createBrowserRouter([
  {
    path: "/createuser",
    element: <CreateUserPage />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/loginpage" />,
  },
]);

const USER_ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />, //hatalı sayfa geldiğinde sayfayı tekrar home page getirmesi için navigate kullandık
  },
]);

export { USER_ROUTER, GUEST_ROUTER };
