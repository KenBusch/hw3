// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code
  
  //Declare variable for the Rider First Name
  let passengerFirstName = ride.passengerDetails.first

  //Declare variable for the Rider First Name
  let passengerLastName = ride.passengerDetails.last

  //Declare variable for the Phone Number
  let passengerphoneNumber = ride.passengerDetails.phoneNumber

  //Declare variable for pickup street address
  let passengerPickupAdrress = ride.pickupLocation.address

  //Declare variable for pickup city
  let passengerPickupCity = ride.pickupLocation.city

  //Declare variable for pickup state
  let passengerPickupState = ride.pickupLocation.state

  //Declare variable for pickup zip
  let passengerPickupZip = ride.pickupLocation.zip

  //Declare variable for Dropoff street address
  let passengerDropoffAdrress = ride.dropoffLocation.address

  //Declare variable for Dropoff city
  let passengerDropoffCity = ride.dropoffLocation.city

  //Declare variable for Dropoff state
  let passengerDropoffState = ride.dropoffLocation.state

  //Declare variable for Dropoff zip
  let passengerDropoffZip = ride.dropoffLocation.zip

  //Declare Variable for level of service using conditional logic
  let serviceLevel

  if (ride.purpleRequested == true) {
    serviceLevel = `Purple`
  } else if (ride.numberOfPassengers > 3) {
    serviceLevel = `XL`
  } else {
    serviceLevel = `X`
  }

//Display passenger info in a readable format using variables
console.log(`Noober ${serviceLevel} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerphoneNumber}. Pickup at ${passengerPickupAdrress}, ${passengerPickupCity}, ${passengerPickupState} ${passengerPickupZip}. Drop-off at ${passengerDropoffAdrress}, ${passengerDropoffCity}, ${passengerDropoffState} ${passengerDropoffZip}`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
