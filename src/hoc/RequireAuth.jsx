import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const RequireAuth = ({ children }) => {
  const [isTokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const url = "https://localhost:7189/Token/isExpired";
      const { token } = JSON.parse(localStorage.getItem("Token Param")) || {};

      if (!token) {
        setTokenValid(false);
        return;
      }

      try {
        const response = await axios.get(url, {
          params: {
            token: token,
          },
        });

        if (response.data === "Token is Expired") {
          setTokenValid(false);
        } else {
          setTokenValid(true);
        }
      } catch (error) {
        setTokenValid(false);
      }
    };

    checkTokenValidity();
  }, []);

  if (!isTokenValid) {
    return (
      <Navigate
        to="/authorization"
        state={{ from: window.location.pathname }}
      />
    );
  }

  return children;
};

export { RequireAuth };
