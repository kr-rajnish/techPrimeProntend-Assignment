import { useLocation, Outlet, useNavigate } from "react-router-dom";

import "./sidebar.css";
import { ReactComponent as Dash } from "./image/Dashboard.svg";
import { ReactComponent as Proj } from "./image/Projectlist.svg";
import { ReactComponent as AddProj } from "./image/createproject.svg";
import { ReactComponent as Logout } from "./image/Logout.svg";
import { ReactComponent as Projsel } from "./image/Project-list-active.svg";
import { ReactComponent as Dashsel } from "./image/Dashboard-active.svg";
import { ReactComponent as AddProjsel } from "./image/create-project-active.svg";

import { Link } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's token from localStorage
    localStorage.removeItem("token");

    // Redirect to the signin page
    // window.location.href = "/logout"; // Alternatively, you can use history.push('/signin') if you have access to React Router's history.
    let logout = window.confirm("Do you want to logout ?");
    if (logout) {
      navigate("/login");
    }
  };
  const isActive = (section) => {
    // Check if the section's path matches the current location
    return location.pathname === section;
  };

  return (
    <>
      <aside id="sidebar">
        <ul className="sidebar-list">
          <div className="forboxde">
            <p className={`box ${isActive("") ? "selected" : ""}`}></p>
            <li className="sidebar-list-item">
              <Link to=""> {isActive("") ? <Dashsel /> : <Dash />}</Link>
            </li>
          </div>
          <div className="forboxde projectli">
            <p
              className={`box ${isActive("/projectlist") ? "selected" : ""}`}
            ></p>
            <li className="sidebar-list-item">
              <Link to="projectlist">
                {" "}
                {isActive("/projectlist") ? <Projsel /> : <Proj />}
              </Link>
            </li>
          </div>
          <hr className="line" />
          <div className="forboxde addproject">
            <p
              className={`box ${isActive("/createproject") ? "selected" : ""}`}
            ></p>
            <li className="sidebar-list-item">
              <Link to="createproject">
                {" "}
                {isActive("/createproject") ? <AddProjsel /> : <AddProj />}
              </Link>
            </li>
          </div>
          <div className="logout">
            <div className="forboxde">
              <p
                id="logoubox"
                className={`box ${isActive("/") ? "selected" : ""}`}
              ></p>
              <li className="sidebar-list-item">
                <div onClick={handleLogout}>
                  <Logout />
                </div>
              </li>
            </div>
          </div>
        </ul>
      </aside>
      <Outlet />
    </>
  );
}

export default Sidebar;
