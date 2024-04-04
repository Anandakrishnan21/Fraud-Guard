import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

function SignOut() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AiOutlineLogout />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLogout}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SignOut;
