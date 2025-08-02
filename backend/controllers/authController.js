const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.sendStatus(500);

    if (!results.length) {
      console.log("🚫 Email not found");
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    console.log("🔐 User found:", user);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    console.log("✅ Login successful");
    res.json({ token });
  });
};

// Inside authController.js

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    const values = [name, email, hashedPassword, role];

    db.query(sql, values, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Database error', error: err });
      }

      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

