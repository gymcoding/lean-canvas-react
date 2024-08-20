function Error({ message, onRetry }) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-8">
        <p className="text-xl font-semibold text-red-600 mb-4">{message}</p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          재시도
        </button>
      </div>
    </div>
  );
}

export default Error;
