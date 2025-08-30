# DISASTER-MANAGEMENT

DisasterAid is a comprehensive web application designed to connect victims with essential resources during disasters. It provides real-time information about hospitals, shelters, emergency alerts, and allows users to report damage or request assistance.

Features ✨
1. Resource Mapping: Interactive map showing hospitals and shelters with available capacity
2. Real-time Alerts: Emergency alerts and disaster warnings
3. Damage Reporting: System for reporting damage in affected areas
4. Assistance Requests: Platform to request emergency assistance
5. Responsive Design: Works on desktop, tablet, and mobile devices
6. Admin Dashboard: Management interface for resources and alerts

Tech Stack 🛠️
1. Frontend
HTML5, CSS3, JavaScript (ES6+)
Leaflet.js for interactive maps
Font Awesome for icons
Responsive design with CSS Grid and Flexbox

2. Backend
Node.js with Express.js
MySQL database
JWT authentication
RESTful API architecture

3. Installation & Setup 🚀
Prerequisites
Node.js (v14 or higher)
MySQL Server (v5.7 or higher)


setup:---
1. Clone the Repository
bash
git clone https://github.com/your-username/disasteraid.git
cd disasteraid


2. Backend Setup
bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Set up database
npm run setup-db

# Start the development server
npm run dev


3. Frontend Setup
bash
# Navigate to frontend directory (or root if frontend files are in root)
cd ../frontend

# Install http-server if you don't have it
npm install -g http-server

# Serve the frontend
http-server -p 3000
4. Access the Application
Frontend: http://localhost:3000
Backend API: http://localhost:5000
API Health Check: http://localhost:5000/api/health

Database Schema 📊
The application uses the following main tables:
users - User accounts and authentication
hospitals - Medical facilities with capacity information
shelters - Emergency shelters with resource availability
reports - Damage reports from users
assistance_requests - Assistance requests from affected individuals
alerts - Emergency alerts and warnings

API Endpoints 📡
Authentication
POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/profile - Get user profile

Resources
GET /api/hospitals - Get all hospitals (with optional location filtering)
GET /api/shelters - Get all shelters (with optional location filtering)
POST /api/hospitals - Create new hospital (admin only)
POST /api/shelters - Create new shelter (admin only)

Reports & Requests
GET /api/reports - Get all damage reports
POST /api/reports - Submit new damage report
GET /api/assistance - Get all assistance requests
POST /api/assistance - Submit new assistance request

Alerts
GET /api/alerts - Get all alerts
POST /api/alerts - Create new alert (admin only)

Usage Examples 💡
Reporting Damage
Navigate to the "Report Damage" section
Fill in the location, type of damage, description, and urgency level
Submit the report to notify emergency services

Finding Resources
Go to the Resource Map section
Use the filter buttons to show hospitals, shelters, or both
Click on markers to see details and get directions

Requesting Assistance
Navigate to "Request Assistance"
Select the type of assistance needed
Provide details about your situation and contact information

Project Structure 📁
text
disasteraid/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── documentation/
└── README.md
Environment Variables 🔧
Create a .env file in the backend directory with the following variables:

env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=disasteraid
JWT_SECRET=your_jwt_secret_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
NODE_ENV=development
Contributing 🤝
We welcome contributions to DisasterAid! Please follow these steps:
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

Future Enhancements 🚀
Real-time notifications with WebSockets
Mobile application version
Integration with weather APIs
SMS alert system
Volunteer management system
Multi-language support
Advanced reporting and analytics
