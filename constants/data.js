import { FaMoneyBillWave, FaBalanceScale, FaGem } from 'react-icons/fa'; 

export const selectTravelersList = [
    {
      id: 1,
      title: "Just Me",
      desc: "A sole traveler in exploration",
      people: "1",
      icon: "🧍", // Use appropriate icon
    },
    {
      id: 2,
      title: "A Couple",
      desc: "Two travelers in tandem",
      people: "2 People",
      icon: "👫", // Use appropriate icon
    },
    {
      id: 3,
      title: "Family",
      desc: "A group of loving adventurers",
      people: "5 to 10 People",
      icon: "👩‍👦",
    },
    {
      id: 4,
      title: "Friends",
      desc: "A bunch of thrill seekers",
      people: "3 to 5 People",
      icon: "👯‍♂️", // Use appropriate icon
    }
  ];
  
  export const selectBudgetOption = [
    {
      id: 1,
      title: "Cheap",
      desc: "Stay conscious of cost",
      icon: "💸", 
    },
    {
      id: 2,
      title: "Moderate",
      desc: "Keep cost at an average level",
      icon: "⚖️", 
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Don't worry about the cost",
      icon: "💎", 
    },
  ];

//export const AI_PROMPT='Generate Travel Plan for location: {location}, for {totalDay} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight Details,Flight Price with Booking url,Hotel options list with Hotel Name,Hotel address,price,hotel image url,geo coordinates,rating,descriptions and Places to visit nearby with place Name,place details,place image url,Geo coordinate,ticket pricing, time to travel each of the location for {totalDay} days and {totalNight} Night with each day plan with best time to visit in JSON format.'

//export const AI_PROMPT = 'Generate a travel plan for a {traveler} traveling from {departureCity} to {location} for {totalDay} days and {totalNight} nights with a budget of {budget}. The traveler has a preference for {travelPreferences}. Provide flight options including departure and arrival airports, airlines, departure and arrival times, prices, and booking URLs. Offer hotel options with name, address, image, geo-coordinates, star rating, amenities, guest reviews, and booking URLs. Suggest places to visit with name, description, image, geo-coordinates, opening hours, ticket prices, and estimated travel time from the hotel. Create a daily itinerary including activities, transportation, and meal suggestions. Return the plan in JSON format with error handling and alternative options.';

//export const AI_PROMPT='Generate a travel plan for the location: {location} for {totalDay} Days and {totalNight} Night for {traveler} with a {budget} budget. The travel plan should include flight details with options, prices, and booking URLs. Provide hotel options with the hotel name, address, image URL, geo-coordinates, rating, and description. Include places to visit nearby with the place name, details, image URL, geo-coordinates, ticket pricing, and the time required to travel to each location. Create a daily itinerary with a plan for each day and the best times to visit each location. Provide the travel plan in JSON format'

