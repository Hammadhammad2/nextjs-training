// import { fetchCustomers, fetchUserById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../../../components/shared/Breadcrumbs";
import { fetchPostById } from "../../../../../api/posts";
import EditPostForm from "../../PostsForm";
import { fetchCommentsByPostId } from "../../../../../api/comments";
import CommentsModal from "./CommentsModal";
export const metadata = {
  title: "Comments",
};

export default async function Page({ params, searchParams }) {
  const userId = params?.id || null;
  const postId = params?.postId || null;
  const openModal = searchParams?.modal || false;

  const comments = await fetchCommentsByPostId(postId);

  if (!comments || !userId) {
    notFound();
  }

  return (
    <CommentsModal comments={comments} openModal={openModal} userId={userId} />
  );
}
