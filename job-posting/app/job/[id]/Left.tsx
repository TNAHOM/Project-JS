import React from "react";
import jobs from "../../../public/jobs.json";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface IdType {
  id: number;
}

const left = ({ id }: IdType) => {
  const GetObject = jobs.job_postings[id];
  const responsibility = GetObject.responsibilities;
  const ideal_candidate = GetObject.ideal_candidate;

  return (
    <div className="flex flex-col gap-y-14 py-11">

      <div className="">
        <h2 className="main-line">Responsibility</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {responsibility.map((res, index) => (
            <li key={index} className="dark-small flex gap-2">
              <CheckCircleIcon className="size-6  text-[#56CDAD]" />
              {res}
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <h2 className="main-line">Ideal Candidates</h2>

        <ul className="list-disc flex flex-col gap-2">
          <li className="dark-small mt-4 font-bold">
            <b>
              {ideal_candidate.age} {ideal_candidate.gender} {GetObject.title}
            </b>
          </li>
          {ideal_candidate.traits.map((trait, index) => {
            const [boldPart, restOfText] = trait.split(":");

            return (
              <li key={index} className="dark-small">
                <strong>{boldPart}:</strong> {restOfText}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="main-line">When & Where</h2>
        <p className="dark-small mt-4">{GetObject.when_where}</p>
      </div>
    </div>
  );
};

export default left;
