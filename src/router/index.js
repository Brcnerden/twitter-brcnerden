import { Navigate, createBrowserRouter } from "react-router-dom";
import { CreateUserPage } from "../pages/CreateUserPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ROUTES } from "../constants/routes";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";

const GUEST_ROUTER = createBrowserRouter([
  {
    path: ROUTES.createUser,
    element: <CreateUserPage />,
  },
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.login} />,
  },
]);

const USER_ROUTER = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.profile,
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.home} />, //hatalı sayfa geldiğinde sayfayı tekrar home page getirmesi için navigate kullandık
  },
]);

export { USER_ROUTER, GUEST_ROUTER };
