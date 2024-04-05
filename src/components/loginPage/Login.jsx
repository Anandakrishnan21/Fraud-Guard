"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Separator from "../common/Separator";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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

  const toggleVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="backgroundImg flex justify-center items-center">
      <div className="authCard">
        <h1 className="text-lg font-semibold">
          Hey, welcome back to Fraud Guard
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="relative"
              required
            />
          </div>
          <Button
            variant="ghost"
            className="absolute top-[55px] right-0"
            onClick={toggleVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </Button>
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
