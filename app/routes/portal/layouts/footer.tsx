import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-8 pb-4 bg-primary text-white flex items-center justify-center">
      <p className="text-center text-sm">
        &copy; {currentYear} Tanzania AI Community. { " "} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
