const form = document.getElementById('booking');
const reviewForm = document.getElementById('reviewForm');
// const baseURL = 'http://localhost:8080';
const baseURL = import.meta.env.VITE;
const getReviewsDiv = document.getElementById('getReviewsDiv');

function handleBooking(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const bookings = Object.fromEntries(formData);

  // console.log(bookings);

  fetch(`${baseURL}/booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bookings }),
  });

  displayConfirmation(bookings);
}

// confirmation notice

form.addEventListener('submit', handleBooking);

const noticeDisplay = document.getElementById('notice-display');

function displayConfirmation(bookings) {
  let noticeDiv = document.createElement('div');
  let confirmationNotice = document.createElement('p');
  let closeButton = document.createElement('button');

  noticeDiv.setAttribute('class', 'notice-div');
  confirmationNotice.setAttribute('class', 'confirmation-notice');
  closeButton.setAttribute('class', 'close-button');

  confirmationNotice.innerHTML = `
  Flamin' Beef Burger<br>
  🍔 🍔 🍔 <br>
  Reservation details:<br><br>
  &#8227; Name: ${bookings.name} ${bookings.surname}<br>
  &#8227; Time: ${bookings.time}<br>
  &#8227; Date: ${bookings.date}<br>`;
  closeButton.innerHTML = `Close`;

  noticeDisplay.appendChild(noticeDiv);
  noticeDiv.appendChild(confirmationNotice);
  noticeDiv.appendChild(closeButton);

  closeButton.addEventListener('click', function () {
    noticeDiv.remove();
  });
}

function handleReview(e) {
  e.preventDefault();

  const formData = new FormData(reviewForm);
  const reviews = Object.fromEntries(formData);

  // GETTING DATE WHEN SUBMITTED
  const submitDate = new Date();
  const date = `${submitDate.getUTCDate()}/${
    submitDate.getUTCMonth() + 1
  }/${submitDate.getUTCFullYear()}`;

  console.log(reviews, date);
  fetch(`${baseURL}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reviews, date }),
  });
  displayReviews();
}

// flamin' 🍔 hamburger menu!

const icon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu-links');
const menuLinks = document.querySelectorAll('.menu-links a');

icon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('open');
  icon.classList.toggle('open');

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      icon.classList.remove('open');
    });
  });
}

// FETCH REVIEWS FROM DB
async function fetchReviews() {
  const reviews = await fetch(`${baseURL}/review`);
  let result = await reviews.json();
  return result;
}

// DISPLAY REVIEWS AFTER FETCH
async function displayReviews() {
  let reviews = await fetchReviews();
  console.log(reviews);
  getReviewsDiv.innerHTML = '';

  reviews.forEach((review) => {
    let reviewDiv = document.createElement('div');
    let nameTxt = document.createElement('h3');
    let msgTxt = document.createElement('p');
    let rating = document.createElement('p');
    let dateTxt = document.createElement('p');

    reviewDiv.setAttribute('class', 'dbReviewDiv');
    nameTxt.textContent = review.name;
    nameTxt.setAttribute('class', 'reviewName');

    msgTxt.textContent = review.reviewMsg;
    msgTxt.setAttribute('class', 'reviewMsg');

    rating.textContent = review.rating;
    rating.setAttribute('class', 'reviewRating');

    dateTxt.textContent = review.reviewdate;
    dateTxt.setAttribute('class', 'dateTxt');

    reviewDiv.appendChild(nameTxt);
    reviewDiv.appendChild(dateTxt);
    reviewDiv.appendChild(msgTxt);
    reviewDiv.appendChild(rating);
    getReviewsDiv.appendChild(reviewDiv);
  });
}

displayReviews();

form.addEventListener('submit', handleBooking);
reviewForm.addEventListener('submit', handleReview);

// menu gallery

const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
let currentIndex = 0;

function showImage(index) {
  images.forEach((image) => {
    image.style.display = 'none';
  });
  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('previous').addEventListener('click', previousImage);

showImage(currentIndex);
