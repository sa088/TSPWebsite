import React from "react";
import styles from "./Careers.module.scss";
import { careersContent, jobOpenings } from "@/data/careersData";
import { IoCheckbox } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const JobCard = ({ title, type, location, description }) => {
    return (
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-5 p-4 lg:p-6 ${styles.jobCard}`}>
            <div className="flex flex-col items-start gap-2 md:gap-3 min-w-[160px] lg:min-w-[200px]">
                <p className={styles.jobType}>{type}</p>
                <p className={styles.jobTitle}>{title}</p>
                <div className={styles.jobLocation}>
                    <BiMap size={20} color="#1E1E1E" />
                    <p>{location}</p>
                </div>
            </div>
            <div className="text-[14px] font-[500] text-[#1E1E1EB2]">
                <p>{description}</p>
            </div>
            <button className={styles.contactButton}>
                <div className={styles.contactButtonWrapper}>
                    Apply Now <FaArrowRight size={30} className={styles.arrowIcon} />
                </div>
            </button>
        </div>
    );
};

const Careers = () => {
    return (
        <div className={styles.careersContainer}>
            {/* Hero Section */}
            <section className={styles.bannerSection}>
                <div className={styles.bannerContent}>
                    <p className={styles.mainHeading}>Careers</p>
                    <h1 className={styles.heroTitle}>{careersContent.heroTitle}</h1>
                </div>
            </section>

            <div className={styles.careersContentContainer}>
                {/* Why Choose Us */}
                <section className={styles.whySection}>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-6/12">
                            <h2 className="text-[24px] lg:text-[28px] font-[700] mb-5">
                                {careersContent.whyTitle}
                            </h2>
                            <div className="flex flex-col gap-4 text-[16px] lg:text-[18px] font-[500] mb-6">
                                <p>{careersContent.whyDescription01}</p>
                                <p>{careersContent.whyDescription02}</p>
                                <p>{careersContent.whyDescription03}</p>
                            </div>
                        </div>
                        <div className="lg:w-6/12 flex justify-center items-center">
                            <img
                                src={careersContent.whyImg}
                                alt="Work culture"
                                className={styles.whyImage}
                            />
                        </div>
                    </div>
                    <div>
                        <ul className="list-none space-y-2">
                            {careersContent.whyPoints.map((point, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <IoCheckbox size={28} color="#00ba00" />
                                    <div className="text-[16px] lg:text-[18px] font-[500] text-[#1E1E1EB2]">
                                        {point}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Job Listings */}
                <section className={styles.jobsSection}>
                    <div className={styles.jobsBox}>
                        <h3 className="text-[24px] lg:text-[28px] font-[500] text-[#FFFFFF] text-center mb-10">
                            View Current Job Openings
                        </h3>
                        <div className={styles.jobOpeningsContainer}>
                            <div className={styles.jobOpeningsWrapper}>
                                {jobOpenings.map((job, index) => (
                                    <JobCard key={index} {...job} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Careers;