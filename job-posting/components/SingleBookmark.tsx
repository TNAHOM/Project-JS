"use client";
import React from "react";
import Link from "next/link";
import Bookmark from "./bookmark";
import { getJob } from "@/app/utils/fetchById";
import { JobPosting, ResponseData } from "@/app/utils/types";
import { useSession } from "next-auth/react";

const SingleJob = async ({ eventId }: { eventId: number }) => {
  const { data: session } = useSession();
  const jobBook: ResponseData = await getJob(eventId);
  const job: JobPosting = jobBook.data;

  return (
    <div className="w-[100%]">
      <div className="col-span-9 flex gap-6 border rounded-[30px] py-[24px] px-[37px] w-[100%]">
        <div className="">
          <div className="w-20 ">
            {job.logoUrl !== "" ? (
              <img src={job.logoUrl} alt={job.logoUrl} className="w-20 h-20" />
            ) : (
              <p>Logo not avialable</p>
            )}
          </div>
        </div>
        <div className="">
          <div className="flex justify-between w-[100%]">
            <div className="flex justify-between w-[100%]">
              <Link href={`job/${job.id}`} key={job.id}>
                <div className="">
                  <h3 className="font-semibold text-xl font-epilogue">
                    {job.title}
                  </h3>
                  <p className="light-small">
                    {job.orgName}{" "}
                    <b className="font-black w-[4px] h-[4px]">.</b>{" "}
                    {job.location}
                  </p>
                </div>
              </Link>

              <div className="w-9 h-2">
                <button className="w-9 h-2">
                  <Bookmark
                    token={session?.user?.data?.accessToken}
                    job={job}
                  />
                </button>
              </div>
            </div>
          </div>
          <p className=" text-base leading-6 font-normal my-2 font-epilogue text-[#25324B]">
            {job.description}
          </p>
          <div className="flex gap-2">
            <p className="bg-[#56CDAD] bg-opacity-10 text-[#56CDAD] btn ">
              In Person
            </p>
            <p className="border border-[#FFB836] text-[#FFB836] btn">
              Education
            </p>
            <p className="btn border border-[#4640DE] text-[#4640DE] w-16 text-center">
              IT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
