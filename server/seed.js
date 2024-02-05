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
