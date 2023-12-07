import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GoSearch } from "react-icons/go";

export default function Searchbar() {
  return (
    <div className="relative w-fit  mx-auto ">
      <Input className="w-96 mb-5" placeholder="Search jobs" />
      <Button variant="secondary" className="absolute top-0 right-0">
        <GoSearch />
      </Button>
    </div>
  );
}
