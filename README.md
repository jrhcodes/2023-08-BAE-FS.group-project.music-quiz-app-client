# SwapSounds Music Quiz App

SwapSounds is a music quiz app where users can test their knowledge of songs and artists. The app allows users to play the quiz game, view high scores, and track their own scores. It integrates with Google Sign-In for a seamless user experience.

## Table of Contents

- [SwapSounds Music Quiz App](#swapsounds-music-quiz-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

SwapSounds is a fun and interactive music quiz app that challenges users to identify songs and artists. The app provides a variety of songs for users to guess and offers a countdown timer to add excitement to the game. Users can compete with others for high scores and track their own performance over time.

## Features

- **Google Sign-In:** Users can sign in with their Google accounts for a personalized experience.
- **Gameplay:** Engaging music quiz gameplay where users guess song names and artists.
- **Countdown Timer:** A timer adds urgency to the game, making it more challenging.
- **High Scores:** Users can view the top scores to see how they compare to other players.
- **User Profiles:** Users can track their own high scores and performance history.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- React and React Router
- Google OAuth Client ID (provided in `.env` file)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/The-A-Listers/music-quiz-app-client.git>
   cd swap-sounds-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the project root and add your Google OAuth Client ID:

   ```
   VITE_CLIENT_ID=your-client-id
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

   The app will be accessible at `http://localhost:5173`.

## Usage

1. Visit `http://localhost:5173` in your browser.
2. Sign in with your Google account.
3. Play the music quiz game by guessing song names and artists.
4. View high scores and track your own performance in the app.

## Screenshots

![Welcome Screen](/path/to/welcome-screen.png)
*Welcome Screen*

![Gameplay Screen](/path/to/gameplay-screen.png)
*Gameplay Screen*

![High Scores Screen](/path/to/highscores-screen.png)
*High Scores Screen*

## Contributing

1. Fork the repository on GitHub.
2. Clone your forked repository (`git clone https://github.com/The-A-Listers/music-quiz-app-client.git`).
3. Create a new branch for your feature (`git checkout -b feature-name`).
4. Commit your changes and push to the branch (`git commit -am 'Add new feature'`).
5. Create a new pull request and describe your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
