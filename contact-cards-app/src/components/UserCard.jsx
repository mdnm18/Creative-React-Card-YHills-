// src/components/UserCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

// This component receives 'user' and 'deleteUser' as props
function UserCard({ user, deleteUser }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="user-card"
      variants={cardVariants}
      layout // This animates the card's position when the list re-orders
    >
      <button onClick={() => deleteUser(user.id)} className="delete-btn">
        &times;
      </button>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </motion.div>
  );
}

export default UserCard;