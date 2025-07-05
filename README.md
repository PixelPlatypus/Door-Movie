# Door Movie App

## Description

"Door Movie" is a mobile application built with React Native and Expo that allows users to manage and discover movies. It provides a seamless experience for browsing movie details, creating new movie entries, and managing user profiles.

## Setup and Installation

To get started with the Door Movie app, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (LTS version recommended)
- npm or Yarn
- Expo CLI: `npm install -g expo-cli`

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/PixelPlatypus/Door-Movie
    cd Door-Movie
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add your Appwrite credentials. You can refer to the `lib/appwrite.js` file for required variables.

    ```
    APPWRITE_ENDPOINT=your_appwrite_endpoint
    APPWRITE_PROJECT_ID=your_appwrite_project_id
    APPWRITE_DATABASE_ID=your_appwrite_database_id
    APPWRITE_COLLECTION_ID=your_appwrite_collection_id
    ```

4.  **Run the application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the Expo developer tools in your browser. You can then:

    -   Scan the QR code with the Expo Go app on your mobile device (iOS or Android).
    -   Run on an Android emulator by pressing `a` in the terminal.
    -   Run on an iOS simulator by pressing `i` in the terminal.
    -   Run in a web browser by pressing `w` in the terminal.

## Project Structure

```
MovieList/
├── app/                  # Expo Router application routes
│   ├── (auth)/           # Authentication related screens (login, register)
│   ├── (dashboard)/      # Main application screens (movies, profile, create)
│   └── _layout.jsx       # Root layout for the app
├── assets/               # Static assets (images, icons)
├── components/           # Reusable UI components
├── constants/            # Application-wide constants (e.g., Colors.js)
├── contexts/             # React Contexts for global state management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and Appwrite integration
├── .env                  # Environment variables
├── app.json              # Expo configuration file
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.