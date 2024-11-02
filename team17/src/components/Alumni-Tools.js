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

    const posts = [
        {
          id: 1,
          title: 'Art Exhibit 11/1',
          description: 'Looking for a friend on a new project!',
          date: 'Nov 01, 2024',
          datetime: '11/01/2024 06:31:08',
          category: { title: 'Collaboration' },
          author: 'Anand Joshi',
        },
        {
            id: 2,
            title: 'Showcase 11/3',
            description: 'Come to my showcase in lower Manhattan on November 3rd!',
            date: 'Oct 31, 2024',
            datetime: '10/31/2024 12:29:08',
            category: { title: 'Spotlight' },
            author: 'John Doe',
          },
          {
            id: 3,
            title: 'Spotlight Artist: Maria Garcia',
            description: 'This month we are celebrating a new and upcoming artist, Maria Garcia!',
            date: 'Sept 14, 2024',
            datetime: '09/14/2024 10:49:08',
            category: { title: 'Spotlight' },
            author: 'Zayn Malik',
          },
          {
            id: 4,
            title: 'Photography Workshop 11/12',
            description: 'Join my photography workshop for beginners and intermediate levels.',
            date: 'Oct 28, 2024',
            datetime: '10/28/2024 08:19:42',
            category: { title: 'Resources' },
            author: 'Sophie Kim',
          },
      ]

      const filteredPosts = selectedFilters.length > 0
        ? posts.filter(post => selectedFilters.includes(post.category.title))
        : posts;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
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

                <div>
                    <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
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
            
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyItems: 'stretch' }}>
                        {filteredPosts.map((post) => (
                            <article key={post.id} style={{ boxSizing: 'border-box', minHeight: '200px' }} className="flex flex-col items-start justify-between bg-white p-4 shadow rounded-md">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        style={{
                                            backgroundColor: '#f0f0f0',
                                            borderRadius: '15px',
                                            padding: '5px 10px',
                                            color: '#333',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 text-sm text-gray-600 line-clamp-3">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div className="text-sm">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AlumniTools;
