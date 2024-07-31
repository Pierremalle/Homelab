import PropTypes from "prop-types";

import { NavBar } from "../navigation/NavBar";
import { DarkModeToggle } from "../interactive/toggles/DarkModeToggle";

export function SideBar({ routesLinks }) {
  return (
    <section
      className="rounded-none border-4 
      md:flex flex-col justify-between items-center
      md:p-8 md:h-screen md:w-1/10
      dark:border-slate-900 border-amber-50 dark:border-r-emerald-800  border-r-amber-800
      dark:bg-slate-900 bg-amber-50
      "
    >
      <section id="title" className="md:container md:mx-auto">
        <h1 className="font-mono text-xl antialiased font-extrabold tracking-wide dark:text-emerald-600 text-amber-800 text-center">
          HomeLab
        </h1>
        <hr className="w-1/2 h-1 mx-auto my-4 border-0 rounded md:my-10 dark:bg-emerald-600 bg-amber-800"></hr>
      </section>

      <NavBar routesLinks={routesLinks}></NavBar>

      <DarkModeToggle />
    </section>
  );
}

SideBar.propTypes = {
  routesLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
