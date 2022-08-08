import React, { useEffect, useState } from "react";
import Resource from "./Components/Resource";
import Table from "./Components/Table";
import { useNavigate } from "react-router-dom";

import "./App.css";

export default function Details() {
  const [data, setData] = useState([]);
  const Navigate=useNavigate();
  useEffect(() => {
    fetch(
      `https://media-content.ccbp.in/website/react-assignment/resources.json`
    )
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);

  function handleClick(){
  Navigate('/')
  }
  return (
    <div>
      <button onClick={handleClick}>{`<`}</button>
      {`Resources`}
      <Resource data={data} />
      <Table />
    </div>
  );
}
