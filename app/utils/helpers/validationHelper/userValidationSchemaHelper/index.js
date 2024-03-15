import * as Yup from "yup";

class UserValidationSchema {
  static createUser() {
    return Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(30, "Name must not exceed 30 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .max(50, "Email must not exceed 50 characters")
        .min(5, "Email must be at least 5 characters")
        .required("Email is required"),
      address: Yup.object().shape({
        city: Yup.string()
          .required("City is required")
          .min(3, "City must be at least 3 characters")
          .max(30, "City must not exceed 30 characters"),
        street: Yup.string()
          .required("Street is required")
          .min(3, "Street must be at least 3 characters")
          .max(30, "Street must not exceed 30 characters"),
      }),
      phone: Yup.string()
        .required("Phone number is required")
        .min(11, "Invalid phone number")
        .max(30, "Invalid phone number"),
      website: Yup.string()
        .required("Website is required")
        .max(50, "Website must not exceed 50 characters")
        .min(5, "Website must be at least 5 characters"),
    });
  }
}

export default UserValidationSchema;
