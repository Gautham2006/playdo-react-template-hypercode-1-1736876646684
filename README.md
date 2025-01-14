# copy of google maps but as you drive it tracks your emmissions

## Project Overview
1. PROJECT OVERVIEW  
- Brief description of what the app does:  
This application is a copy of Google Maps with an added feature that tracks vehicle emissions as the user drives. The app allows users to view a map, track their location in real-time, and estimates their emissions based on speed, distance, and vehicle data.

- Key features and functionality:  
  - Interactive map powered by the Google Maps API.  
  - Real-time GPS location tracking.  
  - Calculate and display carbon emissions based on travel distance and vehicle type.  
  - User-friendly interface with responsive design.  
  - Persistent configuration for storing user data such as vehicle type.  

- Main technologies used:  
  - React.js (frontend framework)  
  - Google Maps JavaScript API and Places API  
  - Geolocation API (to track user position)  
  - Variables and units from an emissions API or custom formula  

2. DEVELOPMENT INSTRUCTIONS  

- How to run and test the application:  
  1. Clone the repository.  
  2. Ensure Node.js is installed. Run `npm install` to install dependencies.  
  3. Add a Google Maps API key in the application as instructed.  
  4. Start the development server using `npm start`.  
  5. Access the application at `http://localhost:3000`.  

- Key files and their purposes:  
  - `src/App.js`: Contains main logic with map rendering and emissions calculation.  
  - `src/App.css`: CSS for custom styling.  
  - `src/index.js`: Entry point, renders the application root.  
  - `public/index.html`: Base HTML file for the app.  
  - `public/manifest.json`: Metadata for Progressive Web App (PWA) behavior.  

- Any important configuration needed:  
You must provide a valid Google Maps API key. Create a `.env` file in the root directory and define the key as `REACT_APP_GOOGLE_MAPS_KEY`.