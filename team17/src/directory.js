import React, { useState, useEffect } from 'react';
import UserService from './api/userService'; // Import the UserService
import FrontCard from './components/FrontCard';
import './directory.css';
import ReactCardFlip from 'react-card-flip';
import BackCard from './components/BackCard';

function Directory() {
    const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term
    const [filter, setFilter] = useState('');
    const [alumniList, setAlumniList] = useState([]); // State to store fetched alumni data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle error

    const [flippedCards, setFlippedCards] = useState({}); // State for each card's flip status

    // Fetch all users when the component mounts
    useEffect(() => {
        const fetchAlumni = async () => {
            setLoading(true); // Start loading
            try {
                const data = await UserService.getAllUsers(); // Fetch data from API
                
                // Group data by user and aggregate residency info
                const groupedData = data.reduce((acc, item) => {
                    const userId = item.user.id;

                    if (!acc[userId]) {
                        acc[userId] = {
                            ...item.user,
                            residencies: [] // Initialize an array to hold residency info
                        };
                    }
                    
                    acc[userId].residencies.push({
                        name: item.residency.residencyName,
                        year: item.residency.year
                    });

                    return acc;
                }, {});

                // Convert grouped data object to an array
                setAlumniList(Object.values(groupedData));
                console.log(Object.values(groupedData));
            } catch (error) {
                setError(error.message); // Set error if fetch fails
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchAlumni(); // Call the async function
    }, []);

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

    // Filter the alumni list based on the search term and selected filter
    const filteredAlumni = alumniList
        .filter((alumni) => {
            // Search within the name field of `user`
            return alumni.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .filter((alumni) => {
            // Apply residency filter
            if (filter) {
                return alumni.residencies.some(residency => residency.name === filter);
            }
            return true;
        });

    // Handle loading and error states
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="App">
            <div className="header-image">
                <h1 className="directory-title">Alumni Directory</h1>
                {/* Search bar below the header image */}
                <div className="search-container">
                    <select name="filter" value={filter} onChange={handleChangeFilter}>
                        <option value="">Filter by Residency</option>
                        <option value="World Views">World Views</option>
                        <option value="Swing Space">Swing Space</option>
                        <option value="Process Space">Process Space</option>
                        <option value="Seniors Partnering with Artists Citywide (SPARC)">SPARC</option>
                        <option value="Extended Life">Extended Life</option>
                        <option value="Paris Residency">Paris Residency</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
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
                                name={alumni.name}
                                residencies={alumni.residencies} // Pass all residency info
                                image_url={alumni.pictureUrl}
                                email={alumni.email}
                                instagram_url={alumni.socials}
                                portfolio={alumni.portfolio}
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