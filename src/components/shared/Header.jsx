"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0">
      <nav class="px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/">
            <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              PORT<span className="text-[#04D1E0]">FOLIO.</span>
            </span>
          </Link>
          <div class="flex items-center">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class={`${
              openMenu ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto  bg-[#20242D] lg:bg-transparent px-4 pb-4 lg:px-0 lg:pb-0`}
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/about"
                  className={`link ${
                    pathname === "/about"
                      ? "text-[#04D1E0] font-bold"
                      : " text-white font-bold"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/skill"
                  className={`link ${
                    pathname === "/skill"
                      ? "text-[#04D1E0] font-bold"
                      : " text-white font-bold"
                  }`}
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={`link ${
                    pathname === "/portfolio"
                      ? "text-[#04D1E0] font-bold"
                      : " text-white font-bold"
                  }`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`link ${
                    pathname === "/contact"
                      ? "text-[#04D1E0] font-bold"
                      : " text-white font-bold"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
