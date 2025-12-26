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
import { useAppSelector } from "@/redux/hooks";
import { cartedProduct } from "@/redux/features/cart/cartSlice";
import logo from "@/assets/logo.png";
import Image from "next/image";
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

  // carted product
  const products = useAppSelector(cartedProduct);

  return (
    <div className="h-[70px] w-full px-2 bg-[#081621] sticky top-0 z-999 ">
      <div className="container mx-auto flex justify-between gap-6 items-center h-full">
        <div className="w-auto">
          <Link href="/">
            <Image src={logo} width={40} height={40} alt="Logo" />
          </Link>
        </div>
        <div className="w-[65%] hidden lg:block">
          <div className="flex items-center bg-white rounded">
            <Input className="bg-white" placeholder="Search" />
            <div className="bg-white p-1 cursor-pointer">
              <Search />
            </div>
          </div>
        </div>
        <div className="w-auto text-right flex gap-2 items-center justify-end">
          {isLoading ? (
            <></>
          ) : (
            <>
              {user ? (
                <>
                  <Link href="/cart">
                    <Button className="cursor-pointer bg-[#EF4A23] hover:bg-[#fF4A23]">
                      <ShoppingBasket />
                      {products?.length > 0 && <span>{products?.length}</span>}
                    </Button>
                  </Link>
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
                        <Link href="/user/shop/products">Shop</Link>
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
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
