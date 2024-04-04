import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

function GoogleBtn({text}) {
  return <Button variant="outline" className="flex justify-center items-center gap-2">
    <FaGoogle />
    <p>{text}</p>
  </Button>;
}

export default GoogleBtn;
