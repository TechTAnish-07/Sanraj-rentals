import React, { useState, useEffect } from 'react';
import './Home.css';
import Review from './Review'
import bgImg from '../assets/homepageimage.png'
import { useNavigate } from 'react-router-dom';
//import Cars from '/Cars'
import ContactUs from '../ContactUs';
const Home = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [language, setLanguage] = useState('true');
  const [clickedNav, setClickedNav] = useState('');
  
const handleSubmit = async (e) => {
  e.preventDefault();

  const startTime = new Date(`${pickupDate}T${pickupTime}`).toISOString();
  const endTime = new Date(`${dropoffDate}T${pickupTime}`).toISOString();

  navigate(`/cars?location=${location}&start=${startTime}&end=${endTime}`);
};
  function handleTanslate() {
    setLanguage(!language);
  }
  useEffect(() => {
    if (clickedNav) {
      document.title = `${clickedNav}`;
    }
  }, [clickedNav]);
  const navigate = useNavigate();
  function handleBookButton() {
    navigate('/cars');
  }


  return (
    <div>
      <div className="home-container" >

        <section className="car-hero"  
        style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
        >
          <div className="form-overlay">
            <form onSubmit={handleSubmit} className="booking-form">
              <h3 className="form-title">Book Your Dream Car</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Pick-Up Date</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Pick-Up Time</label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Drop-Off Date</label>
                <input
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="form-submit-btn" >
                Find Vehicles
              </button>
            </form>
          </div>

          <div className="car-hero-content">
            <h2 className="car-model">BMW M4 Competition</h2>
            <p className="car-price">From 1200 AED/day</p>
            <span className="car-tag">LUXURY PERFORMANCE</span>
          </div>
        </section>

        <section className="car-description">
          <p>Experience the thrill of premium performance. The BMW M4 Competition delivers
            track-inspired dynamics with everyday practicality.</p>
          <button className="book-button" onClick={() => {
            handleBookButton();
            setClickedNav('Cars');
          }

          }>Book Now</button>
        </section>
      </div>




      <div>

        <section className="why-choose-us" id="why-us">
          <h2>Why Choose <span style={{ color: 'red' }}>SAngRAj</span> Rental?</h2>
          <div className="why-choose-content">
            <p>
              At SAngRAj Rental, we redefine mobility with an unmatched blend of luxury,
              reliability, and affordability. Our meticulously maintained fleet of premium
              vehicles ensures you ride in style, whether it's a sleek sedan for business
              or a rugged SUV for adventure. With transparent pricing, 24/7 customer support,
              and flexible rental plans, we prioritize your convenience and peace of mind.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">✔</div>
                <div className="benefit-text">Wide selection of late-model vehicles</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✔</div>
                <div className="benefit-text">Competitive rates with no hidden fees</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✔</div>
                <div className="benefit-text">Quick and easy booking process</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✔</div>
                <div className="benefit-text">Round-the-clock roadside assistance</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✔</div>
                <div className="benefit-text">Personalized service tailored to your needs</div>
              </div>
            </div>
          </div>
        </section>

        <Review />

        <section id="about">

          <h2>About <span style={{ color: 'red' }}>SAngRAj</span> Rental</h2>
          <button className="translate-button" onClick={() => handleTanslate()}>
            Translate to {language ? "Hindi" : "English"}
          </button>


          {language ? (
            <p>
              SAngRaj Rentals was founded with a clear vision — to redefine the car rental experience by offering unmatched reliability, affordability, and customer satisfaction. What began as a small local rental service has now grown into a trusted name in mobility solutions across the region. With a proud history spanning over 5 years, we've consistently delivered top-notch service, serving thousands of happy customers from all walks of life. Our fleet has expanded from just 3 vehicles to over 100 well-maintained, fuel-efficient cars ranging from economy to luxury class. We are proud recipients of the “Best Local Mobility Service” award for three consecutive years and are known for our transparent pricing and 24/7 customer support. At SAngRaj Rentals, we don't just rent cars — we deliver peace of mind. Whether you're planning a short city trip, a family vacation, or a business journey, our mission is to ensure every ride with us is smooth, safe, and memorable. Your journey begins with us — because at SAngRaj, we drive dreams.
            </p>
          ) : (
            <p>
              SAngRaj Rentals की शुरुआत एक स्पष्ट लक्ष्य के साथ हुई थी — कार रेंटल अनुभव को विश्वसनीयता, किफायती दरों और उत्कृष्ट ग्राहक सेवा के साथ एक नया रूप देना। एक छोटे से स्थानीय रेंटल सर्विस के रूप में शुरू होकर आज हम क्षेत्र की एक भरोसेमंद और प्रतिष्ठित नाम बन चुके हैं। बीते 5 वर्षों में, हमने लगातार उत्कृष्ट सेवाएं प्रदान की हैं और हजारों संतुष्ट ग्राहकों की यात्रा को सहज बनाया है। हमारी फ्लीट 3 गाड़ियों से बढ़कर अब 100 से अधिक आधुनिक, ईंधन-कुशल गाड़ियों तक पहुँच चुकी है — जिनमें किफायती से लेकर लग्ज़री कारें शामिल हैं। हमें लगातार तीन वर्षों तक “सर्वश्रेष्ठ स्थानीय मोबिलिटी सेवा” पुरस्कार से सम्मानित किया गया है, और हम अपनी पारदर्शी कीमतों और 24/7 ग्राहक सहायता के लिए जाने जाते हैं। SAngRaj Rentals सिर्फ कार किराए पर नहीं देता, हम विश्वास और सुकून की सवारी कराते हैं। चाहे आपकी योजना एक छोटा शहर भ्रमण हो, पारिवारिक यात्रा या व्यवसायिक मीटिंग — हमारा मिशन है कि आपकी हर यात्रा सुरक्षित, सहज और यादगार बने। आपकी यात्रा हमारे साथ शुरू होती है — क्योंकि SAngRaj में, हम आपके सपनों को सड़कों पर उतारते हैं।
            </p>
          )}
        </section>
        <section id="contact">
         
               <ContactUs/>
        </section>
      </div>
    </div>
  );
};

export default Home;