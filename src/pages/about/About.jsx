import { useState } from "react";
import Exper from "../../Exper";
import dubi from "../../images/dubaiii.jpg.jpg";
import aa from "../../images/newsletterimage.jpg";
import { toursList } from "../../data";
const About = () => {
  const [numbers, setnumbers] = useState(1);
  const [number, setnumber] = useState("recommended");
  const slices = 6;
  const pages = toursList.length / slices;
  const order =
    number === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : number === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const start = (numbers - 1) * slices;
  const end = numbers * slices;
  const fun = order.slice(start, end);

  let one = [];
  for (let i = 1; i <= pages; i++) {
    one.push(i);
  }

  // const[curentpage,setcurenpage]=useState(1);
  // const[sort , setSort]=useState("recommended")
  // const tours=6;
  // const pages= toursList.length / tours;
  // const star=(curentpage -1) * tours;
  // const end=curentpage * tours;
  // const order=sort==="low"?toursList.sort((a,b)=>a.priceFrom-b.priceFrom):sort==="high"?toursList.sort((a,b)=>b.priceFrom - a.priceFrom):
  // toursList.sort((a,b)=>b.rating - a.rating)
  // const fun=toursList.slice(star,end)
  // const fun= order.slice(star,end)

  // const one=[];
  // for(let i=1; i<=pages; i++){
  //   one.push(i)
  // }

  return (
    <div className="about">
      <h1>About This App</h1>
      <p>This app is all about booking safari desert tour in Dubai</p>
      <div>
        <img src={aa} />
      </div>
      <p>
        <strong>Version: 1.0.0</strong>
        {/* <Exper toursList={toursList}/> */}
        <div className="PP">
          {" "}
          {fun.map((e) => (
            <div>
              {e.title}
              <br></br>
              {e.rating}
              {<br></br>}
              {e.priceFrom}{" "}
            </div>
          ))}
        </div>
      </p>

      <div className="papy">
        <button
          disabled={numbers === 1}
          onClick={() => setnumbers((prev) => prev - 1)}
        >
          previos
        </button>
        {one.map((e) => (
          <div
            onClick={() => setnumbers(e)}
            className={numbers === e ? "active" : ""}
          >
            {e}
          </div>
        ))}

        <button
          disabled={numbers === pages}
          onClick={() => setnumbers((prev) => prev + 1)}
        >
          next
        </button>
        {/* <select onChange={(e)=>setSort(e.target.value)} value={sort}>
        <option value="recommended">recommended</option>
        <option value="low">low</option>
        <option value="high">high</option>

       </select>  */}
        <select onChange={(e) => setnumber(e.target.value)} value={number}>
          <option value="recommended">recommended</option>
          <option value="low">low</option>
          <option value="high">high</option>
        </select>
      </div>
    </div>
  );
};

export default About;
