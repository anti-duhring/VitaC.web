import { createBrowserRouter } from "react-router-dom/dist";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { ErrorPage } from "../pages/Error";
import RegisterPage from "../pages/Register";
import { Links } from "../constants/links";
import CoursesPage from "../pages/Courses";
import AdminCoursesPage from "../pages/Admin/Courses";
import AddCoursePage from "../pages/Admin/Courses/Add";
import { Devpage } from "../pages/Courses/Dev";

export const router = createBrowserRouter([
  {
    path: Links.home,
    element: <HomePage />,
  },
  {
    path: Links.login,
    element: <LoginPage />,
  },
  {
    path: Links.register,
    element: <RegisterPage />,
  },
  {
    path: Links.courses.root,
    children: [
      {
        path: "",
        element: <CoursesPage />,
      },
      {
        path: "dev",
        element: <Devpage />,
      },
    ],
  },
  {
    path: Links.admin.root,
    children: [
      {
        path: Links.admin.courses,
        children: [
          {
            path: "",
            element: <AdminCoursesPage />,
          },
          {
            path: "add",
            element: <AddCoursePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
