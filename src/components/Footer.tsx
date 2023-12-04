import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="shadow bg-black  w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-xl whitespace-nowrap text-white">
              GigHaven
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center text-white dark:text-gray-400">
          © {new Date().getFullYear()} Gighaven. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
