import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border">
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="logo"
        width={300}
        height={140}
        className="w-44 md:w-56 pb-10 md:pb-0 object contain"
      />
    </header>
  );
}
