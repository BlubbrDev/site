import { useState } from "react";
import ChevronDownIcon from "../icons/chevron_down";
import { Transition } from "@headlessui/react";
import Dropdown from "./dropdown/dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import { logEvent } from "../../util/GoogleAnalytics";

interface NavLinkProps {
  title: string;
  href?: string;
  isDropdown?: boolean;
}

/**
 * Defines the state and behavior of a link in the nav bar.
 */
export default function NavLink({
  title,
  href = "/",
  isDropdown = false,
}: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return isDropdown ? (
    <div className="relative">
      <button
        onClick={() => setIsActive(!isActive)}
        type="button"
        aria-expanded="false"
        className={
          "group bg-white rounded-md inline-flex items-center text-base font-light hover:text-gray-900 focus:outline-none focus:ring-indigo-500" +
          (isActive || (!isDropdown && router.pathname === href)
            ? " text-gray-900"
            : " text-gray-500")
        }
      >
        <span>{title}</span>
        <ChevronDownIcon
          isActive={isActive || (!isDropdown && router.pathname === href)}
        />
      </button>

      <Transition
        show={isActive}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transition-opacity duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-50"
      >
        <Dropdown />
      </Transition>
    </div>
  ) : (
    <Link href={href}>
      <a
        className={
          (router.pathname === href ? "text-gray-900" : "text-gray-500") +
          " text-base font-light hover:text-gray-900"
        }
          onClick={() => logEvent("NAVBAR", "Clicked on " + href, "LINK")}
      >
        {title}
      </a>
    </Link>
  );
}
