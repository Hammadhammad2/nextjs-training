import { notFound } from "next/navigation";
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
