import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex py-5 items-center">
      <h1 className="text-lg ml-12">Gighaven</h1>
      <ul className="ml-8">
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
      </ul>
      <ul className="flex gap-5 ml-auto mr-12">
        <li>
          <Link href="/signin">Signin</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
