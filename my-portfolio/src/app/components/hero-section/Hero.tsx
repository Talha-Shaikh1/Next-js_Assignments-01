"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "../ui/moving-border";
import Link from "next/link";
 
export default function Hero() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-start justify-self-start p-[12rem]">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-7xl text-2xl font-semibold text-[#fff] z-20")}>
        Talha Shaikh
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 w-25">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
        temporibus commodi distinctio pariatur consequatur eligendi modi repellendus nostrum ad iste?
      </p>

      <div className="mt-4">
        <Link href={"/"}>
          <Button 
          borderRadius="1.75rem"
          className="bg-inherit text-white"
          >
            Download CV
          </Button>
        </Link>
      </div>


    </div>
  );
}