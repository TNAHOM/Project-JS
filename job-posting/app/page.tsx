import JobList from "../components/job-list";

export default function Home() {
  return (
    <main className="px-32 py-16 rounded-[30px]">
      <div className="header flex justify-between mb-[32px]">
        <div className="">
          <h2 className="main-line">Opportunity</h2>
          <p className="light-small mt-1">Showing 73 results</p>
        </div>
        <div className="">
          <label htmlFor="" className="light-small">
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
  );
}
