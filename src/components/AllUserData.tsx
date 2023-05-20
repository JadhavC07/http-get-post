import React, { useEffect, useState } from "react";
import "./AllUserData.css";
import axios from "axios";

const AllUsersData: React.FC<{ getUserAxios: () => void }> = ({
  getUserAxios,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const getUserData = () => {
    const newUserData = {
      id: Math.random(),
      email,
      password,
      date: new Date(),
    };
    console.table(newUserData);

    axios({
      method: "post",
      url: "http://localhost:3001/add",
      data: newUserData,
    })
      .then(function (response) {
        console.log(response);
        getUserAxios();
      })
      .catch(function (error) {
        console.log(error);
      });

    setEmail("");
    setPassWord("");
  };

  return (
    <>
      <form className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            💌
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="User E-mail"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
            🔑
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Set PassCode"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <div className="center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={getUserData}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AllUsersData;
