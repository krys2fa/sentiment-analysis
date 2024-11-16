const ResultDisplay = ({ sentiment }) => (
  <div className='mt-4'>
    {sentiment && <p className='text-lg font-bold'>Sentiment: {sentiment}</p>}
  </div>
);

export default ResultDisplay;
