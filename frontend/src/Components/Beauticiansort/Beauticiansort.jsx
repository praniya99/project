import './Beauticiansort.css'
import Dropdown from 'react-bootstrap/Dropdown';

const Beauticiansort = () => {
  return (
    <div>
       <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='beauticiansort'>
      sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">A-Z</Dropdown.Item>
        <Dropdown.Item href="#/action-2">latest</Dropdown.Item>
        <Dropdown.Item href="#/action-3">oldest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default Beauticiansort
