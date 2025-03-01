import "./Card.css"

export default function Card({surati, saxeli, gvari}) {

    
  return (
    <div className="card">
      <img src={surati} alt="" />
      <h1>{saxeli} {gvari}</h1>
      <p>
        idk raghaca
      </p>
      <button>Click me</button>
    </div>
  );
}
