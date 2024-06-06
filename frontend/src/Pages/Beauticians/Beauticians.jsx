import './Beauticians.css'
import F4 from '../../assets/Beauticians/F4.jpg'
import F1 from '../../assets/Beauticians/F1.jpg'
import F2 from '../../assets/Beauticians/F2.jpg'
import F3 from '../../assets/Beauticians/F3.jpg'
import F5 from '../../assets/Beauticians/F5.jpg'


const Beauticians = () => {
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
                <div className="small-rect-Beauticians2">
                    <div className="main-photo-Beauticians">
                        <a href="#"><img
                        src={F4}
                        alt="Description 1"
                        className="rect-image-Beauticians"/>
                        </a>
                    </div>
                    <div className="rect-heading-Beauticians">
                        <h5 className="rect-head-head-Beauticians">Miss.Kumudika</h5>
                    </div>
                </div>

                <div className="small-rect-Beauticians2">
                    <div className="main-photo-Beauticians">
                        <a href="#"><img
                        src={F5}
                        alt="Description 1"
                        className="rect-image-Beauticians"/>
                        </a>
                    </div>
                    <div className="rect-heading-Beauticians">
                        <h5 className="rect-head-head-Beauticians">Miss.Hirunika</h5>
                    </div>
                </div>

                <div className="small-rect-Beauticians2">
                    <div className="main-photo-Beauticians">
                        <a href="#"><img
                        src={F1}
                        alt="Description 1"
                        className="rect-image-Beauticians"/>
                        </a>
                    </div>
                    <div className="rect-heading-Beauticians">
                        <h5 className="rect-head-head-Beauticians">Miss.Gaweshika</h5>
                    </div>
                </div>

                <div className="small-rect-Beauticians2">
                    <div className="main-photo-Beauticians">
                        <a href="#"><img
                        src={F3}
                        alt="Description 1"
                        className="rect-image-Beauticians"/>
                        </a>
                    </div>
                    <div className="rect-heading-Beauticians">
                        <h5 className="rect-head-head-Beauticians">Miss.Amanda</h5>
                    </div>
                </div>
            </div>
<div className='space-Beautician'>
            <div className="small-rect-Beauticians1">
                <div className="small-rect-Beauticians2">
                    <div className="main-photo-Beauticians">
                        <a href="#"><img
                        src={F2}
                        alt="Description 1"
                        className="rect-image-Beauticians"/>
                        </a>
                    </div>
                    <div className="rect-heading-Beauticians">
                        <h5 className="rect-head-head-Beauticians">Miss.Prabashi</h5>
                    </div>
                </div>
            </div>
            </div>


        </div>
       
          
    </div>
  )
}

export default Beauticians
