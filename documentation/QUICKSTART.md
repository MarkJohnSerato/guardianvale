# Guardian Vale Security - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js installed ([Download here](https://nodejs.org))
- MySQL Server running ([Download here](https://dev.mysql.com/downloads/mysql/))
- MySQL Workbench or Command Line access

---

## Step 1: Create Database (2 minutes)

### Using MySQL Workbench:
1. Open MySQL Workbench
2. Click "File" → "Open SQL Script"
3. Select `database_setup.sql` from your project folder
4. Click the Lightning bolt icon to execute
5. ✅ Done!

### Using Command Line:
```bash
mysql -u root -p < database_setup.sql
```
(Enter your MySQL password when prompted)

---

## Step 2: Install & Run (2 minutes)

1. Locate the package.json 
2. Open Terminal/Command Prompt in the project folder
3. Run:
```bash
npm install
```

4. Then start the server:
```bash
npm start
```

5. Open browser and go to: **http://localhost:3200**

---

## Step 3: Test It Out (1 minute)

- ✅ Scroll down and click "Get a Free Quote" button
- ✅ Fill out the contact form
- ✅ Click "Submit" → Check MySQL for the saved data
- ✅ Fill out feedback form → See your testimonial on the page!

---

## Database Structure

### `contacts` table - Stores inquiries
```
id, first_name, last_name, email, phone, message, created_at
```

### `feedback` table - Stores feedback & testimonials
```
id, name, email, rating (1-5), message, feedback_type, created_at
```

### `testimonials` table - Approved testimonials
```
id, name, message, rating, approved, created_at
```

---

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| "Cannot connect to database" | Make sure MySQL is running. Check `.env` credentials |
| "Port 3200 already in use" | Change `PORT=3201` in `.env` file |
| "npm install fails" | Delete `node_modules` folder and try again |
| "No tables in database" | Run `database_setup.sql` in MySQL Workbench |

---

## What's Included

✅ Professional security company website
✅ Fully responsive design (mobile, tablet, desktop)
✅ Contact form with database integration
✅ Feedback/testimonial system with ratings
✅ Live testimonials display
✅ Services showcase
✅ Industries served section
✅ Dark theme with gold accents

---

## Next Steps (Recommendations)

### Week 1
- Get feedback from stakeholders
- Customize text and images
- Test all forms thoroughly

### Week 2
- Add email notifications
- Create admin panel to manage inquiries
- Add more testimonials

### Week 3
- Deploy to cloud (Heroku, AWS, DigitalOcean)
- Set up domain name
- Add analytics

---

## File Locations

```
📁 guardianvale/
  📄 server.js (Backend)
  📄 package.json (Dependencies)
  📄 .env (Settings)
  📁 public/
    📄 index.html (Website)
    📄 styles.css (Design)
    📄 script.js (Interactive features)
  📄 database_setup.sql (Database structure)
  📄 README.md (Full documentation)
```

---

## Need Help?

1. **Check the README.md** for detailed documentation
2. **Check the terminal** for error messages
3. **Check browser console** (F12) for frontend errors
4. **Verify MySQL** is running and has the right tables

---

**Your website is ready to launch! 🎉**
