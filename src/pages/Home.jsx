import { useEffect, useState } from 'react';
import { createCanvas, deleteCanvas, getCanvases } from '../api/canvas';

import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Button from '../components/Button';

function Home() {
  const [searchText, setSearchText] = useState();
  const [isGridView, setIsGridView] = useState(true);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(params) {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise(resolver => setTimeout(resolver, 1000));
      const response = await getCanvases(params);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData({ title_like: searchText });
  }, [searchText]);

  const handleDeleteItem = async id => {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    try {
      await deleteCanvas(id);
      fetchData({ title_like: searchText });
    } catch (err) {
      alert(err.message);
    }
  };

  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const handleCreateCanvas = async () => {
    try {
      setIsLoadingCreate(true);
      await new Promise(resolver => setTimeout(resolver, 1000));
      await createCanvas();
      fetchData({ title_like: searchText });
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <div className="flex justify-end mb-6">
        <Button onClick={handleCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error
          message={error.message}
          onRetry={() => fetchData({ title_like: searchText })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          filteredData={data}
          isGridView={isGridView}
          searchText={searchText}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
