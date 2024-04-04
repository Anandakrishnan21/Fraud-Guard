"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Separator from "../common/Separator";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res) {
        console.log(res);
      }

      router.replace("home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="backgroundImg flex justify-center items-center">
      <div className="flex flex-col gap-4 bg-white text-black w-11/12 md:w-2/5 rounded-lg p-2 md:p-10">
        <h1 className="text-lg font-semibold">
          Hey, welcome back to Fraud Guard
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <Button>Sign In</Button>
        </form>
        <Separator
          status="Don't have an Account ?"
          text="Sign In with Google"
          linkName="Register"
          url="/register"
        />
      </div>
    </div>
  );
}

export default Login;
