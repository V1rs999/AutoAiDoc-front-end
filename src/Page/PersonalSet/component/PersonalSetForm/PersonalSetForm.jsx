import "./PersonalSetForm.scss";
import { PersonalSetSchema } from "../../../../schemas/index.js";
import { useFormik } from "formik";
export default function PersonalSetForm() {
  const onSubmit = async (values, actions) => {};

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
      firstName: "",
      lastName: "",
      userName: "",
      phone: "",
      emailR: "",
      passwordR: "",
    },
    validationSchema: PersonalSetSchema,
    onSubmit,
  });
  return (
    <form
      className="PersonalSet-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <section className="form-inputR">
        <div className="column-1">
          <div className="form-firstName">
            <label className="description label-upd" htmlFor="firstName">
              First Name
            </label>
            <div
              className={`form-firstName-input${
                errors.firstName && touched.firstName ? " input-errorR" : ""
              }`}
            >
              <input
                value={values.firstName}
                onChange={handleChange}
                id="firstName"
                type="text"
                autoComplete="true"
                placeholder=""
                onBlur={handleBlur}
              />
            </div>
            <div className="form-firstName-error">
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>
          </div>
          <div className="form-lastName">
            <label className="description label-upd" htmlFor="lastName">
              Last Name
            </label>
            <div
              className={`form-lastName-input${
                errors.lastName && touched.lastName ? " input-errorR" : ""
              }`}
            >
              <input
                value={values.lastName}
                onChange={handleChange}
                id="lastName"
                type="text"
                autoComplete="true"
                placeholder=""
                onBlur={handleBlur}
              />
            </div>
            <div className="form-lastName-error">
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="form-userName">
            <label className="description label-upd" htmlFor="userName">
              User Name
            </label>
            <div
              className={`form-userName-input${
                errors.userName && touched.userName ? " input-errorR" : ""
              }`}
            >
              <input
                value={values.userName}
                onChange={handleChange}
                id="userName"
                type="text"
                autoComplete="true"
                placeholder=""
                onBlur={handleBlur}
              />
            </div>
            <div className="form-userName-error">
              {errors.userName && touched.userName && (
                <p className="error">{errors.userName}</p>
              )}
            </div>
          </div>
        </div>
        <div className="column-2">
          <div className="form-phone">
            <label className="description label-upd" htmlFor="phone">
              Mobile Number
            </label>
            <div
              className={`form-phone-input${
                errors.phone && touched.phone ? " input-errorR" : ""
              }`}
            >
              <input
                value={values.phone}
                onChange={handleChange}
                id="phone"
                type="tel"
                autoComplete="true"
                placeholder=""
                onBlur={handleBlur}
              />
            </div>
            <div className="form-phone-error">
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="form-emailR">
            <label className="description label-upd" htmlFor="emailR">
              Email
            </label>
            <div
              className={`form-emailR-input${
                errors.emailR && touched.emailR ? " input-errorR" : ""
              }`}
            >
              <input
                value={values.emailR}
                onChange={handleChange}
                id="emailR"
                type="email"
                autoComplete="true"
                placeholder=""
                onBlur={handleBlur}
              />
            </div>
            <div className="form-emailR-error">
              {errors.emailR && touched.emailR && (
                <p className="error">{errors.emailR}</p>
              )}
            </div>
          </div>
          <div className="form-passwordR">
            <label className="description label-upd" htmlFor="passwordR">
              New Password
            </label>
            <div
              className={`form-input-passwordR ${
                errors.passwordR && touched.passwordR ? "input-errorR" : ""
              }`}
            >
              <input
                id="passwordR"
                type="password"
                placeholder=""
                value={values.passwordR}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-passwordR-error">
              {errors.passwordR && touched.passwordR && (
                <p className="error">{errors.passwordR}</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="PersonalSet-form-btns">
        <div className="PersonalSet-form-submitBtn">
          <button
            className="submitBtn"
            style={{ fontSize: "24px" }}
            disabled={isSubmitting}
            type="submit"
          >
            Update
          </button>
        </div>
      </section>
    </form>
  );
}
