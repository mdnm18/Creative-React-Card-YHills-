// src/components/UserForm.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    addUser({ id: Date.now(), name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <motion.form
      className="user-form glass-card"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Create a New Contact</h2>
      {error && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>{error}</p>}
      
      <motion.div className="input-wrapper" whileHover={{ scale: 1.02 }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </motion.div>
      
      <motion.div className="input-wrapper" whileHover={{ scale: 1.02 }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </motion.div>

      <motion.div className="input-wrapper" whileHover={{ scale: 1.02 }}>
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </motion.div>
      
      <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Add Contact
      </motion.button>
    </motion.form>
  );
}

export default UserForm;