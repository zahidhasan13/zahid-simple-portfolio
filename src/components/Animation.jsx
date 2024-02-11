"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React from "react";

if (typeof window !== undefined) {
  AOS.init();
}

export default function Animation({ children }) {
  return <>{children}</>;
}
