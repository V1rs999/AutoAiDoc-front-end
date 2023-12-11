import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import "./Null.css";
import Authorization from "./Page/Authorization/Authorization.jsx";
import DropFile from "./Page/DropFile/Drop.jsx";
import ErrorPage from "./Page/Error/Error.jsx";
import Footer from "./Page/Footer/Footer.jsx";
import Header from "./Page/Header/Header.jsx";
import ListOFError from "./Page/ListOFError/ListOFError.jsx";
import Registration from "./Page/Registration/Registration.jsx";
import Welcome from "./Page/Welcome/Welcome.jsx";
import { RequireAuth } from "./hoc/RequireAuth.jsx";

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
      <Route
        path="/dropFile"
        element={
          <RequireAuth>
            <DropFile />
          </RequireAuth>
        }
      />
      <Route
        path="/listoferror"
        element={
          <RequireAuth>
            <ListOFError />
          </RequireAuth>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
