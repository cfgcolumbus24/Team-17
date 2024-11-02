CREATE TABLE person ( 
person_id INT AUTO_INCREMENT PRIMARY KEY,  
first_name VARCHAR(50) NOT NULL, 
last_name VARCHAR(50) NOT NULL, 
media VARCHAR(100), 
email VARCHAR(100) UNIQUE NOT NULL, 
portfolio_link VARCHAR(255), 
location VARCHAR(100), 
instagram_url VARCHAR(255) );

CREATE TABLE residency (
    residency_id INT AUTO_INCREMENT PRIMARY KEY,  
    residency_name VARCHAR(100) NOT NULL,
    residency_year INT NOT NULL
);

CREATE TABLE person_residency (
	person_residency_id INT AUTO_INCREMENT PRIMARY KEY, 
    person_id INT NOT NULL,
    residency_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(person_id),
    FOREIGN KEY (residency_id) REFERENCES residency(residency_id)
);