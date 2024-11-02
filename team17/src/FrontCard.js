// Card.js
import React from 'react';
import './FrontCard.css';
import { GrMail } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";

/* Card for the Alumni Directory */
const FrontCard = ({ first_name, last_name, residency_name, image_url, residency_year, email, instagram_url }) => {
    return (
      <div class = "card">
      <div>
        <img 
          src={image_url} 
          alt={`${first_name} ${last_name}`} 
          className="card-image circular-image" 
        />
        <div className="card-content">
          <h3 className="card-title">{`${first_name} ${last_name}`}</h3>
          <p className="card-description">{residency_name} - {residency_year}</p>
          <div className="card-icons">
            <a href={`mailto:${email}`} className="card-email"><GrMail /></a>
            <a href={instagram_url} target="_blank" rel="noopener noreferrer" className="card-instagram"><SiInstagram /></a>
          </div>
        </div>
      </div>
      </div>
    );
};

export default FrontCard;
