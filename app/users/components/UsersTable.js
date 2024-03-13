import { fetchUsers } from "../../api/users";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableBody from "./UsersTableBody";

export default async function UsersTable({ query }) {
  let searchedUsers = [];

  try {
    searchedUsers = await fetchUsers(query);
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <UsersTableHeader />
            <UsersTableBody users={searchedUsers} />
          </table>
        </div>
      </div>
    </div>
  );
}
