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
      <div className="flex">
        <div className="h-screen  bg-black w-[15vw] text-white text-2xl">
          <ul className="pt-5 flex flex-col gap-3mt-5 px-10 space-y-8 py-5">
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/dashboard/credits"}>Credits</Link>
            <Link href={"/dashboard/profile"}>Profile</Link>
            <Link href={"/dashboard/payment"}>Payment</Link>
          </ul>
        </div>
        <div className="p-4"> {children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
