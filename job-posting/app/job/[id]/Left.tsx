import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { getJob } from "@/app/utils/fetchById";
import { JobPosting, ResponseData } from "@/app/utils/types";
interface IdType {
  id: number;
}

const left = async ({ id }: IdType) => {
  const response: ResponseData = await getJob(id);
  const GetData: JobPosting = response.data; // Assuming the first item is the job we want

  const responsibility = GetData.responsibilities;
  const ideal_candidate = GetData.idealCandidate;
  const requirements = GetData.requirements;

  const responsibilitiesArray: string[] = responsibility
    .split("\n")
    .map((item: string) => item.trim())
    .filter((item: string) => item !== "");

  const ideal_candidateArray: string[] = ideal_candidate
    .split(",")
    .map((item: string) => item.trim())
    .filter((item: string) => item !== "");

  const requirementsArray: string[] = requirements
    .split("\n")
    .map((item: string) => item.trim())
    .filter((item: string) => item !== "");

  return (
    <div className="flex flex-col gap-y-14 py-11">
      <div className="">
        <h2 className="main-line">Responsibility</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {responsibilitiesArray.map((res, index) => (
            <li key={index} className="dark-small flex gap-2">
              <CheckCircleIcon className="size-6  text-[#56CDAD]" />
              {res}
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <h2 className="main-line mb-4">Ideal Candidates</h2>

        <ul className="list-disc flex flex-col gap-2">
          {ideal_candidateArray.map((trait, index) => {
            return (
              <li key={index} className="dark-small mb-2">
                {trait}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="">
        <h2 className="main-line mb-4">Requirments</h2>

        <ul className="list-disc flex flex-col gap-2">
          {requirementsArray.map((trait, index) => {
            return (
              <li key={index} className="dark-small mb-2">
                {trait}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="main-line">When & Where</h2>
        <p className="dark-small mt-4">{GetData.whenAndWhere}</p>
      </div>
    </div>
  );
};

export default left;
