import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading() {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <AiOutlineLoading3Quarters className="animate-spin text-6xl text-blue-500 mx-auto mb-4" />
        <p className="text-xl font-semibold text-gray-700">Loading data...</p>
      </div>
    </div>
  );
}

export default Loading;
