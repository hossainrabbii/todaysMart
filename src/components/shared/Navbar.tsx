"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { logOutUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
const Navbar = () => {
  const { user, setIsLoading, isLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const handleLogOut = () => {
    logOutUser();
    setIsLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div className="h-[60px] w-full bg-[#E1E1E1]">
      <div className="container mx-auto flex justify-between gap-6 items-center h-full">
        <div className="w-[35%]"></div>
        <div className="w-[25%]">
          <h4 className="text-xl font-semibold text-center ">Todays Mart</h4>
        </div>
        <div className="w-[35%] text-right flex gap-2 items-center justify-end">
          {isLoading ? (
            <></>
          ) : (
            <>
              {user ? (
                <>
                  <Link href="/create-shop">
                    <Button>Create Shop</Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/user/dashboard">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {" "}
                        <Link href="/user/all=products">Shop</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <Button className="bg-red-600 hover:bg-red-700 my-2">
                        <LogOut></LogOut>
                        <span onClick={handleLogOut}>Log Out</span>
                      </Button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button>Login</Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
