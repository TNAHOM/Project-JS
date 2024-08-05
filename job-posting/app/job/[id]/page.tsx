import React from 'react'
import { JobPosting } from '@/app/utils/types'
import jobs from '../../../public/jobs.json'
import Left from './Left';
import Right from "./Right";

interface IdType {
  params: {
    id:number
  }
}

const page = ({params}:IdType) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 p-8">
        <Left id={params.id} />
      </div>
      <div className="col-span-1 p-8">
        <Right id={params.id} />
      </div>
    </div>
  );
}

export default page