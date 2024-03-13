"use client";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TailSpin } from "react-loader-spinner";
import { fetchCommentsByPostId } from "../../../../api/comments";

export default function CommentsModal({ handleCloseModal, openModal, postId }) {
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        setLoading(true);
        const response = await fetchCommentsByPostId(postId);
        setCommentsData(response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    if (openModal) fetchCommentsData();
  }, [openModal]);

  const handleClose = () => {
    setCommentsData([]);
    handleCloseModal();
  };

  return (
    <Modal
      open={openModal}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="bg-white p-4 rounded-lg max-w-[40%] min-w-[40%] ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Comments</h2>
          <button
            onClick={handleClose}
            className="rounded-md border p-2 hover:bg-gray-100"
          >
            <XMarkIcon className="h-5" />
          </button>
        </div>
        <ul className="w-full h-96 overflow-y-auto">
          {loading && (
            <div className="w-full h-full flex items-center justify-center">
              <TailSpin color="blue" height={50} width={50} />
            </div>
          )}
          {commentsData?.map((comment) => (
            <li key={comment.id} className="mb-4">
              <h3 className="text-sm font-bold">{comment.name}</h3>
              <p className="text-gray-700 text-sm">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
