import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components";

const JobDetail = ({ jobOffers, width }) => {
  const { jobId } = useParams();
  const jobOffer = jobOffers.filter((jobOffer) => (jobOffer.id == jobId))[0];

  return (
    <>
      <main className="bg-lightGray dark:bg-midnight min-h-screen relative">
        <section className="bg-white dark:bg-veryDarkBlue rounded-md py-8 mx-6 mb-6 flex flex-col items-center -translate-y-4 sm:max-w-[689px] sm:mx-auto sm:flex-row sm:gap-10 sm:p-0 sm:overflow-hidden sm:pr-10 lg:max-w-[730px]">
          <div
            style={{ backgroundColor: jobOffer.logoBackground }}
            className="w-[50px] h-[50px] rounded-2xl flex justify-center items-center absolute top-[-25px] sm:relative sm:top-0 sm:w-[140px] sm:h-[140px] sm:rounded-none"
          >
            <img src={jobOffer.logo} alt="" />
          </div>
          <div className="mb-6 text-center sm:text-left sm:mb-0">
            <h2 className="text-fs_h2_lg font-fw_h2 leading-lh_h2 mb-[13px] text-veryDarkBlue dark:text-white">
              {jobOffer.company}
            </h2>
            <a href="#">{jobOffer.website}</a>
          </div>
          <div className="sm:ml-auto">
            <Button text={"company site"} />
          </div>
        </section>

        <div className="bg-white dark:bg-veryDarkBlue rounded-md py-10 px-6 mx-6 mb-16 sm:max-w-[689px] sm:mx-auto sm:p-12 lg:max-w-[730px]">
          <header className="mb-10 sm:flex sm:flex-wrap sm:justify-between sm:items-center">
            <div className=" mb-12">
              <div className="mb-3 flex items-center gap-2">
                {jobOffer.postedAt}{" "}
                <div className="w-1 h-1 bg-darkGray rounded-full"></div>{" "}
                {jobOffer.contract}
              </div>
              <h3 className="text-fs_h3_lg font-fw_h3 leading-lh_h3 mb-3 text-veryDarkBlue dark:text-white">
                {jobOffer.position}
              </h3>
              <h4 className="text-fs_h4_lg font-fw_h4 leading-lh_h4 text-violet">
                {jobOffer.location}
              </h4>
            </div>
            <div className="mb-8">
              <Button text={"Apply Now"} type={1} fullWidth={true} />
            </div>
            <div className="sm:basis-full">
              <p>{jobOffer.description}</p>
            </div>
          </header>
          <section className="mb-10">
            <h2 className="text-fs_h2_lg font-fw_h2 leading-lh_h2 mb-7 text-veryDarkBlue dark:text-white">
              Requirements
            </h2>
            <p className="mb-8">{jobOffer.requirements.content}</p>
            <ul className="list-disc px-4">
              {jobOffer.requirements.items.map((item, index) => {
                return (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-fs_h2_lg font-fw_h2 leading-lh_h2 mb-7 text-veryDarkBlue dark:text-white">
              What You Will Do
            </h2>
            <p className="mb-8">{jobOffer.role.content}</p>
            <ul className="list-decimal px-4">
              {jobOffer.role.items.map((item, index) => {
                return (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="bg-white dark:bg-veryDarkBlue p-6 sm:px-12">
        <div className="sm:flex sm:justify-between lg:max-w-[730px] mx-auto">
          <div>
            <h2 className="text-fs_h2_lg font-fw_h2 leading-lh_h2 text-midnight dark:text-white">
              {jobOffer.position}
            </h2>
            <p>{jobOffer.company}</p>
          </div>
          <Button
            text={"Apply Now"}
            type={1}
            fullWidth={width > 767 ? false : true}
          />
        </div>
      </footer>
    </>
  );
};

export default JobDetail;
