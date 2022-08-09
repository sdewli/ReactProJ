import React, { useState } from "react";
import { useEffect } from "react";

export default function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://media-content.ccbp.in/website/react-assignment/resource/${resource_id}.json",
      {
        method: "POST",
      }
    )
      .then((response) => response.json)
      .then((Actualdata) => setData(Actualdata));
  }, []);
  return <div></div>;
}
