import { Outlet} from "react-router-dom";
import Navigation from "./navigation";

export default function Root() {
  
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <h3>Mos Eisley&apos;s Vip Club</h3>
              <i className="bi-list ms-2"></i>
            </div>

            <div className="col-md-3 offset-md-3 text-end">
              Player stuff
            </div>
          </div>
          <div className="row flex-grow-1">
            <div id="sidebar" className="col-2">
              <Navigation></Navigation>
            </div>
            <div id="content" className="col">
                <Outlet />
            </div>
          </div>
        </div>
    );
  }