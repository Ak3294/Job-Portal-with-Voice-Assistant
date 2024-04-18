import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
  } = data;

  const [showMore, setShowMore] = useState(false);

  // Function to toggle the showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Split the description into words and limit to 70 words
  const descriptionWords = description.split(" ").slice(0, 70).join(" ");
  const remainingWords = description.split(" ").slice(70).join(" ");

  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FaRupeeSign />
              {minPrice}-{maxPrice}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {postingDate}
            </span>
          </div>

          <p className="text-base">
            {/* Render the limited description */}
            {showMore ? `${descriptionWords} ${remainingWords}` : `${descriptionWords} ... `}
            {/* Render "View More" link if the description is longer */}
            {description.length > 70 && (
              <button
                onClick={toggleShowMore}
                className="text-primary underline cursor-pointer"
              >
                {showMore ? "View Less" : "View More"}
              </button>
            )}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
