// TableBody.js
import UsersTableRow from "./UsersTableRow";
import { NO_USERS_FOUND } from "../constants";

export default function UsersTableBody({ users }) {
  return (
    <tbody className="bg-white">
      {users?.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center py-6">
            {NO_USERS_FOUND}
          </td>
        </tr>
      ) : (
        users?.map((user) => <UsersTableRow key={user.id} user={user} />)
      )}
    </tbody>
  );
}
