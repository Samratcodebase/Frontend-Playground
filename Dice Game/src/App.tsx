import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
function App() {
  const [isGame, setisGame] = useState<boolean>(false);

  const toggleGame = () => {
    setisGame((prev) => {
      return !prev;
    });
  };
  return <>{isGame ? <Game /> : <Home toggle={toggleGame} />}</>;
}

export default App;
