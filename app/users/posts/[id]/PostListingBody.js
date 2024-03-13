"use client";

import { useState } from "react";
import CommentsModal from "./CommentsModal";

export default function PostListingBody({ post, postId }) {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div
        onClick={() => {
          setOpenModal(true);
        }}
        className="cursor-pointer "
      >
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 text-sm">{post.body}</p>
      </div>

      <CommentsModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        postId={postId}
      />
    </>
  );
}
