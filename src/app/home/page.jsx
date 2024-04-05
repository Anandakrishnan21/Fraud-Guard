import HomePage from "@/components/home/HomePage";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

async function Homepage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return <HomePage />;
}

export default Homepage;
