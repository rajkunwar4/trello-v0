"use client";

import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

export default function Header() {
  return (
    <header className="">
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 ">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-300 to-blue-200 z-[-1]  filter blur-3xl" />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="logo"
          width={300}
          height={140}
          className="w-44 md:w-56 pb-10 md:pb-0 object contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search bar */}
          <form
            action=""
            className="flex items-center space-x-5  bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="size-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            />
            <button type="submit" hidden>
              search
            </button>
          </form>

          {/* user avatar */}
          <Avatar name="r k" round color="#0055d1" size="50" />
        </div>
      </div>
      <div className="flex justify-center items-center px-5  md:py-5 font-light py-2">
        <p className="flex items-center justify-center pr-5 text-sm shadow-xl rounded italic  max-w-3xl text-[#0055d1]/60 p-4 bg-white">
          <UserCircleIcon className="w-10 h-10 inline-block text-[#0055d1]" />
          GPT is summarising your tasks...
        </p>
      </div>
    </header>
  );
}
