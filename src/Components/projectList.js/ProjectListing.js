import React, { useState, useEffect } from "react";
import Logo from "../image/Logo.svg";
import "./ProjectList.css";
import back from "../image/Headerbg.svg";
import { filterData } from "../dataUtils";

const dummyData = [
  {
    _id: 1,
    name: "Project 1",
    reason: "Business",
    type: "External",
    division: "Filters",
    category: "Quality A",
    priority: "High",
    dept: "Finance",
    location: "Pune",
    status: "Registered",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2023-10-15"),
  },
  {
    _id: 2,
    name: "Project 2",
    reason: "Dealership",
    type: "Internal",
    division: "Compressor",
    category: "Quality B",
    priority: "Medium",
    dept: "HR",
    location: "Ranchi",
    status: "Running",
    startDate: new Date("2023-11-05"),
    endDate: new Date("2023-11-20"),
  },
  // Add more dummy data as needed
];

function ProjectListing() {
  const [data, setData] = useState(dummyData);
  const [filteredData, setFilteredData] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortPriority, setSortPriority] = useState("");

  //for search
  useEffect(() => {
    // Use the imported filterData function
    const filteredResults = filterData(data, searchTerm);
    const sortedData = sortData(filteredResults, sortPriority);
    setFilteredData(sortedData);
  }, [searchTerm, data, sortPriority]);

  // function handleStatusChange(newStatus, id) {

  // }

  //sort deta
  const sortData = (data, priority) => {
    const customOrders = {
      High: ["High", "Medium", "Low"],
      Medium: ["Medium", "Low", "High"],
      Low: ["Low", "Medium", "High"],
    };

    if (priority in customOrders) {
      return data.sort((a, b) => {
        const order = customOrders[priority];
        return order.indexOf(a.priority) - order.indexOf(b.priority);
      });
    } else {
      // If the selected priority is not in customOrders, sort without custom order
      return data.sort((a, b) => (a.priority > b.priority ? 1 : -1));
    }
  };

  //active btn
  const getStatusClass = (status, currentStatus) => {
    if (status === currentStatus) {
      return "active-button";
    }
    return "";
  };
  //-----
  const [cuurrentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 7;
  const lastIndex = cuurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // ... Rest of your code remains the same

  return (
    <main className="main-container">
      <img
        className="back"
        src={back}
        alt="back"
        // style={{ position: "relative" }}
      />
      <div className="main-container-main">
        <div
          className="main-container-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-170%)",
          }}
        >
          <h2
            className="creatprojecttital"
            style={{ marginLeft: "5%", marginTop: "2%" }}
          >
            Project List
          </h2>
          <div style={{ marginRight: "45%" }}>
            <img className="logo" src={Logo} />
          </div>
        </div>
      </div>
      <div
        className="main-container-main"
        style={{ transform: "translateY(-110px)" }}
      >
        <div className="Projectlisttable">
          <div className="projectlisttop">
            <div>
              <input
                className="ProjectlistSinput"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="Sortedby">
              <span>Sort By: </span>
              <select
                id="SortBy"
                name="SortBy"
                value={sortPriority}
                onChange={(e) => setSortPriority(e.target.value)}
              >
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <table className="table fordesktop">
            <thead>
              <th>Project Name</th>
              <th>Reason</th>
              <th>Type</th>
              <th>Divisions</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Dept.</th>
              <th>Location</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              {records.map((item, i) => (
                <tr key={i}>
                  <td>
                    {item.name}
                    <p className="dateanddate">
                      {item.startDate != null
                        ? new Date(item.startDate).toLocaleDateString()
                        : "null"}{" "}
                      to{" "}
                      {item.endDate != null
                        ? new Date(item.endDate).toLocaleDateString()
                        : "null"}
                    </p>
                  </td>
                  <td>{item.reason}</td>
                  <td>{item.type}</td>
                  <td>{item.division}</td>
                  <td>{item.category}</td>
                  <td>{item.priority}</td>
                  <td>{item.dept}</td>
                  <td>{item.location}</td>
                  <td>
                    <p className="projectlistStatus">{item.status}</p>
                  </td>
                  <td>
                    <button
                      className={`projectlistStatusbtn ${getStatusClass(
                        item.status,
                        "Running"
                      )}`}
                      // onClick={() => handleStatusChange("Running", item._id)}
                    >
                      Start
                    </button>
                  </td>
                  <td>
                    <button
                      className={`projectlistStatusbtn ${getStatusClass(
                        item.status,
                        "Closed"
                      )}`}
                      // onClick={() => handleStatusChange("Closed", item._id)}
                    >
                      Close
                    </button>
                  </td>
                  <td>
                    <button
                      className={`projectlistStatusbtn ${getStatusClass(
                        item.status,
                        "Cancel"
                      )}`}
                      // onClick={() => handleStatusChange("Cancel", item._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* tbale for mobile */}
        <div className="table formobile">
          <div>
            {records.map((item, i) => (
              <div className="formobiledesign" key={i}>
                <div className="projtitalandstatus">
                  <div>
                    <h4 className="namemob">{item.name}</h4>
                    <p className="dateanddate">
                      {item.startDate != null
                        ? new Date(item.startDate).toLocaleDateString()
                        : "null"}{" "}
                      to{" "}
                      {item.endDate != null
                        ? new Date(item.endDate).toLocaleDateString()
                        : "null"}
                    </p>
                  </div>
                  <div>
                    <p className="projectlistStatus">{item.status}</p>
                  </div>
                </div>
                <li className="reasonmob">
                  <span>Reason: </span>
                  <span className="makeitboldmob">{item.reason}</span>
                </li>
                <li className="typemob">
                  <div>Type : </div>
                  <p className="typemobi makeitboldmob">{item.type}</p>
                  <li className="Categorymob">
                    <span className="spanCategorymob">Category: </span>
                    <span className="makeitboldmob">{item.category}</span>
                  </li>
                </li>
                <li className="typemob">
                  <div>Div : </div>
                  <p className="typemobi makeitboldmob">{item.division}</p>
                  <li className="Deptmob">
                    <span>Dept: </span>
                    <span className="makeitboldmob">{item.dept}</span>
                  </li>
                </li>
                <li className="Locationmob">
                  <span>Location: </span>
                  <span className="makeitboldmob">{item.location}</span>
                </li>
                <li className="Prioritymob">
                  <span>Priority: </span>
                  <span className="makeitboldmob">{item.priority}</span>
                </li>

                <div className="statusbtnmob">
                  <div className="mobbtnstyle">
                    <button
                      className={`projectlistStatusbtn ${getStatusClass(
                        item.status,
                        "Running"
                      )}`}
                      // onClick={() => handleStatusChange("Running", item._id)}
                    >
                      Start
                    </button>
                  </div>
                  <div className="mobbtnstyle">
                    <button
                      className={`projectlistStatusbtn ${getStatusClass(
                        item.status,
                        "Closed"
                      )}`}
                      // onClick={() => handleStatusChange("Closed", item._id)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="mobbtnstyle">
                    <button
                      className={`projectlistStatusbtn ${getStatusClass(
                        item.status,
                        "Cancel"
                      )}`}
                      // onClick={() => handleStatusChange("Cancel", item._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* _____________ */}
        <nav className="paginationNum">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${cuurrentPage === n ? "active" : ""}`}
                key={1}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
  function prePage() {
    if (cuurrentPage !== 1) {
      setcurrentPage(cuurrentPage - 1);
    }
  }
  function changeCPage(id) {
    setcurrentPage(id);
  }
  function nextPage() {
    if (cuurrentPage !== npage) {
      setcurrentPage(cuurrentPage + 1);
    }
  }
  // ... Rest of your code remains the same
}

export default ProjectListing;
