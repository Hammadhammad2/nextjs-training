"use client";

import { useEffect } from "react";
import { SOMETHING_WENT_WRONG, TRY_AGAIN } from "../../utils/constants";
export default function CustomError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{SOMETHING_WENT_WRONG}</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={reset}
      >
        {TRY_AGAIN}
      </button>
    </main>
  );
}
