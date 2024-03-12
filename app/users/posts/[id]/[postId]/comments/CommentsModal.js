"use client";
import Modal from "@mui/material/Modal";
import { OnCloseModal } from "../../buttons";

export default function CommentsModal({ comments, openModal, userId }) {
  return (
    <Modal
      open={Boolean(openModal)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="bg-white p-4 rounded-lg max-w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Comments</h2>
          <OnCloseModal userId={userId} />
        </div>
        <ul>
          {comments.map((comment) => (
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
