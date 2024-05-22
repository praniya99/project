
import './Footer.css';

const Footer = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact US</h2>
        <ul>
          <li><i className="fas fa-map-marker-alt"></i> Address line</li>
          <li><i className="fas fa-phone"></i> Phone no</li>
          <li><i className="fas fa-envelope"></i> Email Address</li>
        </ul>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="contact-form">
        <h2>Leave a comment</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <div className="form-buttons">
            <button type="submit">Send Message</button>
            <button type="button">Reviews</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;