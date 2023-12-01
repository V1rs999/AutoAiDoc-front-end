import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Page/Header/Header.jsx";
import Footer from "./Page/Footer/Footer.jsx";
import Welcome from "./Page/Welcome/Welcome.jsx";
import ListOFError from "./Page/ListOFError/ListOFError.jsx";
import ErrorPage from "./Page/Error/Error.jsx";
import DropFile from "./Page/DropFile/Drop.jsx";
import Authorization from "./Page/Authorization/Authorization.jsx";
import Registration from "./Page/Registration/Registration.jsx";
import "./Null.css";
import "./main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

const Root = () => {
  if (
    useLocation().pathname === "/authorization" ||
    useLocation().pathname === "/registration"
  ) {
    return (
      <div className="container">
        <Header />
        <Outlet />
      </div>
    );
  }
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Welcome />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/dropFile" element={<DropFile />} />
      <Route path="/listoferror" element={<ListOFError />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
