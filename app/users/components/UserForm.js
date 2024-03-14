"use client";
import { Formik } from "formik";
import { getIn } from "formik";
import { Button } from "../../components/shared/Button";
import Link from "next/link";
import { createUser, editUser } from "../../api/users";
import TextField from "../../components/shared/TextField";
import UserValidationSchema from "../../utils/helpers/ValidationHelper/UserValidationSchemaHelper";
import { createUserFormData } from "../../utils/helpers/DataHelper";
import { generateInitialValues } from "../../utils";
import { CANCEL, urls } from "../../utils/constants";
import { CREATE_USER, EDIT_USER } from "../constants";

export default function UserForm({ user }) {
  return (
    <Formik
      initialValues={user || generateInitialValues(createUserFormData)}
      validationSchema={UserValidationSchema.createUser()}
      onSubmit={async (values, { resetForm }) => {
        try {
          if (user) {
            await editUser(user.id, values);
          } else {
            await createUser(values);
          }
          resetForm();
        } catch (e) {
          console.error(e);
        }
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="rounded-md bg-gray-50 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {createUserFormData?.map((config, index) => (
              <div key={index}>
                <TextField
                  label={config.label}
                  name={config.name}
                  value={getIn(values, config.name)}
                  onChange={handleChange}
                  placeholder={config.placeholder}
                  error={getIn(errors, config.name)}
                  touched={getIn(touched, config.name)}
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href={urls.USERS}
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 "
            >
              {CANCEL}
            </Link>
            <Button type="submit">{user ? EDIT_USER : CREATE_USER}</Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
