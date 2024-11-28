"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ToggleButton from "./ToggleButton";
import { navLinks } from "@/app/lib/constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-primary">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/darshanwebdev-blog-logo.png"
              alt="DarshanWebDev Blog Logo"
              width="30"
              height="30"
              className="hover:scale-110 hover:opacity-90 hover:rotate-6 hover:shadow-md transition-all duration-500"
            />
          </Link>

          <div className="hidden md:block space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <ToggleButton isOpen={isOpen} onClick={toggleNavbar} />
          </div>
        </div>

        {isOpen && (
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-gray-500 block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
