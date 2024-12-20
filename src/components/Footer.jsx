import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} Storesville. All rights reserved.
    </footer>
  );
}

export default Footer;
