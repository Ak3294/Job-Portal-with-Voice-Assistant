import React from 'react';
import { Link } from 'react-router-dom';

const ApplyCard = ({ data }) => {
    // Check if data is defined before destructuring
    if (!data) {
        // Return null or handle the case when data is undefined
        return null;
    }

    const { companyName = '', jobTitle = '', companyLogo = '' } = data;

    return (
        <section className="card">
            <Link to={"/applynow"} className="flex gap-4 flex-col sm:flex-row items-start">
                {/* Handle the case when companyLogo is not provided */}
                {companyLogo && <img src={companyLogo} alt={`${companyName} logo`} />}
                <div>
                    {/* Render companyName and jobTitle conditionally */}
                    {companyName && <h4 className="text-primary mb-1">{companyName}</h4>}
                    {jobTitle && <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>}
                </div>
            </Link>
        </section>
    );
};

export default ApplyCard;
