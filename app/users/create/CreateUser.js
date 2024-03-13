import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { urls } from "../../utils/constants";
import CreateUserForm from "../components/UserForm";

export const metadata = {
  title: "Create User",
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: urls.USERS },
          {
            label: "Create User",
            href: urls.USER_CREATE,
            active: true,
          },
        ]}
      />
      <CreateUserForm />
    </main>
  );
}
