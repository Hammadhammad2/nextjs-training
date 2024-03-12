import { notFound } from "next/navigation";
import EditUserForm from "../../UserForm";
import { fetchUserById } from "../../../api/users";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";

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
          { label: "Users", href: "/users" },
          {
            label: "Edit User",
            href: `/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditUserForm user={user} />
    </main>
  );
}
