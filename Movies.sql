CREATE TABLE Movies (
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    genre VARCHAR(100),
    duration_minutes INT,
    rating DECIMAL(2, 1),
    release_date DATE
);

CREATE TABLE Theatres (
    theatre_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    location VARCHAR(255),
    capacity INT
);

CREATE TABLE Showtimes (
    showtime_id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    theatre_id INT,
    show_date DATE,
    start_time TIME,
    end_time TIME,
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
    FOREIGN KEY (theatre_id) REFERENCES Theatres(theatre_id)
);

CREATE TABLE Tickets (
    ticket_id INT PRIMARY KEY AUTO_INCREMENT,
    showtime_id INT,
    user_id INT,
    seat_number VARCHAR(10),
    price DECIMAL(10, 2),
    purchase_date DATETIME,
    FOREIGN KEY (showtime_id) REFERENCES Showtimes(showtime_id)
    -- Optional: FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
