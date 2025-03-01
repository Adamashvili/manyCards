import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { students } from "./data";

function App() {
 

  

  return (
    <>
      <Navbar />
      <div className="allCards">
      {
        students.map( (item) => (
          <Card key={item.id} surati={item.image} saxeli={item.firstName} gvari={item.lastName}/>
        ) )
      }
      </div>
      
    </>
  );
}

export default App;
