import React from "react";
import { useParams } from "react-router-dom";

export default function Resource({ data }) {
  const { id } = useParams();
  return (
    <div>
      {data &&
        data.map((resource) => {
          if (resource.id === id)
            return (
              <>
                <div className="Resource">
                  <div className="div2">
                    {<img className="img2" src={resource.icon_url} />}
                    <span className="title">{resource.title}</span>
                    <span className="">{resource.id}</span>
                    <span className="category">{resource.category}</span>
                  </div>
                  <div>
                    <span className="link">
                      <a href={resource.link}>{resource.link} </a>
                    </span>
                    <span className="description">{resource.description}</span>
                  </div>
                </div>
              </>
            );
        })}
    </div>
  );
}
