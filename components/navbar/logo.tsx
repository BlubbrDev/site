import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <span className="sr-only">Blubbr</span>
        <img
          className="h-8 w-auto sm:h-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Blubbr"
        />
      </a>
    </Link>
  );
}
