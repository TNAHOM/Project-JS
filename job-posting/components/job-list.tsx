import React from "react";
import SingleJob from "./SingleJob";
import { JobPosting } from "@/app/utils/types";
import { getServerSession } from "next-auth";

const JobList = async () => {
  const session = await getServerSession();

  const getJob = async () => {
    const res = await fetch(
      "https://akil-backend.onrender.com/opportunities/search",
      {
        headers: {
          Authorization: `Bearer ${session?.user?.data?.accessToken}`,
        },
      }
    );
    const resJson = await res.json();
    return resJson;
  };
  const data = await getJob();

  return (
    <div className="flex flex-col gap-8">
      {data.data.map((job: JobPosting) => (
        <div key={job.id}>
          <SingleJob job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
