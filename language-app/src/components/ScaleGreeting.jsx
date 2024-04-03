export const ScaleGreeting = ({ onDecrease, onIncrease }) => {
  return (
    <div>
      <button type="button" onClick={onDecrease}>-</button>
      <button type="button" onClick={onIncrease}>+</button>
    </div>
  );
};