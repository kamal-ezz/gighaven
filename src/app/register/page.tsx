"use client";

import First from "@/components/register/First";
import Second from "@/components/register/Second";
import Steeper from "@/components/register/Steeper";

import React, { useState } from "react";

export default function Register() {
  const [currStep, setCurrStep] = useState(0);

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto sm:max-w-md">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-10">
          Sign Up
        </h1>
        <Steeper currStep={currStep} />
        {currStep == 0 && (
          <First currStep={currStep} setCurrStep={setCurrStep} />
        )}
        {currStep == 1 && (
          <Second currStep={currStep} setCurrStep={setCurrStep} />
        )}
      </div>
    </section>
  );
}
