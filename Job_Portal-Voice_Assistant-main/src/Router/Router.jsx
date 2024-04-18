import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Assistance from "../Pages/Assistance";
import ApplyNow from "../Pages/ApplyNow";
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/applynow", element: <ApplyNow /> },
      { path: "/about", element: <About /> },
      { path: "/assistance", element: <Assistance/> },
      { path: "/contactus", element: <Contact /> },
      { path: "/login" , element:<LoginPage/>},
      { path: "/signup" , element:<SignupPage/>}
    ],
  },
]);

export default router;
