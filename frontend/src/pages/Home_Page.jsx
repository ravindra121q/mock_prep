import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add_Data_Handler } from "../redux/Post_Data_Reducer/action";

export const Home_Page = () => {
  const [company, setCompany] = useState("");
  const [postedAt, setPostedAt] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [contract, setContract] = useState("");
  const [position, setPosition] = useState("");
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const AddPost_Handler = (e) => {
    e.preventDefault();
    if (
      !company ||
      !postedAt ||
      !city ||
      !location ||
      !role ||
      !level ||
      !contract ||
      !position ||
      !language
    )
      return alert("Please fill all the fields");
    let object = {
      company,
      postedAt,
      city,
      location,
      role,
      level,
      contract,
      position,
      language,
    };
    console.log("working");
    dispatch(Add_Data_Handler(object));
  };
  return (
    <div>
      <h1>Add Job</h1>
      <form
        onSubmit={AddPost_Handler}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "20%",
          margin: "auto",
          fontSize: "20px",
          border: "1px solid black",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          name="company"
          placeholder="company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          name="postedAt"
          placeholder="postedAt"
          onChange={(e) => setPostedAt(e.target.value)}
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
          <option value="">Select a role</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>

        <input
          type="text"
          name="level"
          placeholder="level"
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          type="text"
          name="contract"
          placeholder="contract"
          onChange={(e) => setContract(e.target.value)}
        />
        <input
          type="text"
          name="position"
          placeholder="position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          name="language"
          placeholder="language"
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};
