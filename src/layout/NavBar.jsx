import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/React 1.svg";
import ActiveLink from "../hooks/ActiveLink";

const NavBar = ({ children }) => {
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full flex px-5 md:px-32 justify-between py-4">
            <div className="text-white mb-4">
              <img className="max-w-full h-auto" src={logo} alt="logo" />
            </div>
            <div className="flex-none hidden lg:block">
              <div>
                <ul className="menu menu-horizontal text-yellow-500 font-bold">
                  <li>
                    <ActiveLink to="/">Home</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/about">Coference Info</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/whatwedo">What we do</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/ourwork">Our work</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/blogs">Blogs</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/sayhi">Say hi</ActiveLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-none">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 box-size text-white font-bold bg-red-300">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">Coference Info</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/whatwedo">What we do</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blogs">Blogs</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/ourwork">Our work</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/sayhi">Say hi</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
