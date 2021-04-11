import { useState } from "react";
import ChartBarIcon from "../icons/chart_bar";
import PhoneIcon from "../icons/phone";
import PlayIcon from "../icons/play";
import ShieldCheckIcon from "../icons/shield_check";
import ViewGridIcon from "../icons/view_grid";
import ChevronDownIcon from "../icons/chevron_down";
import CursorClickIcon from "../icons/cursor_click";
import RefreshIcon from "../icons/refresh";
import NavDropdownItem from "./dropdown/item";
import NavDropdownFooter from "./dropdown/footer";

interface NavLinkProps {
  title: string;
}

/**
 * Defines the state and behavior of a link in the nav bar.
 */
export default function NavLink({ title }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  return (
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

      {/* <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          --> */}
      <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <NavDropdownItem
              title="Analytics"
              href="/"
              body="Get a better understanding of where your traffic is coming from."
              icon={<ChartBarIcon />}
            />
            <NavDropdownItem
              title="Engagement"
              href="/"
              body="Speak directly to your customers in a more meaningful way."
              icon={<CursorClickIcon />}
            />
            <NavDropdownItem
              title="Security"
              href="/"
              body="Your customers&#039; data will be safe and secure."
              icon={<ShieldCheckIcon />}
            />
            <NavDropdownItem
              title="Integrations"
              href="/"
              body="Connect with third-party tools that you&#039;re already using."
              icon={<ViewGridIcon />}
            />
            <NavDropdownItem
              title="Automations"
              href="/"
              body="Build strategic funnels that will drive your customers to convert"
              icon={<RefreshIcon />}
            />
          </div>
          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
            <NavDropdownFooter
              title="Watch Demo"
              href="/"
              icon={<PlayIcon />}
            />

            <NavDropdownFooter
              title="Contact Sales"
              href="/"
              icon={<PhoneIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
