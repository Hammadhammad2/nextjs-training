"use client";
import { Formik } from "formik";
import { Button } from "../components/shared/Button";
import Link from "next/link";
import {
  initialValuesCreateUser,
  submitHandler,
  validationSchemaCreateUser,
} from "./helper";
import { createUser, editUser } from "../api/users";
import TextField from "../components/shared/TextField";

export default function UserForm({ user }) {
  return (
    <Formik
      initialValues={user || initialValuesCreateUser}
      validationSchema={validationSchemaCreateUser}
      onSubmit={async (values, { resetForm }) => {
        await submitHandler(user, values, resetForm);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className=" rounded-md bg-gray-50 p-4 md:p-6 grid grid-cols-2 gap-2 ">
            <div>
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter your name"
                error={errors.name}
                touched={touched.name}
              />
              <TextField
                label="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                error={errors.phone}
                touched={touched.phone}
              />
              <TextField
                label="Street"
                name="address.street"
                value={values.address.street}
                onChange={handleChange}
                placeholder="Enter your street"
                error={errors.address?.street}
                touched={touched.address?.street}
              />
            </div>
            <div>
              <TextField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your email"
                error={errors.email}
                touched={touched.email}
              />
              <TextField
                label="City"
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
                placeholder="Enter your city"
                error={errors.address?.city}
                touched={touched.address?.city}
              />
              <TextField
                label="Website"
                name="website"
                value={values.website}
                onChange={handleChange}
                placeholder="Enter your website"
                error={errors.website}
                touched={touched.website}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/users"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 "
            >
              Cancel
            </Link>
            <Button type="submit">{user ? "Edit User" : "Create User"}</Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
