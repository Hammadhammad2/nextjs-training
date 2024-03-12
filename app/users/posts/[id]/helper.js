import { createPost, editPost } from "../../../api/posts.js";
import * as Yup from "yup";

export async function submitHandler(post, values, resetForm, userId) {
  if (post) {
    await editPost(post.id, values, userId);
  } else {
    await createPost(values, userId);
  }
  //   resetForm();
}

export const initialValues = {
  title: "",
  body: "",
};

export const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),
  body: Yup.string()
    .required("Body is required")
    .min(3, "Body must be at least 3 characters")
    .max(1000, "Body must be at most 1000 characters"),
});
