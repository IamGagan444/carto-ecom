import * as Yup from "yup";

export const order_details=Yup.object({
    name:Yup.string()
    .matches(
        /^[A-Za-z ]*$/,
        "Please enter a valid name, do not use numbers & symbols"
    )
    .min(3)
    .max(40)
    .required("Please enter your name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    phoneNumber: Yup.string()
      .matches(
        /^[6-9]\d{9}$/,
        "Phone number must start with 6, 7, 8, or 9 and have 10 digits in total"
      )
      .test(
        "uniqueDigits",
        "Phone number cannot have all digits the same",
        (value) => {
          return !/^(.)\1*$/.test(value);
        }
      )
      .required("Phone number is required"),
      city: Yup.string()
      .matches(
        /^[A-Za-z ]*$/,
        "Please enter valid name do not use numbers & symbols"
      )
      .min(2)
      .max(40)
      .required("Please enter your city"),
    state: Yup.string().required("Select your state"),
    address: Yup.string()
    .min(12)
    .max(100)
    .matches(
      /^[a-zA-Z0-9\s,.'-]+$/,
      "Address can only contain letters, numbers, and common punctuation."
    )
    .required("Please enter your pickup address"),
  landmark: Yup.string()
    .min(5)
    .max(100)
    .matches(
      /^[a-zA-Z0-9\s,.'-]+$/,
      "Shop address can only contain letters, numbers, and common punctuation."
    )
    .required("Please enter your shop address"),
})