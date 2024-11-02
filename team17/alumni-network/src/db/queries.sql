--Insert new post/card
INSERT INTO Posts (Title, Description, Tag_ID, Picture_URL, Author_ID, Post_Date, active) VALUES ('Your Title Here', 'Your Description Here', tag_id, 'Your Picture URL Here', author_id, NOW(), true); 

-- Example query:
-- INSERT INTO Posts (Title, Description, Tag_ID, Picture_URL, Author_ID, Post_Date, active)
-- VALUES ('Your Title Here', 'Your Description Here', 1, 'Your Picture URL Here', 1, '2024-11-01', ‘true’);

--Given title, description, tags, picture url as input.
--Get author from login, post date from timestamp
Select all posts
SELECT Post_Date, Picture_URL, Title, Author_ID, Tag_ID FROM Posts;

--Select one event and pull all info
SELECT Post_date, Picture_URL, Title, Author_ID, Tag_ID, Description
FROM posts
WHERE ID =  your_post_id;

--Select all users
SELECT Name, Picture_URL, Residency_ID, Bio, Email, Socials, Portfolio FROM Users;

--Delete one event
DELETE FROM Posts WHERE ID =  your_post_id;
