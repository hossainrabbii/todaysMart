"use client";
import Link from "next/link";
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
import {
  LogOut,
  Search,
  SearchCheckIcon,
  ShoppingBasket,
  User2Icon,
} from "lucide-react";
import { logOutUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import { Input } from "../ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cartedProduct } from "@/redux/features/cart/cartSlice";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { removeUser, userInfoFromSlice } from "@/redux/features/user/userSlice";
import { useState } from "react";
const Navbar = () => {
  const { user, setIsLoading, isLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const dispath = useAppDispatch();
  const handleLogOut = () => {
    logOutUser();
    setIsLoading(true);
    dispath(removeUser());

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  // console.log('user',user);
  // if(){
  //   console.log("Daka")
  // }

  // carted product
  const products = useAppSelector(cartedProduct);
  const userId = useAppSelector(userInfoFromSlice);
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <div className="h-[70px] w-full px-2 bg-[#081621] sticky top-0 z-999 ">
      <div className="container mx-auto flex justify-between gap-6 items-center h-full">
        <div className="w-auto">
          {/* <Link href="/">
            <Image src={logo} width={40} height={40} alt="Logo" />
          </Link> */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400 text-accent-foreground font-black text-xl shadow-md">
              T
            </div>
            <span className="hidden sm:block text-xl font-bold text-white">
              Todays<span className="text-accent">Mart</span>
            </span>
          </Link>
        </div>
        <div className="w-[55%] hidden lg:block">
          {/* <div className="flex items-center bg-white rounded">
            <Input className="bg-white" placeholder="Search" />
            <div className="bg-white p-1 cursor-pointer">
              <Search />
            </div>
          </div> */}
          <div
            className={`hidden md:flex flex-1 max-w-4xl transition-all duration-300 ${searchFocused ? "scale-[1.02]" : ""}`}
          >
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
              <Input
                type="search"
                placeholder="Search products, brands, categories..."
                className="w-full pl-11 pr-4 h-11 rounded-xl border-2 border-border bg-transparent focus:border-accent focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>
        </div>
        <div className="w-auto text-right flex gap-2 items-center justify-end">
          {isLoading ? (
            <></>
          ) : (
            <>
              {user === null ? (
                <div className="flex gap-2 items-center">
                  <Link href="/cart">
                    <Button className="cursor-pointer bg-[#EF4A23] hover:bg-[#fF4A23]">
                      <ShoppingBasket />
                      {products?.length > 0 && <span>{products?.length}</span>}
                    </Button>
                  </Link>
                  <div className="flex flex-start items-center border border-gray-600 px-1 rounded-sm">
                    <Button className="bg-red">
                      <User2Icon />
                    </Button>
                    <div>
                      {/* <h3 className="text-white">Account</h3> */}
                      <Link
                        href="/register"
                        className="text-gray-500 hover:text-[#EF4A23] text-[12px]"
                      >
                        Register
                      </Link>{" "}
                      <span className="text-white">or </span>
                      <Link
                        href="/login"
                        className="text-gray-500 hover:text-[#EF4A23] text-[12px]"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/cart">
                    <Button className="cursor-pointer bg-[#EF4A23] hover:bg-[#fF4A23]">
                      <ShoppingBasket />
                      {products?.length > 0 && <span>{products?.length}</span>}
                    </Button>
                  </Link>
                  <Link href="/create-shop">
                    <Button variant="outline">Create Shop</Button>
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
                        <Link href="/user/shop/products">Shop</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <Button className="bg-red-600 hover:bg-red-700 my-2">
                        <LogOut></LogOut>
                        <span onClick={handleLogOut}>Log Out</span>
                      </Button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
