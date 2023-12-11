"use client";

import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/navigation";

export default function Searchbar({ placeholder, type }: any) {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const search = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${type}/?q=${query}`);
  };

  return (
    <div className="relative w-fit  mx-auto ">
      <Input
        className="w-96 mb-5"
        placeholder={placeholder}
        value={query}
        onChange={(e: any) => setQuery(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            search(event);
          }
        }}
      />
      <Button variant="secondary" className="absolute top-0 right-0">
        <GoSearch onClick={search} />
      </Button>
    </div>
  );
}
