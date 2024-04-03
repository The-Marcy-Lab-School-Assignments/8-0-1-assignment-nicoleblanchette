export const Languages = ({ onLanguageChange }) => {
  const languages = {
    English: 'I am approaching.',
    German: "Ich komme näher.",
    Japanese: "近づいています.",
    Chinese: "我正在接近.",
    Tagalog: "Papalapit na ako."
  };
  const buttons = Object.entries(languages).map(([language, translation]) => <button key={language} onClick={() => onLanguageChange(translation)}>{language}</button>);
  return (
    <div>
      {buttons}
    </div>
  );
};