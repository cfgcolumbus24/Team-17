// UserPage.js
import React, { useState, useEffect } from 'react';
import UserService from './api/UserService';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from the backend
    UserService.getAllUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h1>User Directory</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
