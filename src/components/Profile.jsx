import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import UserImage from '../assets/profileimg.jpg';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.setItem("isLoggedIn", "false");
    navigate('/');
  };

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="profile-wrapper">

      <div className="profile-container">
    
        <div className="profile-content">
          <h2>Welcome, <span style={{ color: 'orange' }}>{user.fullName}</span></h2>
          <img src={UserImage} alt={user.fullName} className="UserImage" />
          <p>Email: {user.email}</p>
          <p>Contact: {user.contact || "Not provided"}</p>
          <button onClick={handleLogout}> Logout</button>
        </div>
      </div> 
    </div>
  );
};

export default Profile;
