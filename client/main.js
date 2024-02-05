const form = document.getElementById('booking')
const baseURL = import.meta.env.VITE_ServerURL

function handleBooking(e) {
    e.preventDefault()

    const formData = new FormData(form)
    const bookings = Object.fromEntries(formData)

    console.log(bookings)
    // if (bookings.name == '' || bookings.phoneNo == '')

    fetch(`${baseURL}/booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({bookings})
    })

}

form.addEventListener('click', handleBooking)