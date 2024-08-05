import React from "react";
import jobs from "../../../public/jobs.json";
import {
  CalendarDaysIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/solid";

interface IdType {
  id: number;
}

const Right = ({ id }: IdType) => {
  const GetObject = jobs.job_postings[id];
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="main-line">About</h2>
          <div className="right-about">
            <CalendarDaysIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Posted On</p>
              <p>{GetObject.about.posted_on}</p>
            </div>
          </div>
          <div className="right-about">
            <FireIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Deadline</p>
              <p>{GetObject.about.deadline}</p>
            </div>
          </div>
          <div className="right-about">
            <MapPinIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Location</p>
              <p>{GetObject.about.location}</p>
            </div>
          </div>
          <div className="right-about">
            <CalendarIcon className="heroi-icons" />
            <div className="inner-about">
              <p>Start Date</p>
              <p>{GetObject.about.start_date}</p>
            </div>
          </div>
          <div className="right-about">
            <CalendarDaysIcon className="heroi-icons" />
            <div className="inner-about">
              <p>End Date</p>
              <p>{GetObject.about.end_date}</p>
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
            {GetObject.about.required_skills.map((skill, index) => (
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
