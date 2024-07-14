import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/experience.jsx";
import "./App.css";
export default function App() {
  const [page, setPage] = useState(1);
  const handleNext = () => {
    setPage((page + 1) % 4);
  };
  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  return (
    <div className="container">
      <div className="form-container">
        {page === 1 && <GeneralInfo data={data} setData={setData} />}
        {page === 2 && <Education data={education} setData={setEducation} />}
        {page === 3 && <Experience data={experience} setData={setExperience} />}
        <div className="button">
          <button onClick={handlePrev} disabled={page === 1}>
            Prev
          </button>
          <button onClick={handleNext} disabled={page === 3}>
            Next
          </button>
        </div>
      </div>
      <div className="resume">
        <div className="personal">
          <p class="name">
            {data.fname} {data.lname}
          </p>
          <p> {data.email}</p>
          <p> {data.phone}</p>
        </div>
        <div className="education">
          <p>{education.College}</p>
          <p>{education.degree}</p>
          <p>{education.graduation}</p>
        </div>
        <div className="experience">
          <p class="company">Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Start Date: {experience.start}</p>
          <p>End Date: {experience.end}</p>
          <p>Work Summary: {experience.work}</p>
        </div>
      </div>
    </div>
  );
}
