const form = document.getElementById('booking');
// const baseURL = import.meta.env.VITE_ServerURL

function handleBooking(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const bookings = Object.fromEntries(formData);

  console.log(bookings);
  // if (bookings.name == '' || bookings.phoneNo == '')

  fetch(`http://localhost:8080/booking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bookings }),
  });

  displayConfirmation(bookings);
}

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
