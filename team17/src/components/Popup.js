import React from 'react';
import './Popup.css';

function Popup({ post, onClose }) {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p><strong>Posted by:</strong> {post.author}</p>
                <p><strong>Date:</strong> {post.date}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Popup;
