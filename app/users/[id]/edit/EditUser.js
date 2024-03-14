import { notFound } from "next/navigation";
import EditUserForm from "../../components/UserForm";
import { fetchUserById } from "../../../api/users";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";
import { urls } from "../../../utils/constants";
import { EDIT_USER, USERS } from "../../constants";

export const metadata = {
  title: EDIT_USER,
};

export default async function Page({ params }) {
  const id = params.id;
  const user = await fetchUserById(id);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: USERS, href: urls.USERS },
          {
            label: EDIT_USER,
            href: urls.USER_EDIT(id),
            active: true,
          },
        ]}
      />
      <EditUserForm user={user} />
    </main>
  );
}
