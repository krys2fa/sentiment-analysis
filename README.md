# Sentiment Analysis App

This project is a **Sentiment Analysis** application that analyzes the sentiment of a given text input using the **VADER Sentiment Lexicon**. The app consists of two main parts:

- **Backend (Flask)**: A Flask REST API that processes the sentiment analysis.
- **Frontend (React)**: A React-based user interface to interact with the backend and display results.

The app uses a **CI/CD pipeline** for automated testing and deployment to **Render** (for the Flask backend) and **Vercel** (for the React frontend).

## Features

- **Sentiment Analysis**: Analyze the sentiment of text (positive, negative, neutral).
- **React Frontend**: Input text, submit it for analysis, and view results.
- **Flask Backend**: Handles requests from the frontend and performs sentiment analysis.
- **Continuous Integration & Deployment (CI/CD)**: Automated build, test, and deploy processes via GitHub Actions.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask, VADER Sentiment Lexicon (via NLTK)
- **Database**: None (Simple text analysis)
- **Deployment**: Render (Backend), Vercel (Frontend)
- **CI/CD**: GitHub Actions

## Getting Started

Follow these instructions to set up the app locally for development and testing.

### Prerequisites

- Python 3.9 or higher
- Node.js 16 or higher
- npm (Node Package Manager)
- Docker (optional, for containerization)

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sentiment-analysis-app.git
cd sentiment-analysis-app
```

#### 2. Backend (Flask)

##### 2.1 Navigate to the backend directory:

```bash
cd backend
```

##### 2.2 Create a Virtual Environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```

##### 2.3 Install Python Dependencies:

```bash
pip install -r requirements.txt
```

#####2.4 Download the VADER Lexicon:

```python
import nltk
nltk.download('vader_lexicon')
```

##### 2.5 Run the Flask App:

```bash
python app.py
```

Your Flask backend should now be running at http://127.0.0.1:5000.

#### 3. Frontend (React)

##### 3.1 Navigate to the frontend directory:

```bash
cd ../frontend
```

##### 3.2 Install React Dependencies:

```bash
npm install
```

3.3 Run the React App:

```bash
npm start
```

Your React frontend should now be running at http://localhost:3000.

Docker Setup (Optional)
You can use Docker to handle both frontend and backend in containers. Here’s how to build and run both:

#### Build Docker Image:

```bash
docker-compose build
```

#### Start Containers:

```bash
docker-compose up
```

The frontend will be available at http://localhost:3000 and the backend at http://localhost:5000.

#### CI/CD Pipeline

#### Continuous Integration

This app uses GitHub Actions for automated testing on both the backend (Flask) and frontend (React). Tests are run on every push to the main branch or on pull requests.

#### Continuous Deployment

Once tests pass, the app will be automatically deployed to the following platforms:

##### Backend: Render

##### Frontend: Vercel

##### Backend (Flask) Deployment

The Flask backend is deployed automatically to Render using GitHub Actions. Make sure to link your GitHub repository to Render and set the necessary environment variables.

##### Frontend (React) Deployment

The React frontend is deployed to Vercel automatically using GitHub Actions. Ensure that you have configured Vercel to deploy from your GitHub repository.

#### API Documentation

##### Endpoint: /predict

##### Method: POST

##### Description: Sends a POST request with a text payload to analyze sentiment.

##### Request Body:

```json
{
  "text": "I am so happy today!"
}
```

##### Response:

```json
{
  "sentiment": "positive"
}
```

#### Testing

##### Backend Testing (Flask)

To test the backend API locally, you can use tools like Postman or curl to make a POST request to http://127.0.0.1:5000/predict with a JSON payload.

```bash
curl -X POST http://127.0.0.1:5000/predict -H "Content-Type: application/json" -d '{"text": "I feel amazing!"}'
```

##### Frontend Testing (React)

React tests are configured using Jest. You can run the tests locally by using the following command:

```bash
npm run test
```

#### Troubleshooting

##### Issue: VADER Lexicon Not Found

If you encounter the error:

```
Resource vader_lexicon not found.
```

Make sure to download the lexicon by running the following command in Python:

```python
import nltk
nltk.download('vader_lexicon')
```

##### Issue: CORS Error

If you encounter CORS issues when the frontend tries to connect to the Flask backend, ensure that the CORS package is properly configured in the Flask app:

```python
from flask_cors import CORS
CORS(app)
```

#### License

This project is licensed under the MIT License - see the LICENSE file for details.

#### Acknowledgments

- VADER Sentiment Lexicon
- Flask
- React
- Vercel
- Render
