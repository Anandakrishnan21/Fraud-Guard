import React from "react";
import Header from "../common/Header";
import { Button } from "../ui/button";
import Cards from "./Cards";

function Landing() {
  return (
    <div className="backgroundImg flex flex-col gap-4 text-neutral-50 min-h-screen p-4">
      <Header />
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="w-full md:w-3/4 flex flex-col gap-2 text-justify md:text-center">
          <h2 className="font-bold text-2xl md:text-3xl">
            Your Advanced Credit Card Fraud Detection Solution
          </h2>
          <p className="text-sm md:text-normal">
            Introducing FraudGuard, our advanced credit card fraud detection
            system. Powered by machine learning algorithms, FraudGuard analyzes
            transactions to detect and prevent fraudulent activities. FraudGuard
            includes robust alerting mechanisms, such as SMS and email
            notifications, to promptly alert you of suspicious transactions.
            With FraudGuard, you can protect your business and customers from
            fraud, ensuring secure transactions and peace of mind.
          </p>
          <div className="flex justify-center gap-2">
            <Button className="h-8 bg-neutral-50 text-black hover:bg-neutral-300">
              Get Start
            </Button>
            <Button className="h-8 bg-blue-900 hover:bg-blue-800">
              {" "}
              About More
            </Button>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Landing;
