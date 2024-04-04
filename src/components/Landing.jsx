import React from "react";
import Header from "./common/Header";
import Image from "next/image";
import { Button } from "./ui/button";

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
            <Button className="h-8 bg-blue-900"> About More</Button>
          </div>
        </div>
        <div className="w-full md:w-3/4 md:h-[400px] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col justify-between bg-neutral-50 h-80 w-11/12 md:w-72 backdrop-filter bg-opacity-20 backdrop-blur-lg rounded-lg p-2">
            <img
              src="/images/img1.jpg"
              alt=""
              className="rounded-lg h-1/2 w-full"
            />
            <p className="text-sm text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Button className="h-8">Read More</Button>
          </div>
          <div className="flex flex-col justify-between bg-neutral-50 h-80 w-11/12 md:w-72 backdrop-filter bg-opacity-20 backdrop-blur-lg rounded-lg p-2">
            <img
              src="/images/img2.jpg"
              alt=""
              className="rounded-lg h-1/2 w-full"
            />
            <p className="text-sm text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Button className="h-8">Read More</Button>
          </div>
          <div className="flex flex-col justify-between bg-neutral-50 h-80 w-11/12 md:w-72 backdrop-filter bg-opacity-20 backdrop-blur-lg rounded-lg p-2">
            <img
              src="/images/img3.jpg"
              alt=""
              className="rounded-lg h-1/2 w-full"
            />
            <p className="text-sm text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Button className="h-8">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
