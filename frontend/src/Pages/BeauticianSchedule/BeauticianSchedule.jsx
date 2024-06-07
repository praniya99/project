
import Table from 'react-bootstrap/Table'
import BeauticianScheduleheader from '../../Components/BeauticianSceduleheader/BeauticianScheduleheader';
import '../BeauticianSchedule/BeauticianSchedule.css'


const BeauticianSchedule = () => {
  return (
    <div>
      <BeauticianScheduleheader/>
      <div>
      
     <div >
     <Table striped bordered hover className="beauticianschedule-rounded-table">
  <thead>
    <tr className='beauticianschedule-tr'>
      <th> Date</th>
      <th>Time</th>
      <th>Name</th>
      <th>Appointment type</th>
    <th></th>
      
    </tr>
  </thead>
  <tbody>
    <tr className='beauticianschedule-tr'>
      <td>2024/05/13</td>
      <td>10.00 a.m.</td>
      <td>Shehani</td>
      <td>Facial cleanup</td>
      <td><a href="">view</a></td>


    </tr>
    <tr className='beauticianschedule-tr'>
    
      <td>2024/05/20</td>
      <td>11.00 a.m.</td>
      <td>W.H.Nimali</td>
      <td>Facial cleanup</td>
      <td><a href="">view</a></td>

    </tr>
  </tbody>
</Table>

     </div>
    </div>

    </div>
  );
};
export default BeauticianSchedule ;
