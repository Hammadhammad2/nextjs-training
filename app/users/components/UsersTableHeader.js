import { ADDRESS, NAME, EMAIL, PHONE, WEBSITE, EDIT } from "../constants";

const tableHeaders = [
  { label: NAME },
  { label: EMAIL },
  { label: ADDRESS },
  { label: PHONE },
  { label: WEBSITE },
  { label: EDIT, hidden: true },
];

export default function UsersTableHeader() {
  return (
    <thead className="rounded-lg text-left text-sm font-normal">
      <tr>
        {tableHeaders.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-6 py-5 font-medium ${
              index === tableHeaders.length - 1 ? "relative" : ""
            } ${header.hidden ? "sr-only" : ""}`}
          >
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
