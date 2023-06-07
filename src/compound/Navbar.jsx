/* eslint-disable react/jsx-key */
import React from "react";
import logo from "./img/logo cleverse.png";

const menu = [
  {
    Name: "About Us",
  },
  {
    Name: "Blog",
  },
  {
    Name: "career",
  },
];

const Navbar = () => {
  return (
    <div className="flex space-x-96 justify-between item-center px-2 py-5 mb-5 sticky top-0 bg-white">
      <img className="text-xs" src={logo} alt="clever" width="101" />
      <div className="flex space-x-4">
        {menu.map((menus) => {
          return <p>{menus.Name}</p>;
        })}
        <p>contact</p>
      </div>
    </div>
  );
};

export default Navbar;
