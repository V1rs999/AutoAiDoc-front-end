import { useFormik } from "formik";
import { RegistrationSchema } from "../../schemas";
import axios from "axios";
import "./Registration.scss";
import { Link } from "react-router-dom";
import googleIcon from "../../../public/Google logo.svg";
import Politic from "../../Component/Modal/Politic/Politic.jsx";
import { useState } from "react";

const onSubmit = async (values, actions) => {
  const url = "https://localhost:7189/Registration";
  console.log(values);
  console.log(actions);
  axios
    .post(url, values)
    .then((response) => {
      console.log("POST request successful!");
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error making POST request:", error);
    });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
export default function Registration() {
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
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit,
  });

  const [modalState, setModalState] = useState(false);

  return (
    <section className="registration">
      <div className="registration-div">
        <div className="registration-credentials">
          <h1 className="title">Create account!</h1>
          <p className="description">Register to get started.</p>
        </div>
        <div className="registration-form-wrapper">
          <form
            className="registration-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <section id="registration-form-input" className="form-input">
              <div className="form-username">
                <div
                  className={`form-username-input${
                    errors.username && touched.username ? " input-error" : ""
                  }`}
                >
                  <label htmlFor="username"></label>
                  <input
                    value={values.username}
                    onChange={handleChange}
                    id="username"
                    type="text"
                    autoComplete="true"
                    placeholder="Name"
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-username-error">
                  {errors.username && touched.username && (
                    <p className="error">{errors.username}</p>
                  )}
                </div>
              </div>
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
              <div className="form-confirmPassword-input">
                <div
                  className={`form-input-confirmPassword ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : ""
                  }`}
                >
                  <label htmlFor="confirmPassword"></label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-confirmPassword-error">
                  {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>
            </section>
            <section className="registration-form-btns">
              <div className="registration-form-submitBtn">
                <button
                  className="submitBtn"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="registration-form-google">
                <p className="alternative-conn">Or connect</p>
                <Link
                  to={
                    "https://localhost:7189/Authorization/Google?returnUrl=%2F"
                  }
                >
                  <div className="registration-form-googleBtn">
                    <img className="googleIcon" src={googleIcon} alt="" />
                  </div>
                </Link>
              </div>
              <div className="agree-politic">
                <p className="agree-politic-text">
                  By registering, you are agreeing with our
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
        <div className="footer-registration">
          <p className="new-acc">
            Already have an account?
            <Link className="register-butt" to={"/authorization"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
