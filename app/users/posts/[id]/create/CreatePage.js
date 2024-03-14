import CreatePostsFrom from "../components/PostsForm";
import Breadcrumbs from "../../../../components/shared/Breadcrumbs";
import { urls } from "../../../../utils/constants";
import { CREATE_POST } from "../../../constants";
import { USERS_POSTS } from "../../../constants";

export default async function Page({ params }) {
  const userId = params?.id || null;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: USERS_POSTS, href: urls.USER_POSTS(userId) },
          {
            label: CREATE_POST,
            href: urls.USER_POSTS_CREATE?.(1),
            active: true,
          },
        ]}
      />
      <CreatePostsFrom userId={userId} />
    </main>
  );
}
