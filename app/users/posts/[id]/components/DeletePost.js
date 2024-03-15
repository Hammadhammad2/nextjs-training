"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "../../../../api/posts";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeletePost({ postId, userId }) {
  const router = useRouter();
  const handleDeletePosts = async () => {
    try {
      await deletePost(postId);
      router.push(`/users/posts/${userId}?page=1`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button
      className="flex h-10 items-center rounded-lg bg-red-500 px-3 text-sm font-medium text-white transition-colors hover:bg-red-400"
      onClick={handleDeletePosts}
    >
      <TrashIcon className="w-4" />
    </button>
  );
}
