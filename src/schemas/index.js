import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const FirstNameRegex = /^[A-Za-zА-ЯҐЄІЇа-яґєії'’-]+$/;
const LastNameRegex =
  /^[A-Za-zА-ЯҐЄІЇа-яґєії'’-]+(?: [A-Za-zА-ЯҐЄІЇа-яґєії'’-]+)*$/;
const UserNameRegex = /^[A-Za-z0-9_А-ЯҐЄІЇа-яґєії'-]+$/;
const PhoneNumberRegex = /^\+?3?8?(0\d{9})$/;

export const RegistrationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
export const AuthorizationSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
export const PersonalSetSchema = yup.object().shape({
  firstName: yup.string().min(5).matches(FirstNameRegex, {
    message:
      "Please check if in your Name don't use num or have length ar least 5 char",
  }),
  lastName: yup.string().min(5).matches(LastNameRegex, {
    message:
      "Please check if in your Last Name don't use num or have length ar least 5 char",
  }),
  userName: yup
    .string()
    .min(5)
    .matches(UserNameRegex, { message: "min 5 char" }),
  emailR: yup.string().email("Please enter a valid email"),
  passwordR: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" }),
  phone: yup
    .string()
    .min(5)
    .matches(PhoneNumberRegex, { message: "Incorrect phone number" }),
});
