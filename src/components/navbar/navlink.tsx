import { useState } from "react";
import ChevronDownIcon from "../icons/chevron_down";
import { Transition } from "@headlessui/react";
import Dropdown from "./dropdown/dropdown";
import Link from "next/link";

interface NavLinkProps {
  title: string;
  isDropdown?: boolean;
}

/**
 * Defines the state and behavior of a link in the nav bar.
 */
export default function NavLink({ title, isDropdown = false }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  return isDropdown ? (
    <div className="relative">
      <button
        onClick={() => setIsActive(!isActive)}
        type="button"
        aria-expanded="false"
        className={
          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-indigo-500" +
          (isActive ? " text-gray-900" : " text-gray-500")
        }
      >
        <span>{title}</span>
        <ChevronDownIcon isActive={isActive} />
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
    <Link href="/">
      <a className="text-base font-medium text-gray-500 hover:text-gray-900">
        {title}
      </a>
    </Link>
  );
}
