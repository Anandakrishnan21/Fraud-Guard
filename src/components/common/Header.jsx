"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SignOut from "./SignOut";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="text-neutral-50 bg-neutral-50 backdrop-filter bg-opacity-10 backdrop-blur-lg flex justify-between items-center sticky top-0 z-10 p-3 mx-1 rounded-lg">
      <header>
        <p className="font-bold text-lg">Fraud Guard</p>
      </header>
      <div className="flex gap-4">
        {session?.user ? (
          <>
            <p>{session?.user?.name}</p>
            <SignOut />
          </>
        ) : (
          <Link href="/login">
            <Button className="h-8 bg-neutral-50 text-black hover:bg-neutral-300">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
