"use client";
import { Formik } from "formik";
import { Button } from "../../../components/shared/Button";
import Link from "next/link";
import { initialValues, validationSchema } from "./helper";
import TextField from "../../../components/shared/TextField.js";
import { submitHandler } from "./helper";

export default function PostForm({ post, userId }) {
  return (
    <Formik
      initialValues={post || initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await submitHandler(post, values, resetForm, userId);
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className=" rounded-md bg-gray-50 p-4 md:p-6 ">
            <TextField
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Enter post title"
              error={errors.title}
              touched={touched.title}
            />
            <TextField
              label="Body"
              name="body"
              value={values.body}
              onChange={handleChange}
              placeholder="Enter post body"
              error={errors.body}
              touched={touched.body}
            />
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href={`/users/posts/${userId}`}
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 "
            >
              Cancel
            </Link>
            <Button type="submit">{post ? "Edit Post" : "Create Post"}</Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
