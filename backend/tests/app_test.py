import unittest
from app import app

class FlaskTestCase(unittest.TestCase):
    # Set up the test client
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    # Test the /predict endpoint
    def test_predict_positive(self):
        response = self.app.post('/predict', json={"text": "I love this!"})
        self.assertEqual(response.status_code, 200)
        self.assertIn('positive', response.json['sentiment'])

    def test_predict_negative(self):
        response = self.app.post('/predict', json={"text": "I hate this!"})
        self.assertEqual(response.status_code, 200)
        self.assertIn('negative', response.json['sentiment'])

    def test_predict_neutral(self):
        response = self.app.post('/predict', json={"text": "It is what it is."})
        self.assertEqual(response.status_code, 200)
        self.assertIn('neutral', response.json['sentiment'])

if __name__ == '__main__':
    unittest.main()
