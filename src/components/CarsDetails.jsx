import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import carList from './carData';

import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carList.find(c => c.id === parseInt(id));

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <div className="car-details">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <h2>{car.name} - Full Details</h2>
      <img src={car.image} alt={car.name} className="modal-img" />
      <p><strong>Model:</strong> {car.model}</p>
      <p><strong>Mileage:</strong> {car.mileage}</p>
      <p><strong>Fuel Type:</strong> {car.fuel}</p>
      <p><strong>Seats:</strong> {car.seats}</p>
      <p><strong>Availability:</strong> {car.availability ? 'Available' : 'Not Available'}</p>
      <p><strong>Rating:</strong> {car.rating} / 5</p>
    <h> WILL GOING TO ADD INTERIOR IMAGES AFTER LOADIND DATA ON API</h>
    </div>
  );
};

export default CarDetails;
