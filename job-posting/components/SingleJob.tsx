import React from "react";
import { JobPosting } from "@/app/utils/types";

const SingleJob = ({ job }: { job: JobPosting }) => {
  return (
    <div className="flex gap-6 border rounded-[30px] py-[24px] px-[37px]">
      <div className="">
        <div className="w-20 ">
          <img
            src={`/images${job.image}`}
            alt={job.image}
            className="w-20 h-20"
          />
        </div>
      </div>
      <div className="">
        <h3 className="font-semibold text-xl font-epilogue">{job.title}</h3>
        <p className="light-small">
          {job.company} <b className="font-black w-[4px] h-[4px]">.</b>{" "}
          {job.about.location}
        </p>
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
  );
};

export default SingleJob;
