import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

const InputForm = ({ setSentiment }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/predict`, {
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
