import React from "react";
import { Outlet } from "react-router-dom";
import Foooter from "../Pages/Shared/Foooter";
import Header from "../Pages/Shared/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Foooter />
    </div>
  );
};

export default Root;
