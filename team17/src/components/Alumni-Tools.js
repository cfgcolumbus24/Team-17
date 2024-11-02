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
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ marginRight: '20px', paddingLeft: '30px' }}>
                <h3>Tags</h3>
                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    minWidth: '150px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {selectedFilters.length > 0 ? (
                        selectedFilters.map((filter) => (
                            <span
                                key={filter}
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    borderRadius: '3px',
                                    padding: '5px 10px',
                                    margin: '5px',
                                }}
                            >
                                {filter}
                            </span>
                        ))
                    ) : (
                        <span>No selected filters</span>
                    )}
                </div>
            </div>

            <div style={{ paddingLeft: '30px' }}>
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
                                    backgroundColor: selectedFilters.includes(filter) ? '#000' : '#e0e0e0',
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
        </div>
    );
}

export default AlumniTools;
