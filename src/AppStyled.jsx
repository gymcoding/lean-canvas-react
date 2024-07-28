import './App.css';
import Card from './components/StyledComponents/Card';
import BaseButton from './components/StyledComponents/BaseButton';
import StyledButton from './components/StyledComponents/StyledButton';
function App() {
  return (
    <>
      <Card />
      <hr />
      <BaseButton>BaseButton</BaseButton>
      <StyledButton>StyledButton</StyledButton>
    </>
  );
}

export default App;
