import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { urls } from "../../utils/constants";
import CreateUserForm from "../components/UserForm";
import { CREATE_USER, USERS } from "../constants";

export const metadata = {
  title: CREATE_USER,
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: USERS, href: urls.USERS },
          {
            label: CREATE_USER,
            href: urls.USER_CREATE,
            active: true,
          },
        ]}
      />
      <CreateUserForm />
    </main>
  );
}
