import React, { useState } from 'react';
import Popup from './Popup';

function AlumniTools() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isNewPostPopupOpen, setIsNewPostPopupOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
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
            imageUrl: 'https://lmcc.net/wp-content/uploads/2024/10/MetPerspectives_MET_Paula_Lobo-04-12-7926-scaled.jpg',
            date: 'Nov 01, 2024',
            datetime: '11/01/2024 06:31:08',
            category: { title: 'Collaboration' },
            author: 'Anand Joshi',
        },
        {
            id: 2,
            title: 'Showcase 11/3',
            description: 'Come to my showcase in lower Manhattan on November 3rd!',
            imageUrl: 'https://lmcc.net/wp-content/uploads/2024/09/pink-1.jpeg',
            date: 'Oct 31, 2024',
            datetime: '10/31/2024 12:29:08',
            category: { title: 'Spotlight' },
            author: 'John Doe',
        },
        {
            id: 3,
            title: 'Spotlight Artist: Maria Garcia',
            description: 'This month we are celebrating a new and upcoming artist, Maria Garcia!',
            imageUrl: 'https://lmcc.net/wp-content/uploads/2024/10/she_walks_the_air_vi_1.jpeg',
            date: 'Sept 14, 2024',
            datetime: '09/14/2024 10:49:08',
            category: { title: 'Spotlight' },
            author: 'Zayn Malik',
        },
        {
            id: 4,
            title: 'Photography Workshop 11/12',
            description: 'Join my photography workshop for beginners and intermediate levels.',
            imageUrl: 'https://lmcc.net/wp-content/uploads/2024/08/PMTSpring15-25-scaled.jpg',
            date: 'Oct 28, 2024',
            datetime: '10/28/2024 08:19:42',
            category: { title: 'Resources' },
            author: 'Sophie Kim',
        },
    ];

    // Define color mappings for each category
    const categoryColors = {
        'Collaboration': '#1e90ff', // blue
        'Spotlight': '#ff69b4', // pink
        'Alumni Event': '#32cd32', // green
        'Resources': '#ffa500', // orange
    };

    const filteredPosts = posts.filter(post => {
        const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(post.category.title);
        const matchesSearch = [post.title, post.description, post.author].some(text =>
            text.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return matchesFilter && matchesSearch;
    });

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const closePopup = () => {
        setSelectedPost(null);
        setIsNewPostPopupOpen(false);
    };

    const openNewPostPopup = () => {
        setIsNewPostPopupOpen(true);
    };

    return (
        <div style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
                    <input
                        type="text"
                        placeholder="Search alumni tools..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            width: '250px',
                            marginRight: '20px',
                        }}
                    />
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => toggleFilter(filter)}
                                style={{
                                    padding: '10px 15px',
                                    fontSize: '16px',
                                    backgroundColor: selectedFilters.includes(filter) ? categoryColors[filter] : '#e0e0e0',
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

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ marginRight: '20px', padding: '10px', minWidth: '150px', display: 'flex', flexDirection: 'column' }}>
                    <h3>Tags</h3>
                    <div style={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '10px',
                        minHeight: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '20px',
                    }}>
                        {selectedFilters.length > 0 ? (
                            selectedFilters.map((filter) => (
                                <span
                                    key={filter}
                                    style={{
                                        backgroundColor: categoryColors[filter],
                                        color: '#fff',
                                        borderRadius: '3px',
                                        padding: '5px 10px',
                                        margin: '5px 0',
                                    }}
                                >
                                    {filter}
                                </span>
                            ))
                        ) : (
                            <span>No selected filters</span>
                        )}
                    </div>

                    <button
                        onClick={openNewPostPopup}
                        style={{
                            padding: '10px 15px',
                            fontSize: '16px',
                            backgroundColor: '#e0e0e0',
                            color: '#000',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Make a New Post
                    </button>
                </div>

                <div style={{ flex: 1 }}>
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyItems: 'stretch' }}>
                                {filteredPosts.map((post) => (
                                    <article
                                        key={post.id}
                                        style={{
                                            boxSizing: 'border-box',
                                            minHeight: '200px',
                                            borderRadius: '15px',
                                            padding: '15px',
                                            margin: '10px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        }}
                                        onClick={() => handlePostClick(post)}>
                                        <img src={post.imageUrl} alt={post.title} style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={post.datetime} className="text-gray-500">
                                                {post.date}
                                            </time>
                                            <span
                                                style={{
                                                    backgroundColor: categoryColors[post.category.title],
                                                    borderRadius: '15px',
                                                    padding: '5px 10px',
                                                    color: '#fff',
                                                    marginLeft: '10px',
                                                }}
                                            >
                                                {post.category.title}
                                            </span>
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
                                                        {post.author}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedPost && (
                <Popup isOpen={!!selectedPost} onClose={closePopup} post={selectedPost} />
            )}
            {isNewPostPopupOpen && (
                <Popup isOpen={isNewPostPopupOpen} onClose={closePopup} />
            )}
        </div>
    );
}

export default AlumniTools;
