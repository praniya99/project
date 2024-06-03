import './Beauticianlistrow.css'
import image01 from '../../assets/Beauticianlistrow/image.png'

const Beauticianlistrow = () => {
  return (
    <div className='borderrow'>
        
      <a className='row1' href=""><img className='imgage' src={image01}/>Name</a>
      <button className='buttonrow'> Delete</button>
      
    </div>
  )
}

export default Beauticianlistrow
