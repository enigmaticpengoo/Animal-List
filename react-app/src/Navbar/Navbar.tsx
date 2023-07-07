import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid" style={{ margin: "0px 15px" }}>
        <a className="nav-item nav-link" href="#">
          <img
            src="src/assets/house-fill.svg"
            alt="home"
            style={{ height: "1.5em" }}
          />
        </a>
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Projects
          </div>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Project 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Project 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Project 3
              </a>
            </li>
          </ul>
        </div>
        <a className="nav-item nav-link" href="#">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
