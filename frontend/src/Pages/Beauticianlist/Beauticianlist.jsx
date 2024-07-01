import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Table, Button, FormControl, InputGroup } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Adminsubheaderbeautician from "../../Components/Adminsubheaderbeautician/Adminsubheaderbeautician";
import "./Beauticianlist.css";

function BeauticianList() {
  const [beauticians, setBeauticians] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [generatingPDF, setGeneratingPDF] = useState(false);

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
    `${beautician.title} ${beautician.firstname} ${beautician.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generatePDF = () => {
    setGeneratingPDF(true);
    const input = document.getElementById("beautician-table");

    html2canvas(input, {
      scale: 2,
      ignoreElements: (element) => element.classList.contains("no-print") || element.classList.contains("exclude-pdf"),
    })
      .then((canvas) => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 180;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.text("List of Beauticians", 105, 20, { align: "center" });
        pdf.addImage(imgData, "PNG", 15, 30, imgWidth, imgHeight);
        pdf.text(`Total Beauticians: ${filteredBeauticians.length}`, 105, imgHeight + 40, { align: "center" });
        pdf.save("beauticians-list.pdf");
        setGeneratingPDF(false);
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        setGeneratingPDF(false);
      });
  };

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
        <Button
          className="pdf-Button"
          variant="success"
          onClick={generatePDF}
          disabled={generatingPDF}
        >
          {generatingPDF ? "Generating PDF..." : "Download PDF"}
        </Button>
      </div>
      <div className="beautician-table-responsive d-flex justify-content-center">
        <Table striped bordered hover className="beautician-table" id="beautician-table">
          <thead>
            <tr>
              <th className="exclude-pdf">Profile Photo</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Address</th>
              <th className="no-print">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBeauticians.map((beautician) => (
              <tr key={beautician._id}>
                <td className="exclude-pdf">
                  <img
                    src={`http://localhost:3000/${beautician.profilePhoto}`}
                    alt={`${beautician.title} ${beautician.firstname} ${beautician.lastname}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </td>
                <td>{`${beautician.title} ${beautician.firstname} ${beautician.lastname}`}</td>
                <td>{beautician.dateofbirth}</td>
                <td>{beautician.gender}</td>
                <td>{beautician.mobileno}</td>
                <td>{beautician.email}</td>
                <td>{beautician.address}</td>
                <td className="no-print">
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
