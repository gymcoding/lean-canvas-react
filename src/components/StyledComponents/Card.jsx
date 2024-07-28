import styled from 'styled-components';

const CardComponent = styled.div`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
`;

function Card() {
  return (
    <CardComponent>
      <h2>Styled Component</h2>
      <p>이것은 styled-components로 만든 카드입니다.</p>
    </CardComponent>
  );
}

export default Card;
