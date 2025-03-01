import "./Card.css"

export default function Card({surati, saxeli, gvari}) {

    
  return (
    <div className="card">
      <img src={surati} alt="" />
      <h1>{saxeli} {gvari}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, error
        officiis quas voluptatum tenetur nisi ducimus quasi voluptatem dolorum
        animi. Rerum dolorem animi, repellat perspiciatis laborum modi
        consequuntur? Perspiciatis, expedita.
      </p>
      <button>Click me</button>
    </div>
  );
}
