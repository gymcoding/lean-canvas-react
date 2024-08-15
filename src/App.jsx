import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
