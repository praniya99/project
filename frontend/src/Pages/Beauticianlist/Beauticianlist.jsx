import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Table, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Beauticianlist.css";

function BeauticianList() {
  const [beauticians, setBeauticians] = useState([]);

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
        // Remove the deleted beautician from the state
        setBeauticians(beauticians.filter((beautician) => beautician._id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container className="mt-5">
      <h2 className="heading1">List of Beauticians</h2>
      <div className="table-responsive">
      <Table striped bordered hover className="table">
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
          {beauticians.map((beautician) => (
            <tr key={beautician._id}>
              <td>
                {beautician.firstname} {beautician.lastname}
              </td>
              <td>{beautician.dateofbirth}</td>
              <td>{beautician.gender}</td>
              <td>{beautician.mobileno}</td>
              <td>{beautician.email}</td>
              <td>{beautician.address}</td>
              <td >
             
              <Link to={`/update/${beautician._id}`}>
  <Button variant="warning"  className="btn-list1">
    Update
  </Button>
</Link>
                 
                 <Button variant="danger" onClick={() => handleDelete(beautician._id)} className="btn-list">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </Container>
  );
}

export default BeauticianList;
