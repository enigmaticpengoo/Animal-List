import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="dropdown">
            <div
              className="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </div>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <a className="nav-item nav-link">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
