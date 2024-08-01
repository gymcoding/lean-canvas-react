import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function CanvasDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  console.log('searchParams: ', searchParams.get('keyword'));

  const location = useLocation();
  console.log('location: ', location);
  return (
    <div>
      CanvasDetail
      <p>id: {id}</p>
      <p>keyword: {searchParams.get('keyword')}</p>
      <p>hash: {location.hash}</p>
    </div>
  );
}

export default CanvasDetail;
