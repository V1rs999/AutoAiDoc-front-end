import { Navigate } from "react-router-dom";
import axios from "axios";

const RequireAuth = ({ children }) => {
  const url = "https://localhost:7189/Token/isExpired";
  const { token: token } =
    JSON.parse(localStorage.getItem("Token Param")) || {};
  console.log(token);

  axios.post(url, token).then((res) => {
    if (res.data === "Token is Expired") {
      return <Navigate to="/authorization" state={{ from: location }} />;
    }
  });

  return children;
};

export { RequireAuth };
