import Link from "next/link";

import React from "react";
import SingleJob from "./SingleJob";
import { JobPosting } from "../app/utils/types";

import jobs from "../public/jobs.json";

const JobList = async () => {

  return (
    <div className="flex flex-col gap-8 ">
      {jobs.job_postings.map((job: JobPosting, index) => (
        <Link href={`job/${index}`} key={index}>
          <SingleJob key={index} job={job} />
        </Link>
      ))}
    </div>
  );
};

export default JobList;
