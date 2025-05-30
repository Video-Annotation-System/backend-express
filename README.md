# Video Annotation System Backend (Express)

## How to Set Up

To get started with the backend, follow these steps:

- **Clone the repository:**
  ```bash
  git clone [https://github.com/Video-Annotation-System/backend-express.git](https://github.com/Video-Annotation-System/backend-express.git)
  ```

- **Go to the project directory:**
  ```bash
  cd backend-express
  ```

- **Install Node.js packages:**
  ```bash
  npm install
  ```

---

## How to Run

- **Start the server:**
  ```bash
  npm start
  ```

- **Check the server's status:**
  Navigate to the following URL in your browser:
  ```url
  http://localhost:5000
  ```
  You should see the message `server running successfully`.

---

## How to Test the Endpoints

### Getting Annotation Data

- **Send a GET request to `/api/annotations`:**
  Run the following command in your terminal:
  ```bash
  curl -X GET http://localhost:5000/api/annotations
  ```
  You should see a list of annotations.

### Posting Annotation Data

- **Send a POST request to `/api/annotations` with JSON data in the body:**
  Run the following command in your terminal:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"text": "This is a new annotation", "timestamp": "2025-05-30T23:08:58Z"}' http://localhost:5000/api/annotations
  ```