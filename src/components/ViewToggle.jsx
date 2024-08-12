import { FaTh, FaList } from 'react-icons/fa';

function ViewToggle({ isGridView, setIsGridView }) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setIsGridView(true)}
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        aria-label="Grid view"
      >
        <FaTh />
      </button>
      <button
        onClick={() => setIsGridView(false)}
        className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        aria-label="List view"
      >
        <FaList />
      </button>
    </div>
  );
}

export default ViewToggle;
