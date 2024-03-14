"use client";
import { deleteUser } from "../../api/users";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteUser() {
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      onClick={handleDeleteUser}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-4" />
    </button>
  );
}
