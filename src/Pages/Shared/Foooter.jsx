import { Footer } from "flowbite-react";
import React from "react";

const Foooter = () => {
  return (
    <div>
      <Footer container={true}>
        <Footer.Copyright to="/home" by="Lens Expert™" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link to="/about">About</Footer.Link>
          <Footer.Link to="">Privacy Policy</Footer.Link>
          <Footer.Link to="">Licensing</Footer.Link>
          <Footer.Link to="">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Foooter;
