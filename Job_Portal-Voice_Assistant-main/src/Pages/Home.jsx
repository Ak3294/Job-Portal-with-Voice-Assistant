import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Jobs from "./Jobs";
import Card from "../components/Card";
import Sidebar from "../Sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPages = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setIsLoading(false);
      });
  }, []);
  // console.log(jobs);

  // Handle Input Change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter Jobs by Title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio based Filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Button Based Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPages;
    const endIndex = startIndex + itemsPerPages;
    return { startIndex, endIndex };
  };

  //Function for the Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPages)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function for the Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Main Function
const filteredData = (jobs, selected, query) => {
  let filteredJobs = jobs;

  // Filtering Input Items
  if (query) {
    // Assuming filteredItems is defined somewhere
    filteredJobs = filteredItems; 
  }

  // Category Filtering
  if (selected) {
    filteredJobs = filteredJobs.filter(
      ({
        jobLocation,
        maxPrize,
        experienceLevel,
        salaryType,
        employmentType,
        postingDate,
        employmentEnvironment
      }) => {
        return (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrize) <= parseInt(selected) ||
          postingDate >= selected  ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase()=== selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          employmentEnvironment.toLowerCase() === selected.toLowerCase() 
        );
      }
    );
    console.log(filteredJobs);
  }

  // Slice the data based on current page
  const { startIndex, endIndex } = calculatePageRange();
  filteredJobs = filteredJobs.slice(startIndex, endIndex);

  return filteredJobs.map((data, i) => <Card key={i} data={data} />);
};

  const result = filteredData(jobs, SelectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main Contents*/}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-4 py-12">
        {/* Left Side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data Found!</p>
            </>
          )}

          {/* Pagination here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPages)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(filteredItems.length / itemsPerPages)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Right Side */}

        <div className="bg-white p-4 rounded"><Newsletter/> </div>
      </div>
    </div>
  );
};

export default Home;
