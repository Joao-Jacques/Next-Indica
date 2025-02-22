# Next-Indica

## Overview
Next-Indica is a project designed to manage event subscriptions and rankings. It provides an API for subscribing to events, accessing invite links, and retrieving ranking information.

## Features
- Event subscription management
- Invite link generation and access
- Ranking system for event participants

## Installation
To install the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Next-Indica.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Next-Indica
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
To start the project, run:
```bash
npm start
```
Then open your browser and navigate to `http://localhost:3000`.

## API Endpoints
The project provides the following API endpoints:

- `POST /subscriptions`: Subscribe to an event
- `GET /invites/:subscriberId`: Access invite link
- `GET /ranking`: Get ranking information
- `GET /subscribers/:subscriberId/ranking/count`: Get subscriber invite count
- `GET /subscribers/:subscriberId/ranking/clicks`: Get subscriber invite clicks count
- `GET /subscribers/:subscriberId/ranking/position`: Get subscriber ranking position

## Backend
The backend of this project is based on the repository: [nlw-connect-node](https://github.com/rocketseat-education/nlw-connect-node/)

## Contributing
We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact
For any questions or suggestions, please contact jjacques.amann@gmail.com
