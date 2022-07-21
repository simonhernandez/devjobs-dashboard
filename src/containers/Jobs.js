import React, { useState } from "react";
import { Button, JobCard } from "../components";

const Jobs = ({ jobOffers }) => {
  const [shownCardsNumber, setShownCardsNumber] = useState(12);
  const [showMore, setShowMore] = useState(false);

  const handleOnClick = () => {
    setShowMore(true);
    setShownCardsNumber(jobOffers.length);
  }

  return (
    <section>
      <ul className="flex flex-wrap justify-start gap-4 xl:gap-[30px]">
        {jobOffers.slice(0, shownCardsNumber).map((jobOffer, index) => {
          return (
            <li className="mb-9 max-w-[350px] lg:max-w-[312px] xl:max-w-[350px] w-full" key={index}>
              <JobCard jobOffer={jobOffer} />
            </li>
          );
        })}
      </ul>
      {jobOffers.length > 12 && !showMore && (
        <div className="flex justify-center" onClick={handleOnClick}>
          <Button text={"show more"} type={1} />
        </div>
      )}
    </section>
  );
};

export default Jobs;
