import React from "react";
function GeneralInfo({ data, setData }) {
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
      <h2>Personal Details:</h2>
      <label>
        First Name:
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default GeneralInfo;
