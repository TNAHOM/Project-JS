"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex justify-between py-4 px-6 font-epilogue bg-slate-200">
      <div>
        <Link href="/">
          <h2 className="font-bold text-3xl text-[#4640DE]">Hire-Jobs</h2>
        </Link>
      </div>
      <div className="flex justify-between gap-4 cursor-pointer">
        <Link href="/">
          <p
            className={`p-2 rounded-md ${
              isActive("/") ? "bg-[#4640DE] text-white" : ""
            }`}
          >
            Home
          </p>
        </Link>
        <Link href="/bookmark">
          <p
            className={`p-2 rounded-md ${
              isActive("/bookmark") ? "bg-[#4640DE] text-white" : ""
            }`}
          >
            Bookmarks
          </p>
        </Link>
        <p className="p-2 rounded-md">About</p>
        <p className="p-2 rounded-md">Contact</p>
        <p className="p-2 rounded-md">Contribute</p>
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer text-center ">
          {status === "authenticated" ? (
            <div className="flex gap-2 align-middle text-center">
              <p className=" mt-1 text-center font-medium text-[18px] text-[#0800ff]">
                Welcome, {session?.user.data.name.split(" ")[0]}{" "}
                {session?.user.data.name.split(" ")[1]}
              </p>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-[#4640DE] px-4 py-1 rounded-[80px] text-white font-epilogue font-medium text-[14px]"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/signUp">
                <button
                  className={`px-4 py-1 rounded-[80px] font-epilogue font-medium text-[14px] ${
                    isActive("/signUp")
                      ? "bg-white text-[#4640DE]"
                      : "bg-[#4640DE] text-white"
                  }`}
                >
                  SignUp
                </button>
              </Link>
              <Link href="/login">
                <button
                  className={`px-4 py-1 rounded-[80px] font-epilogue font-medium text-[14px] ${
                    isActive("/login")
                      ? "bg-white text-[#4640DE]"
                      : "bg-[#4640DE] text-white"
                  }`}
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
