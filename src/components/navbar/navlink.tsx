import { useState } from "react";
import ChartBarIcon from "../icons/chart_bar";
import ChevronDownIcon from "../icons/chevron_down";
import CursorClickIcon from "../icons/cursor_click";
import NavDropdownItem from "./nav_dropdown_item";

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

            <a
              href="#"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              {/* <!-- Heroicon name: outline/shield-check --> */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">Security</p>
                <p className="mt-1 text-sm text-gray-500">
                  Your customers&#039; data will be safe and secure.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              {/* <!-- Heroicon name: outline/view-grid --> */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Integrations
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Connect with third-party tools that you&#039;re already using.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              {/* <!-- Heroicon name: outline/refresh --> */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">
                  Automations
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Build strategic funnels that will drive your customers to
                  convert
                </p>
              </div>
            </a>
          </div>
          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
            <div className="flow-root">
              <a
                href="#"
                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                {/* <!-- Heroicon name: outline/play --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3">Watch Demo</span>
              </a>
            </div>

            <div className="flow-root">
              <a
                href="#"
                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                {/* <!-- Heroicon name: outline/phone --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="ml-3">Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
