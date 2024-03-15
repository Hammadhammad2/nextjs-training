"use client";
import { useFormik } from "formik";
import { getIn } from "formik";
import { Button } from "../../components/shared/Button";
import Link from "next/link";
import { createUser, editUser } from "../../api/users";
import TextField from "../../components/shared/TextField";
import UserValidationSchema from "../../utils/helpers/validationHelper/userValidationSchemaHelper";
import { createUserFormData } from "../../utils/helpers/dataHelper";
import { generateInitialValues } from "../../utils";
import { CANCEL } from "../../utils/constants/genericConstants";
import { USERS } from "../../utils/constants/urlConstants";
import { CREATE_USER, EDIT_USER } from "../constants";
import { useRouter } from "next/navigation";

export default function UserForm({ user }) {
  const router = useRouter();

  const initialValues = user || generateInitialValues(createUserFormData);

  const onSubmit = async (values, { resetForm }) => {
    try {
      if (user) await editUser(user.id, values);
      else await createUser(values);
      resetForm();
      router.push(USERS);
    } catch (e) {
      console.error(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: UserValidationSchema.createUser(),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {createUserFormData?.map((config, index) => (
          <div key={index}>
            <TextField
              label={config.label}
              name={config.name}
              value={getIn(formik.values, config.name)}
              onChange={formik.handleChange}
              placeholder={config.placeholder}
              error={getIn(formik.errors, config.name)}
              touched={getIn(formik.touched, config.name)}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={USERS}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 "
        >
          {CANCEL}
        </Link>
        <Button type="submit">{user ? EDIT_USER : CREATE_USER}</Button>
      </div>
    </form>
  );
}
