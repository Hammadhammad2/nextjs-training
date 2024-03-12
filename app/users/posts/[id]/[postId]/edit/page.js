// import { fetchCustomers, fetchUserById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../../../components/shared/Breadcrumbs";
import { fetchPostById } from "../../../../../api/posts";
import EditPostForm from "../../PostsForm";

export const metadata = {
  title: "Edit Posts",
};

export default async function Page({ params }) {
  const userId = params?.id || null;
  const postId = params?.postId || null;

  const post = await fetchPostById(postId);

  if (!post || !userId) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Posts ", href: `/users/posts/${userId}` },
          {
            label: "Edit Post",
            href: `/users/${userId}/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <EditPostForm post={post} userId={userId} />
    </main>
  );
}
