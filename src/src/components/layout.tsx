import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavLink from "./nav-link";

type Link = {
  to: string;
  name: string;
};

const links: Link[] = [
  { to: "/", name: "Home" },
  { to: "/projects", name: "Projects" },
  { to: "/contact", name: "Contact" },
];

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleToggleNavOpenOnClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavigationOnClick = () => {
    setIsNavOpen(false);
  };

  const classnames = clsx(isNavOpen && "h-screen", "overflow-hidden");

  const linksCompoent = links.map(({ to, name }) => (
    <li key={to} className="py-1">
      <NavLink to={to} onClick={handleNavigationOnClick}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <div className={classnames}>
      <div className="fixed w-full lg:h-full lg:w-60 lg:border-r lg:block lg:p-6 flex items-center p-4 border-b bg-white h-14 inset-0">
        <span className="flex-1">James Lucas</span>
        {isNavOpen ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer lg:hidden"
            onClick={handleToggleNavOpenOnClick}
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer lg:hidden"
            onClick={handleToggleNavOpenOnClick}
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}

        <nav className="hidden lg:block mt-6">
          <ul>{linksCompoent}</ul>
        </nav>
      </div>

      <div className="mt-14 lg:mt-0 lg:ml-60 p-6">
        {isNavOpen && (
          <aside className="bg-white h-full fixed w-full">
            <nav>
              <ul>{linksCompoent}</ul>
            </nav>
          </aside>
        )}

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
