import Link from "next/link";

interface MenuLinkProps {
  title: string;
  href: string;
}

export default function MenuLink({ title, href }: MenuLinkProps) {
  return (
    <Link href={href}>
      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
        {title}
      </a>
    </Link>
  );
}
