# Guardian Vale Security Website - Setup Guide

## Project Overview
This is a professional security company website built with:
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js with Express
- **Database**: MySQL
- **Features**: Contact forms, feedback system, testimonials

---

## Step 1: Install Dependencies

1. Open terminal in your project directory (`c:\Users\markj\Desktop\guardianvale`)
2. Run the following command:

```bash
npm install
```

This will install all required packages:
- express (web framework)
- mysql2 (database driver)
- cors (cross-origin support)
- body-parser (parse request bodies)
- dotenv (environment variables)
- nodemon (auto-restart during development)

---

## Step 2: Set Up MySQL Database

### Option A: Using MySQL Workbench (Recommended)

1. **Open MySQL Workbench**
2. **Create a new database** with this SQL:

```sql
-- Create Database
CREATE DATABASE guardian_vale_db;

-- Use the database
USE guardian_vale_db;

-- Create Contacts Table
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Feedback Table
CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    rating INT (1-5),
    message TEXT,
    feedback_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Testimonials View (Optional - for approved testimonials)
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    rating INT,
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. **Verify tables were created**: You should see `contacts`, `feedback`, and `testimonials` tables

### Option B: Using Command Line

```bash
mysql -u root -p < database_setup.sql
```

---

## Step 3: Configure Environment Variables

1. Open the `.env` file in your project root
2. Update with your MySQL credentials:

```env
PORT=3200
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=guardian_vale_db
```

**Note**: If you didn't set a MySQL password, leave `DB_PASSWORD` empty or set it to the correct password.

---

## Step 4: Start the Server

1. In the terminal, run:

```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

2. You should see:
```
Guardian Vale Security Server running on http://localhost:3200
Make sure MySQL is running and database is set up
```

3. Open your browser and go to: **http://localhost:3200**

---

## API Endpoints

### Contact Form
- **POST** `/api/contact`
- **Body**:
```json
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "message": "Interested in your services"
}
```

### Submit Feedback/Testimonial
- **POST** `/api/feedback`
- **Body**:
```json
{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "rating": 5,
    "message": "Excellent security service!",
    "feedbackType": "testimonial"
}
```

### Get All Feedback
- **GET** `/api/feedback`
- Returns last 10 testimonials

### Health Check
- **GET** `/api/health`

---

## Features Implemented

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Contact Form** - Saves to contacts table
✅ **Feedback/Testimonial System** - Users can submit feedback with ratings
✅ **Live Testimonials** - Displays submitted feedback on homepage
✅ **Dark Theme** - Professional gold & black color scheme
✅ **Services Section** - Displays all security offerings
✅ **Trusted Clients Section** - Placeholder for partner logos
✅ **FAQ Section** - Integrated feedback form
✅ **SEO Friendly** - Proper meta tags and structure

---

## Troubleshooting

### "Cannot connect to database"
- ✓ Make sure MySQL server is running
- ✓ Verify credentials in `.env` file
- ✓ Check database name matches (guardian_vale_db)

### "Port 3200 already in use"
- Change PORT in `.env` file to 3201, 3202, etc.
- Or kill the process: `lsof -i :3200` (Mac/Linux) or `netstat -ano | findstr :3200` (Windows)

### "npm install fails"
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure Node.js is installed (`node -v`)

---

## Recommendations & Enhancements

### Phase 1 (Current)
- ✅ Basic website structure
- ✅ Contact and feedback forms
- ✅ Database integration

### Phase 2 (Recommended)
- Add admin dashboard to manage inquiries
- Email notifications for new contacts/feedback
- Image gallery for services
- Live chat support
- Blog section

### Phase 3 (Future)
- Payment integration for quotes
- Appointment scheduling
- SMS notifications
- Customer portal
- Analytics dashboard

---

## File Structure

```
guardianvale/
├── public/
│   ├── index.html       # Main website
│   ├── styles.css       # Styling
│   └── script.js        # Frontend JavaScript
├── server.js            # Express backend
├── package.json         # Dependencies
├── .env                 # Configuration
└── README.md            # This file
```

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up MySQL database (use the SQL provided)
3. ✅ Update `.env` with your MySQL credentials
4. ✅ Start server: `npm start`
5. ✅ Open http://localhost:3200
6. ✅ Test contact form and feedback submission

---

## Support

For issues or questions:
- Check MySQL is running
- Verify `.env` configuration
- Check browser console for errors (F12)
- Check server console for backend errors

---

**Created**: 2026
**Version**: 1.0.0
