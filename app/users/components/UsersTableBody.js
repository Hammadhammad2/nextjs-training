// TableBody.js
import UsersTableRow from "./UsersTableRow";
import { NoUsersFound } from "../constants";

export default function UsersTableBody({ users }) {
  return (
    <tbody className="bg-white">
      {users?.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center py-6">
            {NoUsersFound}
          </td>
        </tr>
      ) : (
        users?.map((user) => <UsersTableRow key={user.id} user={user} />)
      )}
    </tbody>
  );
}
