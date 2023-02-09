import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../Asset/Logo.jpg";
import { AuthContext } from "../../Contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
                label={<Avatar src={user?.photoURL} rounded={true} />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
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
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/add-services">Add Services</Link>
          <Link to="/my-reviews">My Reviews</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
