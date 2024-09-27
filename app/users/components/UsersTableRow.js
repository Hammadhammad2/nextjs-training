import { CITY, STREET } from "../constants";
import { UpdateUser } from "../buttons";
import UsersTableCell from "./UsersTableCell";
import DeleteUser from "./DeleteUser";

export default function TableRow({ user }) {
  const userLink = `/users/posts/${user?.id}`;

  return (
    <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <UsersTableCell link={userLink}>{user?.name}</UsersTableCell>
      <UsersTableCell link={userLink}>{user?.email}</UsersTableCell>
      <UsersTableCell link={userLink}>
        <div className="flex items-start flex-col">
          <div className="flex">
            <p className="font-semibold mr-2">{CITY}</p>
            <p>{user?.address?.city}</p>
          </div>
          <div className="flex">
            <p className="font-semibold mr-2">{STREET}</p>
            <p>{user?.address?.street}</p>
          </div>
        </div>
      </UsersTableCell>
      <UsersTableCell link={userLink}>{user?.phone}</UsersTableCell>
      <UsersTableCell link={userLink}>{user?.website}</UsersTableCell>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <UpdateUser id={user?.id} />
          <DeleteUser id={user?.id} />
        </div>
      </td>
    </tr>
  );
}
