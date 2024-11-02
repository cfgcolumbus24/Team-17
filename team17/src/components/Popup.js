import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

function Popup({ post, onClose, isNewPost }) {
    const [isRSVPed, setIsRSVPed] = useState(false); // for alumni event posts
    const [attendees, setAttendees] = useState([]); // for alumni event posts
    const [isInterested, setIsInterested] = useState(false); // for collaboration posts
    const [interestedAttendees, setInterestedAttendees] = useState([]); // for collaboration posts

    const [newPostData, setNewPostData] = useState({
        title: '',
        description: '',
        category: '',
        date: new Date().toISOString().slice(0, 10),
        author: '',
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPostData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New post submitted:", newPostData);
        onClose();
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {isNewPost ? (
                <form onSubmit={handleSubmit} className="new-post-form">
                    <h2>Create New Post</h2>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            value={newPostData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={newPostData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={newPostData.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Alumni Event">Alumni Event</option>
                            <option value="Collaboration">Collaboration</option>
                            <option value="Spotlight">Spotlight</option>
                            <option value="Resources">Resources</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={newPostData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            placeholder="Author"
                            value={newPostData.author}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            ) : (
                    <>
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
                                        <li>No one has RSVP'd yet.</li>
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
                    </>
                )}

                <button onClick={onClose} className="close">Close</button>
            </div>
        </div>
    );
}

Popup.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    isNewPost: PropTypes.bool.isRequired,
};

export default Popup;
