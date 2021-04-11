import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
  primary?: boolean;
}

/**
 * A basic button for the website.
 *
 * @param title - the text of the button
 * @param href - the link to go
 * @param primary - whether the button is a primary button
 */
export default function Button({ title, href, primary = false }: ButtonProps) {
  const baseClass =
    "whitespace-nowrap text-base font-medium px-4 py-2 rounded-md ml-8 inline-flex items-center justify-center border border-transparent";
  const styleClass = primary
    ? " shadow-sm text-white bg-blue-dark hover:bg-blue-darker"
    : " text-gray-500 hover:text-gray-900 hover:bg-gray-100";
  return (
    <Link href={href}>
      <a className={baseClass + styleClass}>{title}</a>
    </Link>
  );
}
