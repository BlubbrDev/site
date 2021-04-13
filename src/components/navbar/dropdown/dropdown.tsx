import ChartBarIcon from "../../icons/chart_bar";
import PhoneIcon from "../../icons/phone";
import PlayIcon from "../../icons/play";
import ShieldCheckIcon from "../../icons/shield_check";
import ViewGridIcon from "../../icons/view_grid";
import CursorClickIcon from "../../icons/cursor_click";
import RefreshIcon from "../../icons/refresh";
import NavDropdownItem from "../dropdown/item";
import NavDropdownFooter from "../dropdown/footer";

export default function Dropdown() {
  return (
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
          <NavDropdownFooter title="Watch Demo" href="/" icon={<PlayIcon />} />

          <NavDropdownFooter
            title="Contact Sales"
            href="/"
            icon={<PhoneIcon />}
          />
        </div>
      </div>
    </div>
  );
}
