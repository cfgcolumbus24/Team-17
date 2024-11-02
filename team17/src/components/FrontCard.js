// Card.js
import React from 'react'; 
import './FrontCard.css';
import { GrMail } from "react-icons/gr"; // Importing the mail icon from react-icons
import { SiInstagram } from "react-icons/si"; // Importing the Instagram icon from react-icons

/* Card for the Alumni Directory */
const FrontCard = ({ name, residencies, image_url, email, instagram_url, portfolio }) => {
    return (
      <div className="card"> 
          <img 
            src={image_url} 
            alt={`${name}`}  
            className="card-image circular-image"  
          />
          <div className="card-content"> 
            <h3 className="card-title">{`${name}`}</h3> {/* Alumni Name */}
            
            {/* Residency details - displaying each residency in a list */}
            <ul className="residency-list">
              {residencies.map((residency, index) => (
                <li key={index} className="residency-item">
                  {residency.name} - {residency.year}
                </li>
              ))}
            </ul>
            
            <div className="card-icons"> {/* Container for social media icons */}
              <a href={`mailto:${email}`} className="card-email"> {/* Mailto link for sending an email */}
                <GrMail /> {/* Email icon */}
              </a>
              <a href={instagram_url} target="_blank" rel="noopener noreferrer" className="card-instagram"> {/* Link to Instagram profile */}
                <SiInstagram /> {/* Instagram icon */}
              </a>
              {/* Portfolio link, if available */}
              {portfolio && (
                <a href={portfolio} target="_blank" rel="noopener noreferrer" className="card-portfolio">
                  Portfolio
                </a>
              )}
            </div>
          </div>
      </div>
    );
};

// Exporting the FrontCard component for use in other parts of the application
export default FrontCard;