import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-4 bg-black text-white">
      <div className="text-4xl font-bold">MyBlog.com</div>
      <div className="space-x-8">
        <span>Home</span>
        <span>About Us</span>
      </div>
    </div>
  );
};

export default Navbar;
