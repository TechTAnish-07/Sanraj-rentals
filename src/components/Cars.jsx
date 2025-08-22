import React, { useState } from 'react';
import './Cars.css';
import carList from './carData';
import Reviews from './Reviews';
import { useNavigate } from 'react-router-dom';

function Cars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [flips, setFlips] = useState({});

  const handleSearchBar = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleFlip = (index) => {
    setFlips(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredCars = carList.filter(car =>
    car.name.toLowerCase().includes(searchTerm)
  );
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for cars..."
          onChange={handleSearchBar}
          value={searchTerm}
        />
      </div>

      <h1 id="title">Ready. Set. Rent. 🚘</h1>

      <div className="container">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div className="flip-card" key={index} >
              <div className={`flip-card-inner ${flips[index] ? 'flipped' : ''}`} >

                {/* Front Side */}
                <div className="flip-card-front"  >
                  <div className="card-image" onClick={() => handleCardClick(car.id)}>
                    <img src={car.image} alt={car.name} />
                    <div className="image-overlay">
                      <span>Click to view details</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h2 className="card-title">{car.name}</h2>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < car.rating ? 'star filled' : 'star'}>
                          {i < car.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <div className="card-description">
                      <strong>Model:</strong> {car.model}<br />
                      <strong>Mileage:</strong> {car.mileage}<br />
                      <strong>Fuel Type:</strong> {car.fuel}<br />
                      <strong>Seating:</strong> {car.seats} seater<br />
                      <strong>Status:</strong>{' '}
                      <div className='Flipstatus'>
                        {car.availability ? (
                          <span className="status available">Available</span>
                        ) : (
                          <span className="status not-available">Not Available</span>
                        )}
                        <button onClick={() => toggleFlip(index)}>Show Reviews</button>

                      </div>
                    </div>

                  </div>
                </div>


                <div className="flip-card-back">
                  <div className="card-body">
                    <h2>{car.name} - Reviews </h2>

                    <Reviews reviews={car.reviews} />

                    <button onClick={() => toggleFlip(index)}>Back to Details</button>
                  </div>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No cars found matching your search.</p>
        )}
      </div>
    </>
  );
}

export default Cars;
