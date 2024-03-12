import CreatePostsFrom from "../PostsForm";
import Breadcrumbs from "../../../../components/shared/Breadcrumbs";

export default async function Page({ params }) {
  const userId = params?.id || null;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users / Posts", href: `/users/posts/${userId}` },
          {
            label: "Create Post",
            href: "/users/posts/create",
            active: true,
          },
        ]}
      />
      <CreatePostsFrom userId={userId} />
    </main>
  );
}
