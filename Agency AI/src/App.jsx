import { useState } from "react";
import NavBar from "./Components/NavigationBar.jsx";


function App() {
  const [Theme , setTheme]=useState("light")

  return (
    <div className="dark:bg-black relative">
      <NavBar Theme={Theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
