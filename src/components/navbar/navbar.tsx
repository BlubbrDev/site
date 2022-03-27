import { Transition } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

import Logo from "../elements/logo";
import Menu from "../../components/navbar/menu";
import MenuLink from "./mobile/menulink";
import NavLink from "../../components/navbar/navlink";
import CloseIcon from "../../components/icons/close";
import DiscordIcon from "../../components/icons/discord";
import { logEvent } from "../../util/GoogleAnalytics";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white top-0 sticky shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Menu onClick={() => setShowMenu(!showMenu)} />
          </div>
          <div className="hidden md:flex items-center justify-end space-x-10 md:flex-1 lg:w-0">
            <NavLink title="About" href="/spacs" />
            <NavLink title="Pricing" href="/#pricing" />
            <NavLink title="Solutions" href="/#bots" />
            <Link href="/discord">
              <a
                className="fill-current text-gray-500 hover:text-gray-800"
                onClick={() =>
                  logEvent("NAVBAR", "Clicked on discord icon", "LINK")
                }
              >
                <DiscordIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        show={showMenu}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setShowMenu(!showMenu)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div
                className="grid grid-cols-2 gap-y-4 gap-x-8"
                onClick={() => setShowMenu(!showMenu)}
              >
                <MenuLink title="About" href="/spacs" />
                <MenuLink title="Pricing" href="/#pricing" />
                <MenuLink title="Solutions" href="/#bots" />
                <MenuLink title="Discord" href="/discord" />
              </div>
              <div>
                <a
                  onClick={() => setShowMenu(!showMenu)}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-light text-white bg-blue-dark hover:bg-blue-darker"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
