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
}

form.addEventListener('submit', handleBooking);

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
