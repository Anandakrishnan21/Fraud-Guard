"use client"
import React from "react";
import Header from "../common/Header";
import ExcelForm from "./ExcelForm";
import { Button } from "../ui/button";

function HomePage() {
  const handleRunPython = async () => {
    try {
      const res = await fetch("api/runcode", {
        method: "POST",
      });

      if (res.ok) {
        const output = await res.json();
        console.log("Python program output:", output);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="backgroundImg flex flex-col gap-4 text-neutral-50 min-h-screen p-4">
      <Header />
      <ExcelForm />
      <div className="h-96 flex justify-center items-center">
        <Button
          onClick={handleRunPython}
          className="h-8 bg-red-900 hover:bg-red-800 duration-300"
        >
          Run Program
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
