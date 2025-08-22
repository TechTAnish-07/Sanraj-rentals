import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.isAdmin) {
      alert('Access denied. Admins only.');
      navigate('/');
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, Admin {currentUser.name || ''}!</h1>
      <p>This is the admin dashboard.</p>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
