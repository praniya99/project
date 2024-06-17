import React from "react";
import './Report01.css'


export default function Report01() {
  return (
    <div>
      <h1 className="report_topic">Monthly Appointments</h1>
      <div>
         <table className="report">
        <tablehead className="reporthead">
          <tr>
            <th>ID</th>
            <th>Cus. Name</th>
            <th>Service/s</th>
            <th>Total Price(Rs.)</th>
            <th>Status</th>
          </tr>
        </tablehead>
        <tablebody className="reportbody">
          <tr>
            <td>001</td>
            <td>Nimali</td>
            <td>Facial Cleanup</td>
            <td>1500</td>
            <td>Completed</td>
          </tr>
          
        </tablebody>
      </table>
      </div>
     
    </div>
  );
}
