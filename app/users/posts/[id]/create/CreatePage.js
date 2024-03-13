import CreatePostsFrom from "../components/PostsForm";
import Breadcrumbs from "../../../../components/shared/Breadcrumbs";
import { urls } from "../../../../utils/constants";

export default async function Page({ params }) {
  const userId = params?.id || null;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users / Posts", href: urls.USER_POSTS(userId) },
          {
            label: "Create Post",
            href: urls.USER_POSTS_CREATE?.(1),
            active: true,
          },
        ]}
      />
      <CreatePostsFrom userId={userId} />
    </main>
  );
}
