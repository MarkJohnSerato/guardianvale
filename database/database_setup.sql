-- Guardian Vale Security Database Setup Script
-- Execute this in MySQL Workbench or MySQL Command Line

-- Create Database
CREATE DATABASE guardian_vale_db;

-- Use the database
USE guardian_vale_db;

-- Create Contacts Table (for contact form submissions)
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- Create Feedback Table (for recommendations and feedback)
CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    message TEXT NOT NULL,
    feedback_type ENUM('general', 'recommendation', 'complaint', 'testimonial') DEFAULT 'general',
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_rating (rating),
    INDEX idx_type (feedback_type),
    INDEX idx_created_at (created_at)
);

-- Create Testimonials Table (for approved testimonials display)
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    message TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    approved BOOLEAN DEFAULT FALSE,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_approved (approved),
    INDEX idx_featured (featured)
);

-- Create Services Table (optional - for displaying services)
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    sort_order INT DEFAULT 0
);

-- Insert Sample Services
INSERT INTO services (name, description, icon, sort_order) VALUES
('Full Camera Installation & Monitoring', 'Professional camera installation and continuous monitoring for complete property coverage', '📹', 1),
('Proactive Crime Deterrence', 'Advanced cameras combined with human monitoring for 24/7 protective shield', '🛡️', 2),
('Tailored Plans', 'Customized security solutions for commercial, residential, healthcare, schools, and events', '📱', 3),
('Integration with Existing Systems', 'Seamless integration with existing CCTV and security infrastructure', '🔗', 4),
('Live Expert Support', 'Immediate intervention with live communication and alarm response', '👥', 5),
('Dedicated Customer Care', 'Always available support to assist with your security needs', '💼', 6);

-- Create Industries Table (optional - for tracking service areas)
CREATE TABLE industries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50)
);

INSERT INTO industries (name, description, icon) VALUES
('Multifamily', 'Comprehensive security for residential communities', '🏢'),
('Commercial', 'Advanced protection for business facilities', '🏗️'),
('Car Dealerships', 'Specialized surveillance for vehicle protection', '🚗'),
('Construction Sites', 'Security solutions for construction projects', '🏭');

-- Display all tables
SHOW TABLES;

-- Display table structure (uncomment to view)
-- DESCRIBE contacts;
-- DESCRIBE feedback;
-- DESCRIBE testimonials;
