import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { USER_CREATE, USER_EDIT } from "../utils/constants/urlConstants";
import { CREATE_USER } from "./constants";

export function CreateUsers() {
  return (
    <Link
      href={USER_CREATE}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{CREATE_USER}</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateUser({ id }) {
  return (
    <Link
      href={USER_EDIT(id)}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-4" />
    </Link>
  );
}
