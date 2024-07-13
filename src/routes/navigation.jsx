import { Link } from "react-router-dom";

export default function Navigation() {

  const style = "list-group-item list-group-item-action";
  
  return (

    <div className="list-group list-group-flush">
      <a href="#" className={style}><Link to={`units`} className="nav-link">Units</Link></a>
      <a href="#" className={style}><Link to={`ships`} className="nav-link">Ships</Link></a>
      <a href="#" className={style}><Link to={`tw`} className="nav-link">Wars</Link></a>
      <a href="#" className={style}><Link to={`tw/war`} className="nav-link ms-3">War</Link></a>
      <a href="#" className={style}><Link to={`tw/admin`} className="nav-link ms-3">admin</Link></a>
    </div>
  );
}
