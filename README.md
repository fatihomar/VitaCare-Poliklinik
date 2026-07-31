# VitaCare Poliklinik

VitaCare Poliklinik is a web application designed to manage clinic operations and patient appointments. It provides a booking system for patients and allows clinic staff to manage doctor schedules and medical records. 

The project is built with a decoupled architecture, separating the frontend and backend environments.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Django
- **Database:** SQLite

## Features

- Book, update, and cancel medical appointments
- View available doctors and their time slots
- Manage patient data and basic medical records
- RESTful API architecture

## Project Structure

```text
VitaCare-Poliklinik/
├── backend/       # Django REST API and models
└── frontend/      # React user interface
```

## Local Setup

To run this project on your local machine, you need to set up both the backend and frontend environments separately.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows use: 
   venv\Scripts\activate
   # On Mac/Linux use: 
   # source venv/bin/activate
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run database migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Author
Fatih Omar
