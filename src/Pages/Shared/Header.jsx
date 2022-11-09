import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Asset/Logo.jpg";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="/home">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user?.email ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    src={user?.photoURL}
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <>
              <div className="navbar-end">
                <Link to="/login" className="mr-2">
                  Login
                </Link>
                <Link to="/register">Register</Link>
              </div>
            </>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
