import React, { useState } from "react";
import AddServices from "../../AddServices/AddServices";
import "./AdminDashboard.css";


import AddClients from "../../AddClients/AddClients";
import ManageServices from "../ManageServices/ManageServices";


const AdminDashboard = () => {
  const [control, setControl] = useState("addClients");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("addClients")}
                    className="admin-menu p-2"
                  >
                    Registration
                  </li>
                  <li
                    onClick={() => setControl("addServices")}
                    className="admin-menu p-2"
                  >
                    Booking
                  </li>
                  <li
                    onClick={() => setControl("manageServices")}
                    className="admin-menu p-2"
                  >
                    Manage Booking
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "addClients" && <AddClients></AddClients>}
              {control === "addServices" && <AddServices></AddServices>}
              {control === "manageServices" && <ManageServices></ManageServices>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;