import React from "react";
import {
  CalendarDaysIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/solid";
import { getJob } from "@/app/utils/fetchById";
import { ResponseData, JobPosting } from "@/app/utils/types";
import { formatDate } from "@/app/utils/formatDate";

interface IdType {
  id: number;
}

const Right = async ({ id }: IdType) => {
  const response: ResponseData = await getJob(id);
  const GetData: JobPosting = response.data; // Assuming the first item is the job we want

  const requiredSkills: string[] = GetData.requiredSkills;
  const datePosted = formatDate(GetData.datePosted);
  const deadline = formatDate(GetData.deadline);
  const startDate = formatDate(GetData.startDate);
  const endDate = formatDate(GetData.endDate);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="main-line">About</h2>
          <div className="right-about">
            <CalendarDaysIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Posted On</p>
              <p>{datePosted}</p>
            </div>
          </div>
          <div className="right-about">
            <FireIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Deadline</p>
              <p>{deadline}</p>
            </div>
          </div>
          <div className="right-about">
            <MapPinIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Location</p>
              <p>{GetData.location}</p>
            </div>
          </div>
          <div className="right-about">
            <CalendarIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Start Date</p>
              <p>{startDate}</p>
            </div>
          </div>
          <div className="right-about">
            <CalendarDaysIcon className="heroi-icons" />
            <div className="inner-about">
              <p>End Date</p>
              <p>{endDate}</p>
            </div>
          </div>
        </div>

        <hr className="text-[#D6DDEB] border" />

        <div className="flex flex-col gap-5">
          <h2 className="main-line">Catagories</h2>
          <div className="flex gap-2">
            <p className="bg-[#FFB836] bg-opacity-10 text-[#FFB836] btn font-medium">
              Marketing
            </p>

            <p className="bg-[#56CDAD] bg-opacity-10 text-[#56CDAD] btn font-medium">
              Design
            </p>
          </div>
        </div>

        <hr className="text-[#D6DDEB] border" />

        <div className="flex flex-col gap-5">
          <h2 className="main-line">Required Skill</h2>
          <div className="flex flex-wrap gap-2">
            {requiredSkills.map((skill, index) => (
              <p key={index} className="text-[#4640DE] bg-[#F8F8FD] py-1 px-3">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
