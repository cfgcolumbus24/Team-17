import React, { useState } from 'react';
import './Popup.css';

function Popup({ post, onClose }) {
    const [isRSVPed, setIsRSVPed] = useState(false); // for alumni event posts
    const [attendees, setAttendees] = useState([]); // for alumni event posts
    const [isInterested, setIsInterested] = useState(false); // for collaboration posts
    const [interestedAttendees, setInterestedAttendees] = useState([]); // for collaboration posts

    const handleRSVP = () => {
        if (!isRSVPed) {
            setAttendees([...attendees, "You"]);
            setIsRSVPed(true);
        }
    };

    const handleInterest = () => {
        if (!isInterested) {
            setInterestedAttendees([...interestedAttendees, "You"]);
            setIsInterested(true);
        }
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p><strong>Posted by:</strong> {post.author}</p>
                <p><strong>Date:</strong> {post.date}</p>

                {post.category.title === "Alumni Event" && (
                    <div style={{ marginTop: '20px' }}>
                        <button 
                            onClick={handleRSVP} 
                            disabled={isRSVPed} 
                            style={{
                                padding: '10px 15px',
                                fontSize: '16px',
                                backgroundColor: isRSVPed ? '#ddd' : '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: isRSVPed ? 'default' : 'pointer',
                                marginBottom: '10px'
                            }}
                        >
                            {isRSVPed ? "RSVP'd" : "RSVP"}
                        </button>
                        
                        <h3>Currently Attending:</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {attendees.length > 0 ? (
                                attendees.map((attendee, index) => (
                                    <li key={index} style={{ marginBottom: '5px' }}>
                                        {attendee}
                                    </li>
                                ))
                            ) : (
                                <li>No one has RSVP'd yet.</li> // Display message if no attendees
                            )}
                        </ul>
                    </div>
                )}

{post.category.title === "Collaboration" && (
                    <div style={{ marginTop: '20px' }}>
                        <button 
                            onClick={handleInterest} 
                            disabled={isInterested} 
                            style={{
                                padding: '10px 15px',
                                fontSize: '16px',
                                backgroundColor: isInterested ? '#ddd' : '#28a745',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: isInterested ? 'default' : 'pointer',
                                marginBottom: '10px'
                            }}
                        >
                            {isInterested ? "I'm Interested" : "I'm Interested"}
                        </button>
                        
                        <h3>Currently Interested:</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {interestedAttendees.length > 0 ? (
                                interestedAttendees.map((attendee, index) => (
                                    <li key={index} style={{ marginBottom: '5px' }}>
                                        {attendee}
                                    </li>
                                ))
                            ) : (
                                <li>No one has shown interest yet.</li>
                            )}
                        </ul>
                    </div>
                )}

                <button onClick={onClose} className="close">Close</button>
            </div>
        </div>
    );
}

export default Popup;
