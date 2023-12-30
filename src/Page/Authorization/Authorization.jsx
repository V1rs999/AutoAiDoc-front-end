import { useState } from "react";
import { useFormik } from "formik";
import { AuthorizationSchema } from "../../schemas";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Authorization.scss";
import googleIcon from "../../../public/Google logo.svg";
import Politic from "../../Component/Modal/Politic/Politic.jsx";

export default function Authorization() {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    const url = "https://localhost:7189/Authorization";
    console.log(values);
    console.log(actions);
    axios
      .post(url, values)
      .then((response) => {
        console.log("POST request successful!");
        console.log(response.data);
        navigate(`/${response.data}`);
      })
      .catch((error) => {
        alert(`Error making POST request: ${error.response.data}`);
      });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AuthorizationSchema,
    onSubmit,
  });
  const [modalState, setModalState] = useState(false);

  return (
    <section className="authorization">
      <div className="authorization-div">
        <div className="authorization-credentials">
          <h1 className="title">Welcome back!</h1>
          <p className="description">Enter your credentials to continue.</p>
        </div>
        <div className="authorization-form-wrapper">
          <form
            className="authorization-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <section className="form-input">
              <div className="form-email">
                <div
                  className={`form-email-input${
                    errors.email && touched.email ? " input-error" : ""
                  }`}
                >
                  <label htmlFor="email"></label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    autoComplete="true"
                    placeholder="Email Address"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-email-error">
                  {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="form-password">
                <div
                  className={`form-input-password ${
                    errors.password && touched.password ? "input-error" : ""
                  }`}
                >
                  <label htmlFor="password"></label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-password-error">
                  {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>
            </section>
            <section className="authorization-form-btns">
              <div className="authorization-form-forgot-pass">
                <Link className="forgot-pass" to={"#"}>
                  Forgot Password?
                </Link>
              </div>
              <div className="authorization-form-submitBtn">
                <button
                  className="submitBtn"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Log in
                </button>
              </div>
              <div className="authorization-form-google">
                <p className="alternative-conn">Or connect</p>
                <Link
                  to={
                    "https://localhost:7189/Authorization/Google?returnUrl=%2F"
                  }
                >
                  <div className="authorization-form-googleBtn">
                    <img className="googleIcon" src={googleIcon} alt="" />
                  </div>
                </Link>
              </div>
              <div className="agree-politic">
                <p className="agree-politic-text">
                  By logging, you are agreeing with our
                  <Link
                    className="agree-politic-link"
                    to={"#"}
                    onClick={() => setModalState(true)}
                  >
                    {" "}
                    Terms of Use
                  </Link>{" "}
                  and
                  <Link
                    className="agree-politic-link"
                    to={"#"}
                    onClick={() => setModalState(true)}
                  >
                    {" "}
                    Privacy Policy
                  </Link>
                </p>
                <div className="modal-agree-politic">
                  {modalState && (
                    <Politic
                      onDestroy={(event) => {
                        event.stopPropagation();
                        setModalState(false);
                      }}
                    />
                  )}
                </div>
              </div>
            </section>
          </form>
        </div>
        <div className="footer-authorization">
          <p className="new-acc">
            Don't have an account?
            <Link className="register-butt" to={"/registration"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
