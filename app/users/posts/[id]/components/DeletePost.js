"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "../../../../api/posts";
import { TrashIcon } from "@heroicons/react/24/outline";
import { USER_POSTS_PAGE_1 } from "../../../../utils/constants/urlConstants";

export default function DeletePost({ postId, userId }) {
  const router = useRouter();
  const handleDeletePosts = async () => {
    try {
      await deletePost(postId);
      router.push(USER_POSTS_PAGE_1(userId));
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
