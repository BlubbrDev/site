import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
  primary: boolean;
}

/**
 * A basic button for the website.
 *
 * @param title - the text of the button
 * @param href - the link to go
 * @param primary - whether the button is a primary button
 */
export default function Button({ title, href, primary }: ButtonProps) {
  const baseClass = "whitespace-nowrap text-base font-medium ";
  const styleClass = primary
    ? "ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
    : "text-gray-500 hover:text-gray-900";
  return (
    <Link href={href}>
      <a className={baseClass + styleClass}>{title}</a>
    </Link>
  );
}
