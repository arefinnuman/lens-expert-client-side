import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import About from "../../Pages/About";
import Blog from "../../Pages/Blog";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
