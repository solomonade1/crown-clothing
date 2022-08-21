import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import "./home.style.scss";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
