import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequireVin = ({ children }) => {
  RequireVin.propTypes = {
    children: PropTypes.func.isRequired,
  };
  const [isTokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const { vin } = JSON.parse(localStorage.getItem("Vin")) || {};

      if (!vin) {
        setTokenValid(false);
        alert("first of all you must uplioad file or write manually Vin code");
        return;
      }
    };

    checkTokenValidity();
  }, []);

  if (!isTokenValid) {
    return (
      <Navigate to="/dropFile" state={{ from: window.location.pathname }} />
    );
  }
  return children;
};

export { RequireVin };
