import Card from "./Cards.jsx";
import Dvalues from "./Dvalues";

function App() {
  return (
    <>
  <h1 className='heading_style'> List Of Top 6 Netflix Series For All Time </h1>
  {Dvalues.map(val =>  <Card
  key={val.sname}
    sname={val.sname}
    imgsrc={val.imgsrc}
    title={val.title}
    link={val.link}
    />)}
</>
  )
    
}

export default App;
