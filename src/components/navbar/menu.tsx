import MenuIcon from "../../components/icons/menu";
interface MenuProps {
  onClick: Function;
}

/**
 * The menu button for mobile screens.
 */
export default function Menu({ onClick }: MenuProps) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-expanded="false"
    >
      <span className="sr-only">Open Menu</span>
      <MenuIcon />
    </button>
  );
}
