import { Link } from "react-router-dom";

export default function Navigation() {

  return (
    <div id="navigation">
      <ul>
        <li><Link to={`units`}>Units</Link></li>
        <li><Link to={`ships`}>Ships</Link></li>
      </ul>
      
    </div>
  );
}
