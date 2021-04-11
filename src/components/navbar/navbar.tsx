import { Transition } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

import Logo from "../../components/navbar/logo";
import Menu from "../../components/navbar/menu";
import Button from "../../components/elements/button";
import MenuItem from "./mobile/menuitem";
import MenuLink from "./mobile/menulink";
import NavLink from "../../components/navbar/navlink";
import CloseIcon from "../../components/icons/close";
import DiscordIcon from "../../components/icons/discord";
import ChartBar from "../../components/icons/chart_bar";
import CursorClick from "../../components/icons/cursor_click";
import Refresh from "../../components/icons/refresh";
import ViewGrid from "../../components/icons/view_grid";
import ShieldCheck from "../../components/icons/shield_check";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white top-0 sticky shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Menu onClick={() => setShowMenu(!showMenu)} />
          </div>
          <div className="hidden md:flex items-center justify-end space-x-10 md:flex-1 lg:w-0">
            <NavLink title="What is a SPAC" href="/spacs" />
            <NavLink title="Pricing" />
            <NavLink title="Solutions" isDropdown={true} />
            <NavLink title="Newsletter" />
            <Link href="/discord">
              <DiscordIcon />
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <MenuItem title="Analytics" href="/" icon={<ChartBar />} />
                  <MenuItem
                    title="Engagement"
                    href="/"
                    icon={<CursorClick />}
                  />
                  <MenuItem title="Security" href="/" icon={<ShieldCheck />} />
                  <MenuItem title="Integrations" href="/" icon={<ViewGrid />} />
                  <MenuItem title="Automations" href="/" icon={<Refresh />} />
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <MenuLink title="Pricing" href="/" />
                <MenuLink title="Docs" href="/" />
                <MenuLink title="Help Center" href="/" />
                <MenuLink title="Guides" href="/" />
                <MenuLink title="Events" href="/" />
                <MenuLink title="Security" href="/" />
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-dark hover:bg-blue-darker"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-blue-dark hover:text-blue-darker">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
