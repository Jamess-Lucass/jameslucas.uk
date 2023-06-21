import { NavLinkProps, NavLink as RouterDOMNavLink } from "react-router-dom";

function NavLink(props: NavLinkProps) {
  return (
    <RouterDOMNavLink
      className={({ isActive }) =>
        isActive ? "text-blue-600" : "hover:text-blue-600"
      }
      {...props}
    >
      {props.children}
    </RouterDOMNavLink>
  );
}

export default NavLink;
