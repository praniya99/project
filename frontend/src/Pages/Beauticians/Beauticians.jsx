import  { useState, useEffect } from "react";
import axios from "axios";
import './Beauticians.css';

const Beauticians = () => {
  const [beauticians, setBeauticians] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/beauticians")
      .then((response) => setBeauticians(response.data.beauticians))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="BIg-main-main-Beauticians">
        <div className="main-Beauticians">
          <h3 className="main-head-Beauticians">Beauticians</h3>
          <div>
            <h5 className="admin-Beauticians">Home / Beauticians</h5>
          </div>
        </div>
      </div>
      <div className="big-rect-Beauticians">
        <div className="small-rect-Beauticians1">
          {beauticians.map((beautician) => (
            <div key={beautician._id} className="small-rect-Beauticians2">
              <div className="main-photo-Beauticians">
                <a href="#">
                  <img
                    src={`http://localhost:3000/${beautician.profilePhoto}`}
                    alt={`${beautician.firstname} ${beautician.lastname}`}
                    className="rect-image-Beauticians"
                  />
                </a>
              </div>
              <div className="rect-heading-Beauticians">
                <h5 className="rect-head-head-Beauticians">{`${beautician.title} ${beautician.firstname}`}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beauticians;
