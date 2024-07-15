import React, { useState } from "react";
import "../styles/general.css";
export default function Education({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div class="edu">
        <h2>Education Details:</h2>
        <label>
          College:
          <input
            type="text"
            name="College"
            value={data.College}
            onChange={handleChange}
          />
        </label>
        <label>
          Degree:
          <input
            type="text"
            name="degree"
            value={data.degree}
            onChange={handleChange}
          />
        </label>
        <label>
          Graduation Year:
          <input
            type="text"
            name="graduation"
            value={data.graduation}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}
