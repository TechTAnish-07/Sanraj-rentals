// carData.js

import fortunerImg from '../assets/fortuner.png';
import cretaImg from '../assets/creata.png';
import swiftImg from '../assets/swift.png';
import tharImg from '../assets/thar.png';
import tataEvImg from '../assets/tataEv.png';
import balenoImg from '../assets/baleno.png';
import bmwImg from '../assets/BMW.png';
import sClassImg from '../assets/sClass.png';
import gWagonImg from '../assets/G-wagon.png';
import altoImg from '../assets/alto.png';

const carList = [
  { id :1,
    name: "Toyota Fortuner", 
    model: "2022", 
    mileage: "12 km/l", 
    fuel: "Diesel", 
    seats: "7",
    image: fortunerImg,
    availability: true,
    rating: 5,
    reviews:[
  "Spacious and super comfortable for long drives!",
  "Smooth ride even with full load. Highly recommend.",
  "Fuel efficiency could be better, but overall a great family car."
]

  },
  { 
    id :2,
    name: "Hyundai Creta", 
    model: "2021", 
    mileage: "17 km/l", 
    fuel: "Petrol", 
    seats: "5",
    image: cretaImg,
    availability: true,
     rating: 4,
    reviews:[
  "Best mid-size SUV in the market. Loved the driving experience.",
  "Interior feels premium and the touchscreen is very responsive.",
  "Mileage is decent and the pickup is strong. Great for city & highway."
]



  },
  { id :3,
    name: "Maruti Swift", 
    model: "2023", 
    mileage: "22 km/l", 
    fuel: "Petrol", 
    seats: "5",
    image: swiftImg,
    availability: true,
     rating: 2,
    reviews: [
  "Zippy little car with great mileage.",
  "Perfect for city driving and easy to park.",
  "Not the most spacious, but very reliable and budget-friendly."
]


  },
  { 
    id :4,
    name: "Mahindra Thar", 
    model: "2022", 
    mileage: "15 km/l", 
    fuel: "Diesel", 
    seats: "4",
    image: tharImg,
     rating: 5,
    reviews: [
  "Head-turner! Drives like a beast.",
  "Off-roading is fun but the suspension is a bit stiff.",
  "Interior has improved a lot in the new version. Loving it!"
],

    availability: true,
  },
  { 
    id :5,
    name: "Tata Nexon EV", 
    model: "2023", 
    mileage: "300 km/full charge", 
    fuel: "Electric", 
    seats: "5",
    image: tataEvImg,
     rating: 4,
    reviews:[
  "First EV I tried — surprisingly smooth and silent!",
  "Charging infrastructure still growing, but range is enough for daily use.",
  "Stylish, eco-friendly, and futuristic."
],
    availability: true,
  },
  { 
    id :6,
    name: "Maruti Baleno", 
    model: "2023", 
    mileage: "22 km/l", 
    fuel: "Petrol", 
    seats: "5",
    image: balenoImg,
    availability: true,
     rating: 4,
    reviews: ["car is wonderfull" , "had worderfull trip with thi car"]

  },
  { 
    id :7,
    name: "BMW 5 Series", 
    model: "2022", 
    mileage: "14 km/l", 
    fuel: "Petrol", 
    seats: "5",
    image: bmwImg,
    availability: true,
     rating: 4,
    reviews: ["car is wonderfull" , "had worderfull trip with thi car"]

  },
  { 
    id :8,
    name: "Mercedes S-Class", 
    model: "2023", 
    mileage: "12 km/l", 
    fuel: "Petrol", 
    seats: "5",
    image: sClassImg,
    availability: false,
     rating: 3,
    reviews: ["car is wonderfull" , "had worderfull trip with thi car"]
  },
  { 
    id :9,
    name: "Mercedes G-Wagon", 
    model: "2022", 
    mileage: "8 km/l", 
    fuel: "Diesel", 
    seats: "5",
    image: gWagonImg,
    availability: false,
     rating: 5,
    reviews: [
  "Pure power and prestige — it turns heads everywhere!",
  "Luxury meets beast mode. It’s a tank in a tuxedo.",
  "If you know, you know. This isn’t just a car, it’s a statement."
]

  },
  { 
    id :10,
    name: "Maruti 800", 
    model: "2010", 
    mileage: "16 km/l", 
    fuel: "Petrol", 
    seats: "4",
    image: altoImg,
    availability: true,
     rating: 4,
    reviews: [
  "No ABS. No airbags. Just raw skill. Drive like a real man.",
  "Power steering? I am the power.",
  "Survived potholes, floods, and a breakup — Alto never quits.",
  "She may be small, but she's carried generations.",
  "Why flex a Lambo when Alto gets you there with ₹100 petrol?",
  "Speed? No. Presence? 100%. Alto drivers don’t race, they arrive."
]


  }
];

export default carList;
