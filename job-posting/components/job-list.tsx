import Link from "next/link";
import React from "react";
import SingleJob from "./SingleJob";
import { JobPosting } from "@/app/utils/types";
import { BookmarkIcon } from "@heroicons/react/16/solid";

const JobList = async () => {
  const getJob = async () => {
    const res = await fetch(
      "https://akil-backend.onrender.com/opportunities/search"
    );
    const resJson = await res.json();
    return resJson;
  };
  const data = await getJob();

  return (
    <div className="flex flex-col gap-8">
      {data.data.map((job: JobPosting) => (
        <div key={job.id} className="grid grid-flow-col grid-cols-[94%_6%] gap-4">
          <Link href={`job/${job.id}`} key={job.id}>
            <SingleJob job={job} />
          </Link>
          <Link href="/">
            <div className="w-9 ">
              <BookmarkIcon className="text-[20px] text-black col-span-1 " />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
