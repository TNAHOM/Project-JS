// "use client";

// import { useSession } from "next-auth/react";
import JobList from "../components/job-list";

export default function Home() {
  // const { data: session, status } = useSession();

  return (
    <>
      {/* {session ? (
        <p>Welcome, {session.user?.name}</p>
      ) : (
        <p>You are not logged in.</p>
      )} */}
      <main className="px-32 py-16 rounded-[30px]">
        <div className="header flex justify-between mb-[32px]">
          <div>
            <h2 className="main-line">Opportunity</h2>
            <p className="light-small mt-1">Showing 73 results</p>
          </div>
          <div>
            <label htmlFor="filter" className="light-small">
              Sort by:
            </label>
            <select
              name="filter"
              id="filter"
              className="ml-2 font-epilogue leading-6 font-medium text-[#25324B]"
            >
              <option value="Most relevant">Most relevant</option>
              <option value="Most Recent">Most Recent</option>
              <option value="This weeks">This weeks</option>
            </select>
          </div>
        </div>
        <JobList />
      </main>
    </>
  );
}
