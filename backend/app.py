from flask import Flask, request, jsonify
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from flask_cors import CORS
import os
import nltk

# Check if in deployment environment
if os.getenv("DEPLOY_ENV") == "true":
    nltk_data_dir = "/app/nltk_data"  # Custom NLTK data directory
    if not os.path.exists(nltk_data_dir):
        os.makedirs(nltk_data_dir)

    nltk.data.path.append(nltk_data_dir)
    nltk.download("vader_lexicon", download_dir=nltk_data_dir)

else:
    nltk_data_path = os.path.join(os.getcwd(), 'nltk_data')
    nltk.data.path.append(nltk_data_path)

app = Flask(__name__)

CORS(app)

# Initialize the SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()

# Function to get sentiment from VADER
def get_sentiment(text):
    score = sia.polarity_scores(text)
    if score['compound'] >= 0.05:
        return "positive"
    elif score['compound'] <= -0.05:
        return "negative"
    else:
        return "neutral"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data['text']
    sentiment = get_sentiment(text)

    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
