"use client";

import Button from "../components/atoms/Buttons/button1";
import React from "react";
import { useRouter } from "next/navigation";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cv() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <Button color={"secondary"} onClick={handleClick}>
        Download CV <FontAwesomeIcon icon={faDownload} />
      </Button>
    </div>
  );
}
