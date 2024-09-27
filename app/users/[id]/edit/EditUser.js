import { notFound } from "next/navigation";
import EditUserForm from "../../components/UserForm";
import { fetchUserById } from "../../../api/users";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";
import { EDIT_USER } from "../../constants";
import { editUserBreadcrumb } from "../../../utils/helpers/dataHelper";

export const metadata = {
  title: EDIT_USER,
};

export default async function Page({ params }) {
  const id = params.id;
  const { data: user } = await fetchUserById(id);

  if (!user) notFound();

  return (
    <main>
      <Breadcrumbs breadcrumbs={editUserBreadcrumb(id)} />
      <EditUserForm user={user} />
    </main>
  );
}
