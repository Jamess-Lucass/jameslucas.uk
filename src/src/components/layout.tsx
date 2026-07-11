import clsx from "clsx";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavLink from "./nav-link";
import Sun from "../icons/sun.svg?react";
import Moon from "../icons/moon.svg?react";
import BurgerMenu from "../icons/burger-menu.svg?react";
import Close from "../icons/close.svg?react";

type Link = {
  to: string;
  name: string;
};

const links: Link[] = [
  { to: "/", name: "Home" },
  { to: "/contact", name: "Contact" },
];

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    (document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches) &&
      localStorage.getItem("theme") !== "light"
      ? "dark"
      : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, [theme]);

  const handleToggleNavOpenOnClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavigationOnClick = () => {
    setIsNavOpen(false);
  };

  const handleThemeOnClick = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  };

  const classnames = clsx(
    "min-h-screen bg-stone-100 dark:bg-black text-black dark:text-stone-300",
    isNavOpen && "h-screen overflow-hidden",
  );

  const linksCompoent = links.map(({ to, name }) => (
    <li key={to} className="py-1">
      <NavLink to={to} onClick={handleNavigationOnClick}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <div className={classnames}>
      <div className="fixed w-full lg:h-full lg:w-60 lg:border-r border-stone-200 dark:border-stone-800 lg:block lg:p-6 flex items-center p-4 border-b lg:border-b-0 h-14 inset-0 bg-inherit">
        <div className="flex w-full">
          <span className="flex-1">James Lucas</span>

          <div className="flex gap-4 lg:gap-0 items-center">
            <button onClick={handleThemeOnClick} className="cursor-pointer">
              {theme === "light" ? <Moon /> : <Sun />}
            </button>
            {isNavOpen ? (
              <button
                className="hover:cursor-pointer lg:hidden"
                onClick={handleToggleNavOpenOnClick}
              >
                <Close />
              </button>
            ) : (
              <button
                className="hover:cursor-pointer lg:hidden"
                onClick={handleToggleNavOpenOnClick}
              >
                <BurgerMenu />
              </button>
            )}
          </div>
        </div>

        <nav className="hidden lg:block mt-6">
          <ul>{linksCompoent}</ul>
        </nav>
      </div>

      <div className="mt-14 lg:mt-0 lg:ml-60 p-6">
        {isNavOpen && (
          <aside className="bg-stone-100 dark:bg-black h-full fixed w-full">
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
