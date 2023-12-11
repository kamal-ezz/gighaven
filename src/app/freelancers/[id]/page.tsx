import Image from "next/image";
import React from "react";

export default function FreelancerProfile({ name, pic, location, rate }: any) {
  return (
    <div>
      <div className="flex gap-3">
        <Image
          src={pic}
          width={70}
          height={70}
          alt="profile"
          className="border"
        />
        <div className="flex gap-1 flex-col">
          <span>{name}</span>
          <span className="font-semibold">{location}</span>
          <span className="font-semibold">{rate}</span>
        </div>
      </div>
    </div>
  );
}
