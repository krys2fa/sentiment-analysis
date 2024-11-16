import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

const InputForm = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        text,
      });
      setSentiment(response.data.sentiment);
      setError(null);
    } catch (error) {
      console.error("Error connecting to the backend:", error);
      setError("Unable to connect to the backend. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <textarea
          className='w-full border p-2'
          rows='4'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter text...'
        ></textarea>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2'>
          Analyze Sentiment
        </button>
      </form>

      {/* Sentiment Result */}
      {sentiment && (
        <div className='mt-4 p-4 bg-green-100 text-green-700 rounded-md shadow-md'>
          Sentiment: {sentiment}
        </div>
      )}

      {/* Error Notification */}
      {error && (
        <Notification
          message={error}
          type='error'
          onClose={() => setError(null)}
        />
      )}
    </>
  );
};

export default InputForm;
