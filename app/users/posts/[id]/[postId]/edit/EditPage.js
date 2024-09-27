import { notFound } from "next/navigation";
import Breadcrumbs from "../../../../../components/shared/Breadcrumbs";
import { fetchPostById } from "../../../../../api/posts";
import EditPostForm from "../../components/PostsForm";
import { EDIT_POST } from "../../../../constants";
import { editPostBreadcrumb } from "../../../../../utils/helpers/dataHelper";

export const metadata = {
  title: EDIT_POST,
};

export default async function Page({ params }) {
  const userId = params?.id || null;
  const postId = params?.postId || null;

  let post = null;

  try {
    const { data } = await fetchPostById(postId);
    post = data;
  } catch (e) {
    console.error(e);
  }

  if (!post || !userId) notFound();

  return (
    <main>
      <Breadcrumbs breadcrumbs={editPostBreadcrumb(userId, post?.id)} />
      <EditPostForm post={post} userId={userId} />
    </main>
  );
}
