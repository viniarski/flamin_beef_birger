const form = document.getElementById('booking')

function handleBooking(e) {
    const formData = new FormData(form)
    const bookings = Object.fromEntries(formData)

    console.log(bookings)
    // if (bookings.name == '' || bookings.phoneNo == '')

}

form.addEventListener('click', handleBooking)