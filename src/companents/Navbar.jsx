import { React, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const colorsFromContext = useContext(GlobalContext);
  const [color, setColor] = useState("#256");

  const colorClick = (e) => {
    let getColor = e.target.attributes.style.value.slice(18);
    // getColor = e.target.attributes.style;
    console.log(getColor);
    setColor(getColor);
  };

  const navbarSetColor = { backgroundColor: color };

  return (
    <section className="py-2" style={navbarSetColor}>
      <nav className="flex items-center justify-between align-elements">
        <NavLink to="/">React</NavLink>
        <ul className="hidden gap-4 md:flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <button className="md:hidden">Open</button>
      </nav>
      <ul className="absolute right-1/2 top-10 translate-x-1/2  flex gap-2 align-elements">
        {colorsFromContext[0].map((color, i) => {
          const colorStyle = { backgroundColor: color };

          return (
            <li
              key={i}
              style={colorStyle}
              onClick={colorClick}
              className="w-12 h-12 rounded-full bg-slate-500"
            ></li>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
