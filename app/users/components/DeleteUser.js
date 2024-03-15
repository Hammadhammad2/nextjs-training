"use client";
import { useRouter } from "next/navigation";
import { deleteUser } from "../../api/users";
import { TrashIcon } from "@heroicons/react/24/outline";
import { USER_PAGE_1 } from "../../utils/constants/urlConstants";

export default function DeleteUser() {
  const router = useRouter();
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      router.push(USER_PAGE_1);
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
