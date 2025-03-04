import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { students } from "./data";
import Footer from "./components/footer/Footer";

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
      <Footer/>

      <h1>es yvelaferi gaaketa maqsmaa</h1>
    </>
  );
}

export default App;
