import Logo from "../elements/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
      <div className="container py-6">
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <Logo></Logo>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link href="/spacs">
                <a className="px-4 text-sm font-light text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                  About
                </a>
              </Link>
              <Link href="#bots">
                <a className="px-4 text-sm font-light text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                  Bots
                </a>
              </Link>
              <Link href="/discord">
                <a className="px-4 text-sm font-light text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                  Discord
                </a>
              </Link>
              <Link href="#newsletter">
                <a className="px-4 text-sm font-light text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline">
                  Newsletter
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
