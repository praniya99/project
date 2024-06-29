import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Table, Button, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Adminsubheaderbeautician from "../../Components/Adminsubheaderbeautician/Adminsubheaderbeautician";

import "./Beauticianlist.css"; 

function BeauticianList() {
  const [beauticians, setBeauticians] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/beauticians")
      .then((response) => setBeauticians(response.data.beauticians))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/beauticians/${id}`)
      .then(() => {
        setBeauticians(beauticians.filter((beautician) => beautician._id !== id));
      })
      .catch((error) => console.error(error));
  };

  const filteredBeauticians = beauticians.filter((beautician) =>
    `${beautician.firstname} ${beautician.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Adminsubheaderbeautician />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/AddBeauticians">
          <Button className="beautician-button-list">+ Add Beautician</Button>
        </Link>
        <InputGroup className="search-bar-list">
          <FormControl
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className="beautician-table-responsive">
        <Table striped bordered hover className="beautician-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBeauticians.map((beautician) => (
              <tr key={beautician._id}>
                <td>{beautician.firstname} {beautician.lastname}</td>
                <td>{beautician.dateofbirth}</td>
                <td>{beautician.gender}</td>
                <td>{beautician.mobileno}</td>
                <td>{beautician.email}</td>
                <td>{beautician.address}</td>
                <td>
                  <Link to={`/update/${beautician._id}`}>
                    <Button variant="warning" className="beautician-button-update">Update</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(beautician._id)} className="beautician-button-delete">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BeauticianList;
