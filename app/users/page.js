import { lusitana } from "../components/fonts";
import { Users } from "./constants";
import Search from "../components/shared/Search";
import UsersTable from "./UsersTable";
import { CreateUsers } from "./buttons";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../components/shared/Skeletons";

export const metadata = {
  title: "Users",
};

export default function Page({ searchParams }) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>{Users}</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search users..." />
        <CreateUsers />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <UsersTable query={query} />
      </Suspense>
    </div>
  );
}
