"use client";
import React from "react";
import Image from "next/image";

export default function Loading () {
  return (
    <div className="w-full flex items-center justify-center">
      <Image
        src="/assets/icons/loader.svg"
        alt="Loader"
        width={50}
        height={50}
        className="object-contain animate-spin"
      />
      <p>Loading ...</p>
    </div>
    
  );
};