import * as Yup from "yup";

export const loginValidations = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string().max(255).required("Password is required"),
});

export const signupValidations = Yup.object().shape({
  name: Yup.string().max(255).required("Name is required"),

  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),

  password: Yup.string().max(255).required("Password is required"),
});
