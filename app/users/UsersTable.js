import Link from "next/link";
import { fetchUsers } from "../api/users";
import { DeleteUser, UpdateUser } from "./buttons";
import { formatPhoneNumber } from "./helper";
import {
  Address,
  City,
  Edit,
  Email,
  Name,
  NoUsersFound,
  Phone,
  Street,
  Website,
} from "./constants";

export default async function UsersTable({ query }) {
  const searchedUsers = await fetchUsers(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {searchedUsers?.map((user) => (
              <div
                key={user?.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{user?.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  <p>{user?.website}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{user?.company?.name}</p>
                    <p className="text-sm text-gray-500">
                      {user?.company?.catchPhrase}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user?.id} />
                    <DeleteUser id={user?.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  {Name}
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  {Email}
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  {Address}
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  {Phone}
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  {Website}
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">{Edit}</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {searchedUsers?.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-6">
                    {NoUsersFound}
                  </td>
                </tr>
              ) : (
                searchedUsers?.map((user) => (
                  <tr
                    key={user?.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <Link
                        href={`/users/posts/${user?.id} `}
                        className="w-full h-full"
                      >
                        <div className="flex items-center gap-3">
                          <p>{user?.name}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap py-3 pl-3">
                      <Link
                        href={`/users/posts/${user?.id} `}
                        className="w-full h-full"
                      >
                        <div className="flex items-center gap-3">
                          <p>{user?.email}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link
                        href={`/users/posts/${user?.id}`}
                        className="w-full h-full"
                      >
                        <div className="flex items-start flex-col">
                          <div className="flex">
                            <p className="font-semibold mr-2">{City}</p>
                            <p>{user?.address?.city}</p>
                          </div>
                          <div className="flex">
                            <p className="font-semibold mr-2">{Street}</p>
                            <p>{user?.address?.city}</p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link
                        href={`/users/posts/${user?.id}`}
                        className="w-full h-full"
                      >
                        <p>{user?.phone}</p>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link
                        href={`/users/posts/${user?.id}`}
                        className="w-full h-full"
                      >
                        <p>{user?.website}</p>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <UpdateUser id={user?.id} />
                        <DeleteUser id={user?.id} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
