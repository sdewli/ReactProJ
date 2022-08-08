import { React, useState, useEffect, useMemo } from "react";
import Request from "./Request";
import Card from "./Card";
import Users from "./Users";
import Search from "./Search";

export default function Nav() {
  const [active, setActive] = useState("Resource");
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((resource) =>
      resource.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, data]);

  const onSearchChange = (val) => {
    setSearchText(val);
  };

  useEffect(() => {
    fetch(
      `https://media-content.ccbp.in/website/react-assignment/resources.json`
    )
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);

  return (
    <>
      <div className="nav">
        <button
          className={active === "Resource" ? " btn1" : "btn"}
          onClick={() => setActive("Resource")}
        >
          Resource
        </button>
        <button
          className={active === "Request" ? " btn1" : "btn "}
          onClick={() => setActive("Request")}
        >
          Request
        </button>
        <button
          className={active === "Users" ? "btn1" : "btn"}
          onClick={() => setActive("Users")}
        >
          Users
        </button>
      </div>

      <div className="main-container">
        <Search value={searchText} onSearchChange={onSearchChange} />
        {active === "Resource" && (
          <Card data={filteredData} searchText={searchText} />
        )}
        {active === "Request" && <Request data={filteredData} />}
        {active === "Users" && <Users data={filteredData} />}
      </div>
    </>
  );
}
