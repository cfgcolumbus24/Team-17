INSERT INTO person (first_name, last_name, media, email, portfolio_link, location, instagram_url)
VALUES
('Alice', 'Johnson', 'Painting', 'alice.johnson@example.com', 'https://alicejohnsonart.com', 'New York, NY', 'https://instagram.com/alicejohnson'),
('Marcus', 'Lee', 'Sculpture', 'marcus.lee@example.com', 'https://marcusleeart.com', 'Los Angeles, CA', 'https://instagram.com/marcuslee'),
('Sofia', 'Garcia', 'Photography', 'sofia.garcia@example.com', 'https://sofiagarcia.com', 'Chicago, IL', 'https://instagram.com/sofiagarcia'),
('Leo', 'Kim', 'Digital Art', 'leo.kim@example.com', 'https://leokimart.com', 'Seattle, WA', 'https://instagram.com/leokim'),
('Priya', 'Patel', 'Mixed Media', 'priya.patel@example.com', 'https://priyapatelart.com', 'Miami, FL', 'https://instagram.com/priyapatel');

NSERT INTO residency (residency_name, residency_year)
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


SELECT * FROM person;
SELECT * FROM residency;
SELECT * FROM person_residency;

