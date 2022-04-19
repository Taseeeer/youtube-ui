import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import "./youtubeui.scss";

function App() {

  const [theme, setTheme] = useState(null);
  console.log(theme);
  
  return (
    <div className={`App ${theme ? 'dark-theme' : ''}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Body />
    </div>
  );
}

export default App;
