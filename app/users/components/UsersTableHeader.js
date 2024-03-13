import { Address, Name, Email, Phone, Website, Edit } from "../constants";

const tableHeaders = [
  { label: Name },
  { label: Email },
  { label: Address },
  { label: Phone },
  { label: Website },
  { label: Edit, hidden: true },
];

export default function UsersTableHeader() {
  return (
    <thead className="rounded-lg text-left text-sm font-normal">
      <tr>
        {tableHeaders.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-3 py-5 font-medium ${
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
