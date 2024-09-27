import Link from "next/link";

export default function TableCell({ link, children }) {
  return (
    <td className="whitespace-nowrap py-3 pl-6 pr-3">
      <Link href={link} className="w-full h-full">
        {children}
      </Link>
    </td>
  );
}
