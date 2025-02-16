"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { useState } from "react";
import { menuData } from "./menuItems";

export const Navbar = ({ setMenuItemData, cart }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToCart = () => {
    document.getElementById("cart")?.scrollIntoView();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchTerm(query);

    if (query === "") {
      setMenuItemData(menuData);
      return;
    }

    const filteredData = menuData
      .map((category) => {
        const filteredItems = category.items.filter((item) => {
          const itemName = item.name.toLowerCase();
          return itemName.startsWith(query) || itemName.includes(query);
        });

        return filteredItems.length > 0
          ? { ...category, items: filteredItems }
          : null;
      })
      .filter(Boolean); // Remove empty categories

    setMenuItemData(filteredData);
  };

  return (
    <NextUINavbar
      className="grid grid-cols-[4fr 2fr] py-4 px-[0px !important]"
      height="3rem"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100 ml-2",
              input: "text-sm",
            }}
            endContent={
              <Kbd className="hidden lg:inline-block" keys={["command"]}>
                K
              </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        onClick={scrollToCart}
        className="sm:hidden basis-1 pl-4 relative"
        justify="center"
      >
        {/* Cart Item Count Badge */}
        {cart.length > 0 && (
          <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {cart.length}
          </span>
        )}

        {/* Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart ml-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </NavbarContent>
    </NextUINavbar>
  );
};
