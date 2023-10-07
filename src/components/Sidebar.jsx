import IconAnytime from "./icons/IconAnytime";
import IconInbox from "./icons/IconInbox";
import IconToday from "./icons/IconToday";
import IconTrash from "./icons/IconTrash";
import IconLogbook from "./icons/IconLogbook";
import IconUpcoming from "./icons/IconUpcoming";
import IconSomeday from "./icons/IconSomeday";
import NavLink from "./NavLink";
import { useLocation } from "react-router";

const links = [
  {
    label: "Inbox",
    icon: <IconInbox width={18} />,
    href: "/",
    className: "mb-4",
  },
  {
    label: "Today",
    icon: <IconToday width={18} />,
    href: "/today",
  },
  {
    label: "Anytime",
    icon: <IconAnytime width={18} />,
    href: "/anytime",
  },
  {
    label: "Upcoming",
    icon: <IconUpcoming width={18} />,
    href: "/upcoming",
  },
  {
    label: "Someday",
    icon: <IconSomeday width={18} />,
    href: "/someday",
    className: "mb-4",
  },
  {
    label: "Logbook",
    icon: <IconLogbook width={18} />,
    href: "/logbook",
  },
  {
    label: "Trash",
    icon: <IconTrash width={18} />,
    href: "/trash",
  },
];

export function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="w-56 bg-zinc-50 h-screen border-r flex flex-col">
      <ul className="px-5 py-5">
        {links.map((link, i) => {
          return (
            <li key={i} className={link.className}>
              <NavLink {...link} isActive={pathname === link.href} />
            </li>
          );
        })}
      </ul>
      <div className="mt-auto">
        <button className="border-t border-gray-300 hover:bg-zinc-300 text-gray-500 font-medium py-2 rounded-sm w-full flex gap-2 items-center px-7">
          {/* <img className="w-3 h-3" src="./assets/img/plus.svg" alt="Plus" /> */}
          <span className="font-medium text-sm">Add Project</span>
        </button>
      </div>
    </div>
  );
}
