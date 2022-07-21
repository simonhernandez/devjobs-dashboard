import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ jobOffer }) => {
  return (
    <Link to={`/job/${jobOffer.id}`}>
      <div className="bg-white dark:bg-veryDarkBlue p-8 rounded-md relative lg:py-12">
        <div
          style={{ backgroundColor: jobOffer.logoBackground }}
          className="w-[50px] h-[50px] rounded-2xl flex justify-center items-center absolute top-[-25px]"
        >
          <img src={jobOffer.logo} alt="" />
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2 lg:mb-[13px]">
            {jobOffer.postedAt}{" "}
            <div className="w-1 h-1 bg-darkGray rounded-full"></div>{" "}
            {jobOffer.contract}
          </div>
          <h3 className="text-fs_h3_lg font-fw_h3 leading-lh_h3 mb-3 text-veryDarkBlue dark:text-white lg:mb-[17px]">
            {jobOffer.position}
          </h3>
          <p className="mb-3 lg:mb-11">{jobOffer.company}</p>
        </div>
        <div>
          <h4 className="text-fs_h4_lg font-fw_h4 leading-lh_h4 text-violet">
            {jobOffer.location}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
