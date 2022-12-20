import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content mt-5">
        <div>
          <span className="footer-title">Services</span>
          <a href="#h" className="link link-hover">Branding</a>
          <a href="#h" className="link link-hover">Design</a>
          <a href="#h" className="link link-hover">Marketing</a>
          <a href="#h" className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="#f" className="link link-hover">About us</a>
          <a href="#f" className="link link-hover">Contact</a>
          <a href="#f" className="link link-hover">Jobs</a>
          <a href="#f" className="link link-hover">Press kit</a>
        </div>
        <div>
          <p className="text-white">Copyright &copy;2022 All reserved by  React test</p>
          <p className="text-white">Develope by ❤ Partho bepary</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
