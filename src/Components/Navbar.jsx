import { useDisclosure } from "@chakra-ui/hooks";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  const { isOpen } = useDisclosure();
  const location = useLocation();
  return (
    <>
      {console.log(location.pathname)}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-gradient ">
        <div className="container">
          <Link className="navbar-brand" to="/portfolio-app">
            <Text fontSize="3xl" fontWeight="extrabold">
              Portfolio
            </Text>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {location.pathname === "/" ? (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app"
                    style={{ color: "orange" }}
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      Home
                    </Text>
                  </Link>
                ) : (
                  <Link className="nav-link active" aria-current="page" to="/portfolio-app">
                    <Text px={2} fontSize="md" fontWeight="bold">
                      Home
                    </Text>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {location.pathname === "/portfolio-app/about" ? (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app/about"
                    style={{ color: "orange" }}
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      About Me
                    </Text>
                  </Link>
                ) : (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app/about"
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      About Me
                    </Text>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {location.pathname === "/resume" ? (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app/resume"
                    style={{ color: "orange" }}
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      Resume
                    </Text>
                  </Link>
                ) : (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app/resume"
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      Resume
                    </Text>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {location.pathname === "/contact" ? (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app/contact"
                    style={{ color: "orange" }}
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      Contact
                    </Text>
                  </Link>
                ) : (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/portfolio-app/contact"
                  >
                    <Text px={2} fontSize="md" fontWeight="bold">
                      Contact
                    </Text>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
