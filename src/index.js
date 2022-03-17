import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Card from "./Cards";
import Dvalues from "./Dvalues";

function netcard(val) {
   return(
    <Card
    sname={val.sname}
    imgsrc={val.imgsrc}
    title={val.title}
    link={val.link}
    />
    );
                      }

ReactDOM.render(
   <>
  <h1 className='heading_style'> List Of Top 6 Netflix Series For All Time </h1>
   {Dvalues.map(netcard)}
   </> ,
  document.getElementById("root")
);

