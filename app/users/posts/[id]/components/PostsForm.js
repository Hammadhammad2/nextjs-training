"use client";
import { Formik } from "formik";
import { Button } from "../../../../components/shared/Button.js";
import Link from "next/link";
import TextField from "../../../../components/shared/TextField.js";
import { editPost, createPost } from "../../../../api/posts.js";
import PostValidationSchema from "../../../../utils/helpers/ValidationHelper/PostValidationSchema/index.js";
import { generateInitialValues } from "../../../../utils/index.js";
import { createPostFormData } from "../../../../utils/helpers/DataHelper/index.js";
import { urls } from "../../../../utils/constants/index.js";

export default function PostForm({ post, userId }) {
  return (
    <Formik
      initialValues={post || generateInitialValues(createPostFormData)}
      validationSchema={PostValidationSchema.createPost()}
      onSubmit={async (values, { resetForm }) => {
        try {
          if (post) {
            await editPost(post.id, values);
          } else {
            await createPost({ ...values, userId });
          }
          resetForm();
        } catch (e) {
          console.error(e);
        }
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className=" rounded-md bg-gray-50 p-4 md:p-6 ">
            {createPostFormData?.map((config, index) => (
              <div key={index}>
                <TextField
                  label={config.label}
                  name={config.name}
                  value={values[config.name]}
                  onChange={handleChange}
                  placeholder={config.placeholder}
                  error={errors[config.name]}
                  touched={touched[config.name]}
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href={urls.USER_POSTS(userId)}
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
