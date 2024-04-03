export const Greeting = ({ greeting, fontSize }) => {
  return <h1 style={{ fontSize: `${fontSize}rem` }}>{greeting}</h1>;
};