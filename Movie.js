// Movies Collection
db.createCollection("Movies");
db.Movies.insertMany([
    {
        _id: ObjectId(),
        title: "Movie Title",
        genre: "Genre",
        duration_minutes: 120,
        rating: 8.5,
        release_date: ISODate("2024-01-01")
    }
    // Add more movie documents as needed
]);

// Theatres Collection
db.createCollection("Theatres");
db.Theatres.insertMany([
    {
        _id: ObjectId(),
        name: "Theatre Name",
        location: "Theatre Location",
        capacity: 300
    }
    // Add more theatre documents as needed
]);

// Showtimes Collection
db.createCollection("Showtimes");
db.Showtimes.insertMany([
    {
        _id: ObjectId(),
        movie_id: ObjectId("reference_movie_id"), // Replace with actual Movie _id
        theatre_id: ObjectId("reference_theatre_id"), // Replace with actual Theatre _id
        show_date: ISODate("2024-01-02"),
        start_time: "14:00:00",
        end_time: "16:30:00"
    }
    // Add more showtime documents as needed
]);

// Tickets Collection
db.createCollection("Tickets");
db.Tickets.insertMany([
    {
        _id: ObjectId(),
        showtime_id: ObjectId("reference_showtime_id"), // Replace with actual Showtime _id
        user_id: ObjectId("reference_user_id"), // Optional: Replace with actual User _id
        seat_number: "A10",
        price: 15.00,
        purchase_date: ISODate("2024-01-01T12:30:00Z")
    }
    // Add more ticket documents as needed
]);
