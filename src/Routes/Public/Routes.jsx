import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import About from "../../Pages/About";
import Blog from "../../Pages/Blog";
import Contact from "../../Pages/Contact";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import ReviewsForm from "../../Pages/Reviews/ReviewsForm";
import AddService from "../../Pages/Services/AddService";
import SecviceDetails from "../../Pages/Services/SecviceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../Private/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-details/:id",
        element: <SecviceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://server-site-weld.vercel.app/service-details/${params.id}`
          ),
      },
      {
        path: "/add-review/:_id",
        element: (
          <PrivateRoute>
            <ReviewsForm />,
          </PrivateRoute>
        ),
      },
      {
        path: "/add-services",
        element: <AddService />,
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
