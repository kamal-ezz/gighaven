"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface job {
  id: number;
  title: string;
  description: string;
  price: number;
  datePosted: string;
  nbBids: number;
}

export default function Job({
  id,
  title,
  description,
  price,
  datePosted,
  nbBids,
}: job) {
  const router = useRouter();

  return (
    <div className="flex justify-around mt-5 items-center">
      <div>
        <span>
          Posted : {datePosted} . {nbBids} Bids Received
        </span>
        <h1 className="font-semibold text-xl">{title}</h1>
        <span className="font-semibold">$ {price}</span>
        <p className="mt-3">{description.substring(0, 400)} ...</p>
      </div>
      <Button onClick={() => router.push(`/jobs/${id}`)}>View Details</Button>
    </div>
  );
}
