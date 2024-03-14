import { notFound } from "next/navigation";
import Breadcrumbs from "../../../../../components/shared/Breadcrumbs";
import { fetchPostById } from "../../../../../api/posts";
import EditPostForm from "../../components/PostsForm";
import { urls } from "../../../../../utils/constants";
import { EDIT_POST, POSTS } from "../../../../constants";

export const metadata = {
  title: EDIT_POST,
};

export default async function Page({ params }) {
  const userId = params?.id || null;
  const postId = params?.postId || null;

  let post = null;

  try {
    post = await fetchPostById(postId);
  } catch (e) {
    console.error(e);
  }

  if (!post || !userId) notFound();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: POSTS, href: urls.USER_POSTS(userId) },
          {
            label: EDIT_POST,
            href: urls.USER_POSTS_EDIT(userId, postId),
            active: true,
          },
        ]}
      />
      <EditPostForm post={post} userId={userId} />
    </main>
  );
}
