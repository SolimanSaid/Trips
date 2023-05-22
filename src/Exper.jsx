import React from "react";
import Exper2 from "./Exper2";

export default function Exper({ toursList }) {
  return (
    <div className="hallo">
      {/* {toursList.map(items=><div><img src={items.image} alt={items.title} />
      
      <p>{items.title}</p> */}
      {toursList.map((e) => (
        <div>
          {e.title}

          <div>
            <Exper2 rating={e.rating} />
          </div>
        </div>
      ))}

      {/* </div>)} */}
    </div>
  );
}
