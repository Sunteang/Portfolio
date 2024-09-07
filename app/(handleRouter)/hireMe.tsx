"use client";

import Button from "../components/atoms/Buttons/button1";
import React from "react";
import { useRouter } from "next/navigation";

export default function HireMe() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <div>
      <Button color={"portfolio_one"} onClick={handleClick}>
        Hire Me
      </Button>
    </div>
  );
}
