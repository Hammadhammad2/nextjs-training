import { lusitana } from "../components/fonts";
import { SEARCH_USERS, USERS } from "./constants";
import Search from "../components/shared/Search";
import UsersTable from "./components/UsersTable";
import { CreateUsers } from "./buttons";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../components/shared/Skeletons";

export const metadata = {
  title: USERS,
};

export default function Page({ searchParams }) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>{USERS}</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder={SEARCH_USERS} />
        <CreateUsers />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <UsersTable query={query} />
      </Suspense>
    </div>
  );
}
