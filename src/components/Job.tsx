import React from "react";

interface job {
  title: string;
  description: string;
  price: string;
  datePosted: string;
}

export default function Job({ title, description, price, datePosted }: job) {
  return (
    <div>
      <span>Posted : {datePosted}</span>
      <h1>{title}</h1>
      <span>{price}</span>
      <p>{description}</p>
    </div>
  );
}
