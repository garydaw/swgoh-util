import { Link, useLoaderData } from "react-router-dom";


export async function unitLoader() {
  const data = await fetch('http://localhost:5000/api/player/832233694/unit').then(r => r.json());
  return data;
}

export default function Units() {

  //const units = useLoaderData();
 const units = [];
  return (
    <div>
      <h4>Units</h4>
      {units.length ? (
            <ul>
              {units.map((unit) => (
                <li key={unit.base_id}>
                  <Link to={`${unit.base_id}`}>{unit.character_name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Units</p>
          )}
    </div>
  );
}
