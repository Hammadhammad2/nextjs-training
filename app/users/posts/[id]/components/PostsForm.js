"use client";
import { useFormik } from "formik";
import { Button } from "../../../../components/shared/Button.js";
import Link from "next/link";
import TextField from "../../../../components/shared/TextField.js";
import { editPost, createPost } from "../../../../api/posts.js";
import PostValidationSchema from "../../../../utils/helpers/validationHelper/postValidationSchema/index.js";
import { generateInitialValues } from "../../../../utils/index.js";
import { createPostFormData } from "../../../../utils/helpers/dataHelper/index.js";
import { CANCEL } from "../../../../utils/constants/genericConstants";
import { USER_POSTS } from "../../../../utils/constants/urlConstants.js";
import { useRouter } from "next/navigation";

export default function PostForm({ post, userId }) {
  const router = useRouter();

  const initialValues = post || generateInitialValues(createPostFormData);

  const onSubmit = async (values, { resetForm }) => {
    try {
      if (post) await editPost(post.id, values);
      else await createPost({ ...values, userId });
      router.push(USER_POSTS(userId));
      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: PostValidationSchema.createPost(),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" rounded-md bg-gray-50 p-4 md:p-6 ">
        {createPostFormData?.map((config, index) => (
          <div key={index}>
            <TextField
              label={config.label}
              name={config.name}
              value={formik.values[config.name]}
              onChange={formik.handleChange}
              placeholder={config.placeholder}
              error={formik.errors[config.name]}
              touched={formik.touched[config.name]}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={USER_POSTS(userId)}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 "
        >
          {CANCEL}
        </Link>
        <Button type="submit">{post ? "Edit Post" : "Create Post"}</Button>
      </div>
    </form>
  );
}
