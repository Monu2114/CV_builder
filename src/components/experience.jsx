import React, { useState } from "react";
function Education({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2>Experience:</h2>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={data.position}
            onChange={handleChange}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={data.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="start"
            value={data.start}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="end"
            value={data.end}
            onChange={handleChange}
          />
        </label>
        <label>
          Work summary:
          <input
            type="text"
            name="work"
            value={data.work}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
export default Education;
