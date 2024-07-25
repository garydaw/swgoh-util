import { Link, useLoaderData } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useData } from "../hooks/useData";

export async function unitLoader() {
  
  
  const data = await fetch('http://localhost:5000/api/player/'+player+'/unit').then(r => r.json());
  return data;
}

export default function Units() {
  //const units = useLoaderData();
  const { player } = useData();
  const {user, admin} = useAuth();
  const units = [];
  return (
    <div>
      <h4>Units for {user} is admin {admin}, player from data {player}</h4>
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
