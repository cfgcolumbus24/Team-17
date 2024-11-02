// Card.js
import React from 'react'; 
import './FrontCard.css';

const BackCard = ({ bio }) => {
    return (
      <div className="card"> 
          <div className="card-content"> 
            <p className="card-description">{bio}</p> {/* Bio details */}
          </div>
      </div>
    );
};

export default BackCard;
