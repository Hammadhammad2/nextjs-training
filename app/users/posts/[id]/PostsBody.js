"use client";
import CommentsModal from "./[postId]/comments/CommentsModal";

export default function PostsBody({ post }) {
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 text-sm">{post.body}</p>
      </div>
      <CommentsModal postId={post.id} />
    </>
  );
}
