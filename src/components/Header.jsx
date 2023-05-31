import React from "react";
import Logo from "../assets/logo/logo-text.svg";

const Header = () => {
  // const [activePage, setActivePage] = useState("");

  // const handleNavLinkClick = (page) => {
  //   setActivePage(page);
  // };

  return (
    <nav>
      <a href="/#" className="site-title">
        <img src={Logo} alt="logo" width="96" height="13.64" />
      </a>
      <ul className="nav-header">
        <li>
          {/* <NavLink
              exact
              to="/"
              activeClassName="active"
              onClick={() => handleNavLinkClick("projects")}
            >
              projects
            </NavLink> */}
          <a href="/#" className="nav-item">
            our product
          </a>
        </li>
        <li>
          <a href="/#" className="nav-item">
            about
          </a>
        </li>
        <li>
          <a href="/#" className="nav-item">
            contact us
          </a>
        </li>
        <li>
          <a href="/#" className="nav-item">
            profile
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
