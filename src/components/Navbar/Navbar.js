import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-6 bg-black text-white">
      <div className="text-4xl font-bold">MyBlog.com</div>
      <div className="space-x-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/about-us"}>About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
