# Memory - MERN Stack Social Media App

This is a full-stack social media application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features like user authentication, Google Sign-In, creating, reading, updating, and deleting (CRUD) posts, commenting, liking posts, and pagination. Users can also upload images for their posts using FileBase.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
   - [Frontend](#frontend)  
   - [Backend](#backend)  
3. [Installation](#installation)  
   - [Prerequisites](#prerequisites)  
   - [Steps](#steps)  
4. [Folder Structure](#folder-structure)  
   - [Backend (`server`)](#backend-server)  
   - [Frontend (`client`)](#frontend-client)  
5. [API Endpoints](#api-endpoints)  
   - [Auth Endpoints](#auth-endpoints)  
   - [Post Endpoints](#post-endpoints)  
6. [What I Learned](#what-i-learned)

---

## Features

- **User Authentication**: Users can sign up and log in using email and password or Google Sign-In (via OAuth).
- **Posts Management**: Users can create, view, edit, delete, like, and comment on posts.
- **Pagination**: Posts are paginated for improved performance.
- **Search Functionality**: Search posts by title or tags.
- **File Uploads**: Users can upload images for their posts.
- **Responsive Design**: The UI adapts to different screen sizes.

---

## Tech Stack

### Frontend:
- **React.js**: For building the user interface.
- **Material-UI**: For styled and responsive components.
- **Redux**: For state management (without Redux Toolkit).
- **React Router DOM**: For routing.
- **Google OAuth**: For Google Sign-In.
- **Axios**: For making HTTP requests.

### Backend:
- **Node.js**: Backend runtime environment.
- **Express.js**: Backend framework.
- **MongoDB**: NoSQL database for data storage.
- **JWT**: For user authentication.
- **Mongoose**: For database modeling and queries.

---

## Installation

### Prerequisites:
- Node.js
- MongoDB
- A Google Cloud Project with OAuth credentials

### Steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/YashVarmora2306/memory.git
    cd memory
    ```

2. **Install dependencies**:
    - For the backend:
      ```bash
      cd server
      npm install
      ```
    - For the frontend:
      ```bash
      cd client
      npm install
      ```

3. **Set up environment variables**:
    - Create a `.env` file in the `server` folder with the following:
      ```env
      PORT=5000
      CONNECTION_URL=your_mongodb_connection_string
      ```
    - Create a `.env` file in the `client` folder with the following:
      ```env
      REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
      ```

4. **Run the application**:
    - Start the backend:
      ```bash
      cd server
      npm start
      ```
    - Start the frontend:
      ```bash
      cd client
      npm start
      ```

5. **Access the app**:
    Open your browser and navigate to `http://localhost:3000`.

---

## Folder Structure

### Backend (`server`):
```
server/
├── controllers/
│   ├── posts.js
│   ├── user.js
├── middleware/
│   ├── auth.js
├── models/
│   ├── postMessage.js
│   ├── user.js
├── routes/
│   ├── posts.js
│   ├── user.js
└── index.js
```

### Frontend (`client`):
```
client/
├── src/
│   ├── actions/
│   │   ├── auth.js
│   │   ├── posts.js
│   ├── api/
│   │   ├── index.js
│   ├── components/
│   │   ├── Auth/
│   │   ├── Form/
│   |   ├── Home/
│   │   ├── Navbar/
│   │   ├── PostDetails/
│   │   ├── Posts/
│   ├── constants/
│   │   ├── actionTypes.js
│   ├── reducers/
│   │   ├── auth.js
│   │   ├── index.js
│   │   ├── posts.js
│   ├── App.js
│   ├── index.js
```

---

### Auth Endpoints

| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| POST   | `/user/signin`    | Log in a user.         |
| POST   | `/user/signup`    | Register a new user.   |

### Post Endpoints

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| GET    | `/posts`                  | Fetch paginated posts.          |
| GET    | `/posts/search`           | Search posts by title or tags.  |
| GET    | `/posts/:id`              | Fetch a specific post by ID.    |
| POST   | `/posts`                  | Create a new post.              |
| PATCH  | `/posts/:id`              | Update a post.                  |
| DELETE | `/posts/:id`              | Delete a post.                  |
| PATCH  | `/posts/:id/likePost`     | Like a post.                    |
| POST   | `/posts/:id/commentPost`  | Comment on a post.              |

--- 

## What I Learned  

- **Frontend Development**:  
  - Building dynamic user interfaces with React.js and Material-UI.  
  - Implementing state management using Redux.  
  - Configuring routing using React Router DOM.  

- **Backend Development**:  
  - Setting up a robust backend using Node.js and Express.js.  
  - Managing and querying data with MongoDB and Mongoose.  
  - Creating secure authentication systems with JWT.  

- **Integration**:  
  - Implementing Google OAuth for Google Sign-In functionality.  
  - Connecting the frontend and backend using Axios for seamless communication.  

- **Code Organization**:  
  - Structuring a project for scalability and maintainability.  
  - Separating concerns with controllers, models, and routes in the backend.  
  - Managing reusable components and APIs in the frontend.  

- **Performance Optimization**:  
  - Paginating posts to improve application performance.  

- **Version Control**:  
  - Using Git for managing the codebase and tracking changes.  

--- 

