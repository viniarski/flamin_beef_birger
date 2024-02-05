const form = document.getElementById('booking')
// const baseURL = import.meta.env.VITE_ServerURL

 form.addEventListener('submit', async function handleBooking(event) {
    event.preventDefault()

    const formData = new FormData(form)
    const bookings = Object.fromEntries(formData)

    console.log(bookings)
    // if (bookings.name == '' || bookings.phoneNo == '')

    const response = await fetch(`http://localhost:8080/booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({bookings})
    })

    if (response.ok) {
        console.log('OKAY')
    } else {
        console.error('ERROR')
    }
})

// form.addEventListener('submit', async function handleBooking)