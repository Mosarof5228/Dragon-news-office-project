import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Home/Home";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/news.json"),
      },
      {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Register></Register>,
      },
    ],
  },
]);
