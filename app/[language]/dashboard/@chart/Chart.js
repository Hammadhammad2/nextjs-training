import Card from "../../../components/shared/Card";
import { delay } from "../../../utils";

export default async function Chart() {
  await delay(10000);
  return (
    <div>
      <Card className="bg-blue-700">
        <h1>Chart</h1>
      </Card>
    </div>
  );
}
