import { useEffect, useState } from 'react';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { getCanvases } from '../api/canvas';
function Home() {
  const [searchText, setSearchText] = useState();
  const [isGridView, setIsGridView] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData(params) {
    const response = await getCanvases(params);
    setData(response.data);
  }

  useEffect(() => {
    fetchData({ title_like: searchText });
  }, [searchText]);

  const handleDeleteItem = id => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <CanvasList
        filteredData={data}
        isGridView={isGridView}
        searchText={searchText}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default Home;
