import Database from "better-sqlite3";

const db = new Database('database.db')

db.exec(`CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    surname TEXT,
    phoneNo INTEGER,
    email TEXT,
    time INTEGER,
    date TEXT
)`)

db.exec(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    reviewMsg TEXT,
    rating INTEGER
)`)

db.exec(`INSERT INTO reviews (name, reviewMsg, rating) VALUES 
    ('John Doe', 'Great food, great staff, great time', 5),
    ('Jane Smith', 'Good establishment', 4)
    `)
