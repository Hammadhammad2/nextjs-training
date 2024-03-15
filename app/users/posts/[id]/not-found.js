import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { USERS } from "../../../utils/constants/urlConstants";
import {
  COULD_NOT_FIND,
  GO_BACK,
  NOT_FOUND,
} from "../../../utils/constants/genericConstants";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">{NOT_FOUND}</h2>
      <p>{COULD_NOT_FIND}</p>
      <Link
        href={USERS}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        {GO_BACK}
      </Link>
    </main>
  );
}
