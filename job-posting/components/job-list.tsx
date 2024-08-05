import Link from "next/link";

import React from "react";
import SingleJob from "./SingleJob";
import { JobPosting } from "@/app/utils/types";

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
    <div className="flex flex-col gap-8 ">
      {data.data.map((job: JobPosting) => (
        <Link href={`job/${job.id}`} key={job.id}>
          <SingleJob key={job.id} job={job} />
        </Link>
      ))}
    </div>
  );
};

export default JobList;
