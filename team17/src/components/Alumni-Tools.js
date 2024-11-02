import React, { useState } from 'react';

function AlumniTools() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Searched for:", searchTerm);
        console.log("Selected filters:", selectedFilters);
        // Add logic for search term and filter buttons here integrating cards
    };

    const filters = ['Collaboration', 'Spotlight', 'Alumni Event', 'Resources'];

    const toggleFilter = (filter) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.includes(filter)
                ? prevFilters.filter((f) => f !== filter)
                : [...prevFilters, filter]
        );
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                <input
                    type="text"
                    placeholder="Search alumni tools..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        width: '250px',
                        marginRight: '10px',
                    }}
                />
                <button type="submit" style={{ padding: '10px 15px', fontSize: '16px', marginRight: '15px' }}>
                    Search
                </button>
                
                <div style={{ display: 'flex', gap: '10px' }}>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => toggleFilter(filter)}
                            style={{
                                padding: '10px 15px',
                                fontSize: '16px',
                                backgroundColor: selectedFilters.includes(filter) ? '#007bff' : '#e0e0e0',
                                color: selectedFilters.includes(filter) ? '#fff' : '#000',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default AlumniTools;
