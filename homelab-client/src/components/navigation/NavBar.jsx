import PropTypes from "prop-types";

export function NavBar({ routesLinks }) {
  return (
    <nav>
      <ul className="flex flex-col justify-center space-y-4">
        {routesLinks.map((currentRoute) => (
          <li
            key={currentRoute.id}
            className="rounded-lg border-4 border-emerald-800 shadow-md shadow-emerald-800 p-2"
          >
            <a href={currentRoute.url}>
              <h1 className="font-mono text-sm antialiased font-bold text-sky-50">
                {currentRoute.name}
              </h1>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  routesLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
