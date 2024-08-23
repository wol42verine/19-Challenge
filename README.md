# Just Another Text Editor (J.A.T.E)

## Description

Just Another Text Editor (J.A.T.E) is a Progressive Web Application (PWA) that allows users to create notes or code snippets with or without an internet connection. This single-page application meets the PWA criteria and features various data persistence techniques to ensure redundancy in case one of the options is not supported by the browser. The application also functions offline.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the necessary dependencies and set up the project, run the following commands from the root directory:

```sh
npm install
cd client
npm install
cd ../server
npm install
cd ..

## Usage

To start the application, run the following command from the root directory:

npm run start

This will start both the backend server and serve the client application. You can then access the application in your browser.

## Features

Create notes or code snippets with or without an internet connection.
Data persistence using IndexedDB with the idb package.
Offline functionality.
Responsive design for different screen sizes.

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

## License

This project is licensed under the MIT License.