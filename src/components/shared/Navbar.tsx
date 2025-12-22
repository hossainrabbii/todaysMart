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
import { LogOut, ShoppingBasket } from "lucide-react";
import { logOutUser } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import { Input } from "../ui/input";
import { useAppSelector } from "@/redux/hooks";
import { cartedProduct } from "@/redux/features/cart/cartSlice";
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
    <div className="h-[60px] w-full bg-[#f0f0f0] sticky top-0 z-999">
      <div className="container mx-auto flex justify-between gap-6 items-center h-full">
        <div className="w-[20%]">
          <Link href="/">Todays Mart</Link>
        </div>
        <div className="w-[65%]">
          <Input className="bg-white py-4" />
        </div>
        <div className="w-[25%] text-right flex gap-2 items-center justify-end">
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
                <div className="flex gap-2">
                  <Link href="/cart">
                    <Button className="cursor-pointer">
                      <ShoppingBasket />
                      {products?.length > 0 && <span>{products?.length}</span>}
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button className="cursor-pointer">Login</Button>
                  </Link>
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
