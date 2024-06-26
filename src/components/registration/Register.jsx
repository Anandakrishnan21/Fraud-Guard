"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Separator from "../common/Separator";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="backgroundImg flex justify-center items-center">
      <div className="authCard">
        <h1 className="text-lg font-semibold">Hey, welcome to Fraud Guard</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
          <div>
            <Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
          </div>
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
              required
            />
            <Button
              variant="ghost"
              className="absolute top-[110px] right-0 cursor-pointer"
              onClick={toggleVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </Button>
          </div>
          <Button>Sign Up</Button>
        </form>
        <Separator
          status="Already have an Account ?"
          text="Sign Up with Google"
          linkName="Login"
          url="/login"
        />
      </div>
    </div>
  );
}

export default Register;
