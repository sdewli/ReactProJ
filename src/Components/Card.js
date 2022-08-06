import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ data, searchText }) {
  return (
    <div className="grid-container">
      {data &&
        data
        .map((val) => {
          return (
            <>
              <Link to={`/resource/${val.id}`}>
                <div className="grid-item" key={val.id}>
                  {console.log(val)}
                  <div className="div1">
                    {<img className="img2" src={val.icon_url} />}
                    <span className="title">{val.title}</span>
                    <span className="category">{val.category}</span>
                  </div>
                  <div>
                    <span className="link">{val.link}</span>
                    <span className="description">{val.description}</span>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
}
