import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be at least 4 digits")
    .required("Please enter a username."),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
      "Please enter a valid email address.",
    )
    .required("Please enter an email address."),
  password: Yup.string()
    .min(6, "Password must be at least 6 digits.")
    .required("Please enter a password."),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter an email address."),
  password: Yup.string()
    .required("Please enter a password."),
});