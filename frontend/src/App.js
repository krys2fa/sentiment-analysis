import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  const [sentiment, setSentiment] = useState("");

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Sentiment Analysis App</h1>
      <InputForm setSentiment={setSentiment} />
      <ResultDisplay sentiment={sentiment} />
    </div>
  );
};

export default App;
