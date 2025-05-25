🎬 Full Stack React Native Movie App

A fully-featured Movie App built with React Native and Expo.
This project demonstrates modern mobile development practices, including navigation, API integration, custom hooks, and responsive design.
🚀 Features

    Browse trending and latest movies

    Search for movies by title

    View detailed movie information

    Responsive UI with custom navigation

    Data fetching from TMDB API

    Built with Expo for easy development and deployment

📸 Screenshots
<!-- Add your own screenshots here --> <p align="center"> <img src="screenshots/home.png" width="200" /> <img src="screenshots/details.png" width="200" /> <img src="screenshots/search.png" width="200" /> </p>
🛠️ Tech Stack

    React Native

    Expo

    React Navigation

    TMDB API

    Tailwind CSS (NativeWind) for styling

📦 Getting Started
Prerequisites

    Node.js (v16+ recommended)

    Expo CLI

    Yarn or npm

    TMDB API Key (sign up here)

Installation

    Clone the repository

bash
git clone https://github.com/yourusername/your-movie-app.git
cd your-movie-app

Install dependencies

bash
yarn install
# or
npm install

Set up environment variables

Create a .env file in the root directory and add your TMDB API key:

text
TMDB_API_KEY=your_tmdb_api_key_here

Start the development server

    bash
    expo start

    Run on your device

        Use the Expo Go app (iOS/Android) to scan the QR code.

        Or run on an emulator with i (iOS) or a (Android) in the Expo CLI.

📝 Project Structure

text
.
├── assets/             # Images, icons, etc.
├── components/         # Reusable components
├── hooks/              # Custom React hooks
├── navigation/         # Navigation configuration
├── screens/            # App screens (Home, Search, Details, etc.)
├── utils/              # Utility functions
├── App.js              # Entry point
├── app.json            # Expo config
└── ...

🔑 API Reference

    This app uses The Movie Database (TMDB) API for fetching movie data.

    You must provide your own API key in the .env file.

🚢 Deployment

To create a production build:

bash
expo build:android   # For Android APK/AAB
expo build:ios       # For iOS (requires MacOS)

For more deployment options, see Expo Deployment Docs.
🙏 Acknowledgements

    TMDB API

    Expo

Happy Coding! 🎉
