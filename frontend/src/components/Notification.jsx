const Notification = ({ message, type, onClose }) => {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div
      className={`${bgColor} text-white p-4 rounded-md fixed top-5 right-5 shadow-lg`}
    >
      <div className='flex items-center justify-between'>
        <p>{message}</p>
        <button
          onClick={onClose}
          className='ml-4 text-white font-bold hover:text-gray-300'
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Notification;
