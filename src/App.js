import React, { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Header from "./containers/Header";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const { width } = useWindowSize();

  return (
    <div className="font-primary text-darkGray bg-lightGray dark:bg-midnight transition transition-700">
      <div className="max-w-[1110px] mx-auto">
        <Header width={width} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                jobOffers={jobOffers}
                setJobOffers={setJobOffers}
                width={width}
              />
            }
          />
          <Route
            path="/job/:jobId"
            element={<JobDetail jobOffers={jobOffers} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
