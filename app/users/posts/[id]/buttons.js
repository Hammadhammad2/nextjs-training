import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deletePost } from "../../../api/posts";
import { urls } from "../../../utils/constants";
import { CREATE_POST } from "../../constants";

export function CreatePosts({ userId }) {
  return (
    <Link
      href={urls.USER_POSTS_CREATE(userId)}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{CREATE_POST}</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function EditPosts({ userId, postId }) {
  return (
    <Link
      href={urls.USER_POSTS_EDIT(userId, postId)}
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    >
      <PencilIcon className="h-5 " />
    </Link>
  );
}

export function DeletePosts({ userId, postId }) {
  const deleteInvoiceWithId = deletePost.bind(null, postId, userId);

  return (
    <form action={deleteInvoiceWithId}>
      <button className="flex h-10 items-center rounded-lg bg-red-500 px-3 text-sm font-medium text-white transition-colors hover:bg-red-400">
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
