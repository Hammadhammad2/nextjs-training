import Link from "next/link";
import Card from "../../../components/shared/Card";
import { delay } from "../../../utils";

export default async function Active() {
  delay(5000);
  return (
    <div>
      <Card className="bg-pink-700">
        <h1>Active</h1>
        <Link href="/dashboard">Teams</Link>
      </Card>
    </div>
  );
}
