import React, { useState, useEffect } from "react";
import { Jobs } from "../containers";

import {
  IconSearch,
  IconSearchPurple,
  IconFilter,
  IconLocation,
} from "../constants/images";

import data from "../data/data.json";
import { Button } from "../components";

const Home = ({ jobOffers, setJobOffers, width }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [toggleFilter, setToggleFilter] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  let filteredJobOffers;

  const filterJobs = () => {
    filteredJobOffers = jobOffers.filter(
      (jobOffer) =>
        (jobOffer.position.toLowerCase().includes(searchTerm) ||
          jobOffer.company.toLowerCase().includes(searchTerm) ) &&
        jobOffer.location.toLowerCase().includes(locationSearchTerm)
    );
    if (isChecked) {
      filteredJobOffers = filteredJobOffers.filter((jobOffer) => jobOffer.contract==="Full Time")
    }
    setSearchTerm("");
    setLocationSearchTerm("");
    setJobOffers(filteredJobOffers);
  };

  const handleOnClick = (event) => {
    filterJobs();
    setToggleFilter(false);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      filterJobs();
    }
  };

  const handleOnCheck = (e) => {
    if (e.target.checked){
      setIsChecked(true);
    } else {
      setIsChecked(false)
    }
  };

  useEffect(() => {
    setJobOffers(data);
  }, []);

  return (
    <main className="bg-transparent min-h-screen px-6 pb-8 max-w-[1110px] mx-auto xl:px-0">
      {width > 767 ? (
        <div className="bg-white dark:bg-veryDarkBlue p-4 rounded-md flex gap-4 justify-between -translate-y-2/4">
          <div className="flex items-center gap-4 border-r basis-1/3">
            <IconSearchPurple />
            <input
              type="text"
              placeholder="Filter by title..."
              className="bg-transparent text-midnight dark:text-white px-1"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              onKeyDown={handleOnKeyDown}
              value={searchTerm}
              autoFocus
            />
          </div>
          <div className="flex items-center gap-4 border-r basis-1/3">
            <IconLocation />
            <input
              type="text"
              placeholder="Filter by location..."
              className="bg-transparent text-midnight dark:text-white px-1"
              onChange={(e) => setLocationSearchTerm(e.target.value)}
              onKeyDown={handleOnKeyDown}
              value={locationSearchTerm}
            />
          </div>
          <div className="flex items-center basis-1/3">
            <input
              type="checkbox"
              name="fulltime"
              id="fulltime"
              onChange={handleOnCheck}
            />
            <label
              htmlFor="fulltime"
              className="text-midnight dark:text-white font-bold ml-2 mr-auto"
            >
              Full Time
            </label>
            <div onClick={handleOnClick}>
              <Button text={"search"} type={1} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-veryDarkBlue p-4 rounded-md flex justify-between -translate-y-2/4">
          <input
            type="text"
            placeholder="Filter by title..."
            className="bg-transparent"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleOnKeyDown}
            value={searchTerm}
          />
          <button onClick={() => setToggleFilter(true)}>
            <IconFilter />
          </button>
          <button className=" bg-violet p-2 rounded-md" onClick={handleOnClick}>
            <IconSearch />
          </button>
        </div>
      )}

      <Jobs jobOffers={jobOffers} />

      {toggleFilter && (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-[rgba(0,0,0,.6)]">
          <div
            className="fixed top-0 left-0 h-screen w-full z-0"
            onClick={() => setToggleFilter(false)}
          ></div>
          <div className="bg-white dark:bg-veryDarkBlue rounded-md p-6 relative z-50">
            <div className="flex gap-4 mb-6 border-b pb-6">
              <IconLocation />
              <input
                type="text"
                placeholder="Filter by location..."
                className="bg-transparent text-midnight dark:text-white px-1"
                onChange={(e) => setLocationSearchTerm(e.target.value)}
                onKeyDown={handleOnKeyDown}
                value={locationSearchTerm}
              />
            </div>
            <div className="flex gap-4 mb-6">
              <input
                type="checkbox"
                name="fulltime"
                id="fulltime"
                onChange={handleOnCheck}
              />
              <label
                htmlFor="fulltime"
                className="text-midnight dark:text-white font-bold"
              >
                Full Time Only
              </label>
            </div>
            <div>
              <div onClick={handleOnClick}>
                <Button text={"search"} type={1} fullWidth={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
