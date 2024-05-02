import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 lg:px-20 xl:px-40 text-red-500">
      <Link href="/" className="font-bold text-xl mb-4 md:mb-0">VELINGRAD</Link>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook2.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
        </a>
      </div>
      <p className="mt-4 md:mt-0">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;