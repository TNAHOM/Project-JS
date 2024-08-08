"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between py-4 px-6 font-epilogue bg-slate-200">
      <div>
        <Link href="/">
          <h2 className="font-bold text-3xl text-[#4640DE]">Hire-Jobs</h2>
        </Link>
      </div>
      <div className="flex justify-between gap-4 cursor-pointer">
        <Link href="/">
          <p>Home</p>
        </Link>
        <p>About</p>
        <p>Contact</p>
        <p>Contribute</p>
      </div>
      <div className="flex gap-2">
        <div className="cursor-pointer">
          {status === "authenticated" ? (
            <>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-[#4640DE] px-4 py-1 rounded-[80px] text-white font-epilogue font-medium text-[14px]"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link href="/signUp">
                <button className="bg-[#4640DE] px-4 py-1 rounded-[80px] text-white font-epilogue font-medium text-[14px]">
                  SignUp
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-[#4640DE] px-4 py-1 rounded-[80px] text-white font-epilogue font-medium text-[14px]">
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
