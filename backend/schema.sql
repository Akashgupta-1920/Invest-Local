-- Drop database if it already exists (optional)
DROP DATABASE IF EXISTS pl_dashboard;

-- Create the database
CREATE DATABASE pl_dashboard;

-- Use the newly created database
USE pl_dashboard;

-- Create users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin', 'client')
);

-- Create pnl_records table
CREATE TABLE pnl_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  month VARCHAR(20),
  year INT,
  invested_amount DECIMAL(12, 2),
  current_value DECIMAL(12, 2),
  profit_loss DECIMAL(12, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
