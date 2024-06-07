import Subheader from "../../components/Subheader/Subheader"
import "./AllServices.css";
import T3 from '../../assets/AllServices/T3.jpg'
import T1 from '../../assets/AllServices/T1.jpg'
import T5 from '../../assets/AllServices/T5.jpg'
import T4 from '../../assets/AllServices/T4.jpg'
import T6 from '../../assets/AllServices/T6.jpg'
import T7 from '../../assets/AllServices/T7.jpg'
import T8 from '../../assets/AllServices/T8.jpg'
import T81 from '../../assets/AllServices/T81.jpg'



const AllServices = () => {
  return (
    <div>
      <Subheader />
      <div className="big-rect1-AllServices">
              <div className="small-rect1-AllServices">
                          <div className="small-rect2-AllServices">
                                  <div className="main-photo-AllServices">
                                        <a href="#"><img
                                          src={T3}
                                          alt="Description 1"
                                          className="rect-image-AllServices"
                                        />
                                        </a>
                                  </div>
                                  <div className="rect-heading-AllServices">
                                        <h5 className="rect-head-head-AllServices">Bridal</h5>
                                  </div>
                          </div>

                          <div className="small-rect2-AllServices">
                                 <div className="main-photo-AllServices">
                                        <a href="#">
                                          <img
                                            src={T6}
                                            alt="Description 1"
                                            className="rect-image-AllServices"
                                          />
                                          </a>
                                  </div>
                                   <div className="rect-heading-AllServices">
                                       <h5 className="rect-head-head-AllServices">Nails</h5>
                                    </div>
                           </div>

                          <div className="small-rect2-AllServices">
                                    <div className="main-photo-AllServices">
                                          <a href="#">
                                            <img
                                              src={T7}
                                              alt="Description 1"
                                              className="rect-image-AllServices"
                                            />
                                            </a>
                                    </div>
                                    <div className="rect-heading-AllServices">
                                          <h5 className="rect-head-head-AllServices">Makeup</h5>
                                    </div>
                          </div>
              </div>

              <div className="small-rect1-AllServices">
                        <div className="small-rect2-AllServices">
                                <div className="main-photo-AllServices">
                                      <a href="#">
                                        <img
                                          src={T8}
                                          alt="Description 1"
                                          className="rect-image-AllServices"
                                        />
                                        </a>
                                </div>
                                <div className="rect-heading-AllServices">
                                       <h5 className="rect-head-head-AllServices">Hair Cuts</h5>
                                </div>
                        </div>

                        <div className="small-rect2-AllServices">
                                <div className="main-photo-AllServices">
                                      <a href="#">
                                        <img
                                          src={T81}
                                          alt="Description 1"
                                          className="rect-image-AllServices"
                                        />
                                        </a>
                                </div>
                                <div className="rect-heading-AllServices">
                                       <h5 className="rect-head-head-AllServices">Hair Colouring</h5>
                                </div>
                        </div>

                        <div className="small-rect2-AllServices">
                                <div className="main-photo-AllServices">
                                      <a href="#">
                                        <img
                                          src={T5}
                                          alt="Description 1"
                                          className="rect-image-AllServices"
                                        />
                                        </a>
                                </div>
                                <div className="rect-heading-AllServices">
                                       <h5 className="rect-head-head-AllServices">Facial Cleanup</h5>
                                </div>
                        </div>
              </div>

              <div className="small-rect1-1-AllServices">
                              <div className="small-rect2-AllServices">
                                      <div className="main-photo-AllServices">
                                            <a href="#">
                                              <img
                                                src={T1}
                                                alt="Description 1"
                                                className="rect-image-AllServices"
                                              />
                                              </a>
                                      </div>

                                      <div className="rect-heading-AllServices">
                                            <h5 className="rect-head-head-AllServices">Threading</h5>
                                      </div>
                              </div>

                                <div className="small-rect2-AllServices">
                                        <div className="main-photo-AllServices">
                                                <a href="#">
                                                  <img
                                                    src={T4}
                                                    alt="Description 1"
                                                    className="rect-image-AllServices"
                                                  />
                                                  </a>
                                        </div>

                                        <div className="rect-heading-AllServices">
                                                <h5 className="rect-head-head-AllServices">Waxing</h5>
                                        </div>

                                </div>
               </div>

      </div>
     
    </div>
  
  );
};

export default AllServices;
