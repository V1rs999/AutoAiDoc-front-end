import { useRouteError } from "react-router-dom";
import "./Error.scss";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page" className="error-main">
      <h1>OOps!</h1>
      <p>Sorry, this page doesn't exit.</p>
    </div>
  );
}
