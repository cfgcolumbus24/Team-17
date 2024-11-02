INSERT INTO person (first_name, last_name, media, email, portfolio_link, location, instagram_url)
VALUES
('Alice', 'Johnson', 'Painting', 'alice.johnson@example.com', 'https://alicejohnsonart.com', 'New York, NY', 'https://instagram.com/alicejohnson'),
('Marcus', 'Lee', 'Sculpture', 'marcus.lee@example.com', 'https://marcusleeart.com', 'Los Angeles, CA', 'https://instagram.com/marcuslee'),
('Sofia', 'Garcia', 'Photography', 'sofia.garcia@example.com', 'https://sofiagarcia.com', 'Chicago, IL', 'https://instagram.com/sofiagarcia'),
('Leo', 'Kim', 'Digital Art', 'leo.kim@example.com', 'https://leokimart.com', 'Seattle, WA', 'https://instagram.com/leokim'),
('Priya', 'Patel', 'Mixed Media', 'priya.patel@example.com', 'https://priyapatelart.com', 'Miami, FL', 'https://instagram.com/priyapatel');

INSERT INTO residency (residency_name, residency_year)
VALUES
('Creative Space NYC', 2021),
('Art Haven', 2020),
('Color Theory Studio', 2022),
('Mosaic Studios', 2021),
('The Artist\'s Refuge', 2019),
('The Craft House', 2020),
('Palette Plein Air', 2021),
('The Gallery Lab', 2022);

INSERT INTO person_residency (person_id, residency_id)
VALUES
(1, 1),  -- Alice Johnson at Creative Space NYC
(1, 3),  -- Alice Johnson at Color Theory Studio
(2, 2),  -- Marcus Lee at Art Haven
(3, 1),  -- Sofia Garcia at Creative Space NYC
(3, 4),  -- Sofia Garcia at Mosaic Studios
(4, 5),  -- Leo Kim at The Artist's Refuge
(5, 6);  -- Priya Patel at The Craft House

INSERT INTO Posts (Author_ID, Title, Description, Tag_ID, Picture_URL, Post_Date, Active)
VALUES
(1, 'Exploring Abstract Art', 'A deep dive into the world of abstract art, discussing techniques and famous artists.', 1, 'https://example.com/image1.jpg', NOW(), TRUE),
(2, 'The Beauty of Nature Photography', 'An exploration of nature through the lens, showcasing stunning landscapes.', 2, 'https://example.com/image2.jpg', NOW(), TRUE),
(1, 'Understanding Color Theory', 'An insightful article on how color theory influences art and design.', 3, 'https://example.com/image3.jpg', NOW(), TRUE),
(3, 'Sculpting with Clay', 'A guide to sculpting techniques using clay, including tips for beginners.', 1, 'https://example.com/image4.jpg', NOW(), TRUE),
(4, 'Digital Art: The New Frontier', 'Exploring the rise of digital art and its impact on the art world.', 2, 'https://example.com/image5.jpg', NOW(), TRUE),
(2, 'Mixed Media: Blending Techniques', 'How to combine various mediums to create unique artworks.', 3, 'https://example.com/image6.jpg', NOW(), TRUE),
(3, 'The Importance of Artist Residencies', 'Discussing the value of residencies for artists in their careers.', 1, 'https://example.com/image7.jpg', NOW(), TRUE),
(4, 'Art and Technology: A New Era', 'Exploring how technology is reshaping the art landscape.', 2, 'https://example.com/image8.jpg', NOW(), TRUE);

SELECT * FROM person;
SELECT * FROM residency;
SELECT * FROM person_residency;
SELECT Post_Date, Picture_URL, Title, Author_ID, Tag_ID FROM Posts;

