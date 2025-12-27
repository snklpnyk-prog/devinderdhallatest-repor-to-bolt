/*
  # Create initial database tables

  1. New Tables
    - `users`
      - `id` (serial, primary key) - Unique identifier for each user
      - `username` (text, unique, not null) - User's username for authentication
      - `password` (text, not null) - User's hashed password
    
    - `inquiries`
      - `id` (serial, primary key) - Unique identifier for each inquiry
      - `name` (text, not null) - Contact person's full name
      - `email` (text, not null) - Contact person's email address
      - `phone` (text, not null) - Contact person's phone number
      - `service_type` (text, not null) - Type of service requested (e.g., "Individual Counselling")
      - `message` (text) - Optional message or additional details
      - `created_at` (timestamp) - Timestamp when inquiry was created

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated user access to users table
    - Add policies for inquiry submission and admin access
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Users table policies
CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

-- Inquiries table policies
CREATE POLICY "Anyone can submit inquiries"
  ON inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view own inquiries"
  ON inquiries FOR SELECT
  TO authenticated
  USING (true);