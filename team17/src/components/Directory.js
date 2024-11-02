import React, { useState } from 'react';
import alumniData from '../mockAlumniData.json';
import FrontCard from './FrontCard';
import './Directory.css';
import ReactCardFlip from 'react-card-flip';
import BackCard from './BackCard';

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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const filteredAlumni = alumniList
        .filter((alumni) =>
            `${alumni.first_name} ${alumni.last_name}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        )
        .filter((alumni) => {
            if (filter) {
                return alumni.residency_name === filter;
            }
            return true;
        });

    return (
        <div className="App">
            <div className="header-image">
                <h1 className="directory-title">Alumni Directory</h1>
                {/* Search bar below the header image */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <select
                        name="filter"
                        value={filter}
                        onChange={handleChangeFilter}
                        className="filter-dropdown"
                    >
                        <option value="">Filter by Residency</option>
                        <option value="World Views">World Views</option>
                        <option value="Swing Space">Swing Space</option>
                        <option value="Process Space">Process Space</option>
                        <option value="Seniors Partnering with Artists Citywide (SPARC)">SPARC</option>
                        <option value="Extended Life">Extended Life</option>
                        <option value="Paris Residency">Paris Residency</option>
                    </select>
                </div>
            </div>

            {/* Display filtered alumni */}
            <div className="cards-container">
                {filteredAlumni.map((alumni) => (
                    <ReactCardFlip
                        key={alumni.id}
                        isFlipped={flippedCards[alumni.id] || false}
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
                            <BackCard bio={alumni.bio} />
                        </div>
                    </ReactCardFlip>
                ))}
            </div>
        </div>
    );
}

export default Directory;
