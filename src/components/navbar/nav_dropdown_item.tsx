import Link from "next/link";

interface NavDropdownItemProps {
  title: string;
  body: string;
  href: string;
  icon: JSX.Element;
}

export default function NavDropdownItem({ title, body, href, icon }) {
  return (
    <Link href={href}>
      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
        {icon}
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm text-gray-500">{body}</p>
        </div>
      </a>
    </Link>
  );
}
