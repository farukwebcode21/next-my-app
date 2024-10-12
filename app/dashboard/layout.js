import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-5 flex items-center justify-between">
        <h3 className="text-xl">Logo</h3>
        <ul className=" flex gap-10 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <Link href={"/login"}>Login</Link>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardLayout;
