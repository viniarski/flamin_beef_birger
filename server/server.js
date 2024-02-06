import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();
const db = new Database('database.db');
const PORT = '8080';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'CONNECTED' });
  res.status(200);
});

// POST REVIEWS
app.post('/review', (req, res) => {
  try {
    const name = req.body.reviews.reviewName
    const reviewMsg = req.body.reviews.reviewMsg
    const rating = req.body.reviews.rate
    console.log(name, reviewMsg, rating)

    const newReviews = db.prepare(`INSERT INTO reviews (name, reviewMsg, rating) VALUES (?, ?, ?)`).run(name, reviewMsg, rating);
    console.log(newReviews)
    res.status(200).json(newBooking);
  } catch (err) {
    res.status(500).json({error: err})
  }
})

// GET REVIEWS
app.get('/review', (req, res) => {
  try {
    let reviews = db.prepare(`SELECT * FROM reviews`).all();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err });
  }
})

app.get('/booking', (req, res) => {
  try {
    let bookings = db.prepare(`SELECT * FROM bookings`).all();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post('/booking', (req, res) => {
  try {
    const name = req.body.bookings.name;
    const surname = req.body.bookings.surname;
    const phone = req.body.bookings.phone;
    const email = req.body.bookings.email;
    const time = req.body.bookings.time;
    const date = req.body.bookings.date;
    // console.log(name, surname, phone, email, time, date)

    const newBooking = db.prepare(
        `INSERT INTO bookings (name, surname, phoneNo, email, time, date) VALUES (?, ?, ?, ?, ?, ?)`
      ).run(name, surname, phone, email, time, date);

    res.status(200).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`);
});
