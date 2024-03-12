import Breadcrumbs from "../../components/shared/Breadcrumbs";
import CreateUserForm from "../UserForm";

export const metadata = {
  title: "Create User",
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/users" },
          {
            label: "Create User",
            href: "/users/create",
            active: true,
          },
        ]}
      />
      <CreateUserForm />
    </main>
  );
}
