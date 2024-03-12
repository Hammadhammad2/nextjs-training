"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    console.log("Loading...");
  }, []);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Loading...</h2>
    </main>
  );
}
