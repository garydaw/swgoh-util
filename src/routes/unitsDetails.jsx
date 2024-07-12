import { useLoaderData } from "react-router-dom";

export async function unitDetailsLoader({ params }) {
  return params;
}

export default function UnitDetails() {
  const unit = useLoaderData();
  console.log(unit);
  return (
    <div id="unitsDetails">
     {unit.base_id}
    </div>
  );
}
