import { Outlet, useLocation } from "react-router-dom";
import Header from "./Page/Header/Header.jsx";
import Footer from "./Page/Footer/Footer.jsx";

const Root = () => {
  const location = useLocation();

  if (
    location.pathname === "/authorization" ||
    location.pathname === "/registration"
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

export default Root;
