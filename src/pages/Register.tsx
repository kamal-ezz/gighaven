import First from "@/components/register/First";
import Second from "@/components/register/Second";
import Steeper from "@/components/register/Steeper";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [currStep, setCurrStep] = useState(0);
  const [nameAndEmailData, SetNameAndEmailData] = useState({});

  useEffect(() => {
    if (false) navigate("/");
  }, []);

  return (
    <section className="bg-white">
      <div className="p-12 lg:py-16 mx-auto sm:max-w-md border mt-5">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-10">
          Sign Up
        </h1>
        <Steeper currStep={currStep} />
        {currStep == 0 && (
          <First
            currStep={currStep}
            setCurrStep={setCurrStep}
            SetNameAndEmailData={SetNameAndEmailData}
          />
        )}
        {currStep == 1 && (
          <Second
            currStep={currStep}
            setCurrStep={setCurrStep}
            nameAndEmailData={nameAndEmailData}
          />
        )}
      </div>
    </section>
  );
}
