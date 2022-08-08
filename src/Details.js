import React, { useEffect, useState } from "react";
import Resource from "./Components/Resource";
import Table from "./Components/Table";

import "./App.css";

export default function Details() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://media-content.ccbp.in/website/react-assignment/resources.json`
    )
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);

  function handleClick() {}
  return (
    <div>
      <button onClick={handleClick}>{`<`}</button>
      {`Resources`}
      <Resource data={data} />
      <Table />
    </div>
  );
}
