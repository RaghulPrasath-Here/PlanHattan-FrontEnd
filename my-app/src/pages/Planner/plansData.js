// src/data/plansData.js
import image from '../../assests/brooklyn.jpg'
export const initialPlans = [
  {
    area: "WEST VILLAGE",
    areaImage: image,
    place: "Washington Square Park",
    date: "24/01/26",
    time: "09:00-10:30",
    predicted: "92%",
    coordinates: [-73.9973, 40.7308] // [longitude, latitude]
  },
  {
    area: "WEST VILLAGE",
    areaImage: image,
    place: "The Comedy Cellar",
    date: "24/01/26",
    time: "21:00-23:00",
    predicted: "88%",
    coordinates: [-74.0010, 40.7324]
  },
  {
    area: "SOHO",
    areaImage: image,
    place: "Shopping on Broadway",
    date: "25/01/26",
    time: "11:00-13:00",
    predicted: "78%",
    coordinates: [-74.0008, 40.7237]
  },
  // ... add coordinates for all other locations
  {
    area: "BROOKLYN",
    areaImage: image,
    place: "DUMBO Photo Walk",
    date: "30/01/26",
    time: "16:00-17:30",
    predicted: "62%",
    coordinates: [-73.9903, 40.7033]
  },
  {
    area: "BROOKLYN",
    areaImage: image,
    place: "Peter Luger Steakhouse",
    date: "30/01/26",
    time: "19:00-21:30",
    predicted: "92%",
    coordinates: [-73.9636, 40.7099]
  },
  {
    area: "CHELSEA",
    areaImage: image,
    place: "High Line Walk",
    date: "27/01/26",
    time: "15:00-16:30",
    predicted: "72%"
  },
  {
    area: "CHELSEA",
    areaImage: image,
    place: "Chelsea Market",
    date: "27/01/26",
    time: "17:00-18:30",
    predicted: "68%"
  },
  {
    area: "MIDTOWN",
    areaImage: image,
    place: "Top of the Rock",
    date: "28/01/26",
    time: "10:00-11:30",
    predicted: "45%"
  },
  {
    area: "MIDTOWN",
    areaImage: image,
    place: "Broadway Show - Hamilton",
    date: "28/01/26",
    time: "19:30-22:00",
    predicted: "98%"
  },
  {
    area: "UPPER WEST SIDE",
    areaImage: image,
    place: "American Museum of Natural History",
    date: "29/01/26",
    time: "10:00-13:00",
    predicted: "85%"
  },
  {
    area: "UPPER WEST SIDE",
    areaImage: image,
    place: "Levain Bakery",
    date: "29/01/26",
    time: "13:30-14:00",
    predicted: "55%"
  },
  {
    area: "BROOKLYN",
    areaImage: image,
    place: "DUMBO Photo Walk",
    date: "30/01/26",
    time: "16:00-17:30",
    predicted: "62%"
  },
  {
    area: "BROOKLYN",
    areaImage: image,
    place: "Peter Luger Steakhouse",
    date: "30/01/26",
    time: "19:00-21:30",
    predicted: "92%"
  },
  {
    area: "QUEENS",
    areaImage: image,
    place: "Museum of the Moving Image",
    date: "31/01/26",
    time: "11:00-13:00",
    predicted: "38%"
  },
  {
    area: "QUEENS",
    areaImage: image,
    place: "Flushing Chinatown Food Tour",
    date: "31/01/26",
    time: "18:00-20:30",
    predicted: "58%"
  }
].sort((a, b) => {
  const dateA = new Date(a.date.split('/').reverse().join('/'));
  const dateB = new Date(b.date.split('/').reverse().join('/'));
  if (dateA - dateB !== 0) return dateA - dateB;
  
  const timeA = a.time.split('-')[0];
  const timeB = b.time.split('-')[0];
  return timeA.localeCompare(timeB);
});