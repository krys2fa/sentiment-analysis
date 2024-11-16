import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ setSentiment }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://127.0.0.1:5000/predict", {
      text,
    });
    setSentiment(response.data.sentiment);
  };

  return (
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
  );
};

export default InputForm;
