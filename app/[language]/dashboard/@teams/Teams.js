import Link from "next/link";
import Card from "../../../components/shared/Card";
import { delay } from "../../../utils";

export default async function Teams() {
  await delay(2000);
  return (
    <div>
      <Card className="bg-teal-600">
        <h1>Teams</h1>
        <Link href="/dashboard/active">Active</Link>
      </Card>
    </div>
  );
}
