import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles['card-container']}>
      <h2>Styled Component</h2>
      <p>이것은 styled-components로 만든 카드입니다.</p>
    </div>
  );
}

export default Card;
