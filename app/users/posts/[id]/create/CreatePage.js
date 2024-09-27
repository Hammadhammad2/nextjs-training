import CreatePostsFrom from "../components/PostsForm";
import Breadcrumbs from "../../../../components/shared/Breadcrumbs";
import { createPostBreadcrumb } from "../../../../utils/helpers/dataHelper";

export default async function Page({ params }) {
  const userId = params?.id || null;
  const postId = params?.postId || null;

  return (
    <main>
      <Breadcrumbs breadcrumbs={createPostBreadcrumb(userId, postId)} />
      <CreatePostsFrom userId={userId} />
    </main>
  );
}
