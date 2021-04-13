import Link from "next/link";

interface MenuLinkProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

export default function MenuItem({ title, href, icon }: MenuLinkProps) {
  return (
    <Link href={href}>
      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        {icon}
        <span className="ml-3 text-base font-medium text-gray-900">
          {title}
        </span>
      </a>
    </Link>
  );
}
