// src/components/UserList.jsx

import React from 'react';
import UserCard from './UserCard';
import { motion, AnimatePresence } from 'framer-motion';

// Receives 'users' and 'deleteUser' props
function UserList({ users, deleteUser }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Animate children one by one
      },
    },
  };

  return (
    <div className="user-list glass-card">
      <h2>Contact Hub</h2>
      {users.length === 0 ? (
        <p>Your contact list is empty. Add someone!</p>
      ) : (
        <motion.div
          className="user-list-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {users.map((user) => (
              <motion.div key={user.id} exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}>
                <UserCard user={user} deleteUser={deleteUser} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default UserList;