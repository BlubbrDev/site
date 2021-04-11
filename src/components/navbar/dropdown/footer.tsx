import Link from "next/link";

interface FooterProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

export default function Footer({ title, href, icon }: FooterProps) {
  return (
    <div className="flow-root">
      <Link href={href}>
        <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
          {icon}
          <span className="ml-3">{title}</span>
        </a>
      </Link>
    </div>
  );
}
