import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { createUserBreadcrumb } from "../../utils/helpers/dataHelper";
import CreateUserForm from "../components/UserForm";
import { CREATE_USER } from "../constants";

export const metadata = {
  title: CREATE_USER,
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs breadcrumbs={createUserBreadcrumb} />
      <CreateUserForm />
    </main>
  );
}
