import ReactDOM from "react-dom/client";
import "./main.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./Null.css";
import Authorization from "./Page/Authorization/Authorization.jsx";
import DropFile from "./Page/DropFile/Drop.jsx";
import ErrorPage from "./Page/Error/Error.jsx";
import ListOFError from "./Page/ListOFError/ListOFError.jsx";
import Registration from "./Page/Registration/Registration.jsx";
import Welcome from "./Page/Welcome/Welcome.jsx";
import PersonalSet from "./Page/PersonalSet/PersonalSet.jsx";
import { RequireAuth } from "./hoc/RequireAuth.jsx";
import MyCar from "./Page/MyCar/MyCar.jsx";
import { RequireVin } from "./hoc/RequireVin.jsx";
import ChatGPT from "./Api/ChatGPT.jsx";
import Root from "./Root";

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
            <RequireVin>
              <ListOFError />
            </RequireVin>
          </RequireAuth>
        }
      />
      <Route
        path="/personalSet"
        element={
          <RequireAuth>
            <PersonalSet />
          </RequireAuth>
        }
      />
      <Route
        path="/mycar"
        element={
          <RequireAuth>
            <RequireVin>
              <MyCar />
            </RequireVin>
          </RequireAuth>
        }
      />
      <Route
        path="/ChatGPT"
        element={
          <RequireAuth>
            <RequireVin>
              <ChatGPT />
            </RequireVin>
          </RequireAuth>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
