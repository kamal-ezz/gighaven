"use client";

import { isLoggedIn } from "@/utils/Auth";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  return (
    <nav className="flex py-5 items-center">
      <Link href="/">
        <h1 className="text-lg ml-12">Gighaven</h1>
      </Link>
      <ul className="ml-8">
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
      </ul>
      {isLoggedIn() ? (
        <div className="ml-auto mr-12">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <ul className="flex gap-5 ml-auto mr-12">
          <li>
            <Link href="/signin">Signin</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
