import { FaSearch } from 'react-icons/fa';
function SearchBar({ searchText = '', setSearchText }) {
  return (
    <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
      <input
        type="text"
        placeholder="검색"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        aria-label="검색"
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  );
}

export default SearchBar;
