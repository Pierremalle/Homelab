import PropTypes from "prop-types";

import { NavBar } from "../navigation/NavBar";

export function SideBar({ routesLinks }) {
  return (
    <section
      className="rounded-none border-4 border-slate-900 border-r-emerald-800 
      flex flex-col justify-between 
    p-8 h-screen w-1/6
    bg-slate-900"
    >
      <section id="title" className="md:container md:mx-auto">
        <h1 className="font-mono text-xl antialiased font-extrabold tracking-wide text-emerald-600 text-center">
          HomeLab
        </h1>
        <hr className="w-1/2 h-1 mx-auto my-4 bg-emerald-600 border-0 rounded md:my-10 dark:bg-emerald-600"></hr>
      </section>

      <NavBar routesLinks={routesLinks}></NavBar>
      <button>Theme</button>
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
