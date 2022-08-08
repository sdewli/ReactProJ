import React from "react";
import {useParams} from 'react-router-dom';

export default function Resource({ data }) {
    const {id} = useParams();
  return (
    <div>
      {data &&
        data.map((resource) => {
          if (resource.id === id)
            return (
              <>
                <div >
                  {<img className="img2" src={resource.icon_url} />}
                  <span className="title">{resource.title}</span>
                  <span className="category">{resource.category}</span>
                </div>
                <div>
                  <span className="link">{resource.link}</span>
                  <span className="description">{resource.description}</span>
                </div>
              </>
            );
        })}
    </div>
  );
}
