import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from 'react';
import Navigation from "../pages/Navigation";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  const [sidebarOverlay, setsidebarOverlay] = useState(false);
  
  function sidebarToggle(){
    setsidebarOverlay(!sidebarOverlay);
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
          <div className="row">
            <div className="col-8 d-flex align-items-center">
              <h3>Mos Eisley&apos;s Vip Club</h3>
              <i role="btn" className={sidebarOverlay ? 'btn bi-list ms-2 d-block' : 'btn bi-list ms-2 d-block d-sm-none'} onClick={sidebarToggle}></i>
            </div>

            <div className="col-4 text-end">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          <div className="row flex-grow-1">
            <div id="sidebar" className={sidebarOverlay ? 'col-3 sidebar-overlay': "col-2 d-none d-sm-block"}>
              <Navigation></Navigation>
            </div>
            <div id="content" className="col">
                <Outlet />
            </div>
          </div>
        </div>
  )
};