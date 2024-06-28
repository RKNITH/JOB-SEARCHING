import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <section className="howitworks">
      <div className="container">
        <h3>How Careermatch Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Sign up with Careermatch to unlock personalized job search,
              recruitment, and networking opportunities. Build your profile and
              showcase your skills and experience to employers.
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job/Post a Job</p>
            <p>
              Browse through a wide range of job listings tailored to your
              preferences. Employers can post job openings to attract qualified
              candidates and manage applications seamlessly.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Apply For Job/Recruit Suitable Candidates</p>
            <p>
              Apply for jobs that match your career goals and qualifications.
              Employers can review applications, schedule interviews, and hire
              suitable candidates directly through Careermatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
