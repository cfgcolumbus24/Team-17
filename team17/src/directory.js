import React, { useState } from 'react';
import alumniData from './mockAlumniData.json';
import FrontCard from './components/FrontCard';
import './directory.css';
import ReactCardFlip from 'react-card-flip';
import BackCard from './components/BackCard';

function Directory() {
    
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
  const [filter, setFilter] = useState('');
  const alumniList = alumniData[0].alumni;

  const [flippedCards, setFlippedCards] = useState({}); // State for each card's flip status

  const handleClick = (id) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [id]: !prevFlippedCards[id], // Toggle the flip status of the specific card
    }));
  };

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle filter selection
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  // Filter the alumni list based on the search term and selected filter
  const filteredAlumni = alumniList
    .filter((alumni) =>
      `${alumni.first_name} ${alumni.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((alumni) => {
      // Apply the filter only if it's selected (non-empty)
      if (filter) {
        return alumni.residency_name === filter;
      }
      return true; // If no filter is selected, include all
    });

  return (
    <div className="App">
      <h1>Alumni Directory</h1>
      {/* Search Bar */}
      <div className="search-container">
        <select
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
        >
          <option value="World Views">Filter by Residency</option>
          <option value="Swing Space">Creative Space NYC</option>
          <option value="Process Space">Art Haven</option>
          <option value="Seniors Partnering with Artists Citywide (SPARC)"></option>
          <option value="Extended Life"></option>
          <option value="Paris Residency"></option>
        </select>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Display filtered alumni */}
      <div className="cards-container">
        {filteredAlumni.map((alumni) => (
          <ReactCardFlip
            key={alumni.id} // Ensure unique key for each element
            isFlipped={flippedCards[alumni.id] || false} // Set flip status of specific card
            flipDirection="horizontal"
          >
            <div className="front" onClick={() => handleClick(alumni.id)}>
              <FrontCard
                first_name={alumni.first_name}
                last_name={alumni.last_name}
                residency_name={alumni.residency_name}
                image_url={alumni.image_url}
                residency_year={alumni.residency_year}
                email={alumni.email}
                instagram_url={alumni.instagram_url}
              />
            </div>

            <div className="back" onClick={() => handleClick(alumni.id)}>
                <BackCard
                    bio = {alumni.bio}
                />
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
}

export default Directory;
