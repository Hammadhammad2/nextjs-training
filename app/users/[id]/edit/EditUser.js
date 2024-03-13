import { notFound } from "next/navigation";
import EditUserForm from "../../components/UserForm";
import { fetchUserById } from "../../../api/users";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";
import { urls } from "../../../utils/constants";

export const metadata = {
  title: "Edit User",
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
          { label: "Users", href: urls.USERS },
          {
            label: "Edit User",
            href: urls.USER_EDIT(id),
            active: true,
          },
        ]}
      />
      <EditUserForm user={user} />
    </main>
  );
}
