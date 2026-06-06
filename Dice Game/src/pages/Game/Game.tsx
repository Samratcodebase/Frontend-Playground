import ScoreCard from "../../components/Score";
import { useState } from "react";
import Dice from "../../components/Dice";
import NumberSelector from "../../components/numberSelector";
import "./Game.css";
function Game() {
  const [showTip, setShowTip] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [SelectedValue, setSelectedValue] = useState<number | null>(null);
  const newArr = [1, 2, 3, 4, 5, 6];
  const [Value, setValue] = useState<number>(1);
  const generateRandomNumber = () => {
    if (SelectedValue === undefined) {
      alert("Please select a number first");
      return;
    }

    const random = Math.floor(Math.random() * 6) + 1;
    setValue(random);
    if (SelectedValue === random) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
  };
  return (
    <div className="game-container">
      <div className="Nav-bar">
        <ScoreCard score={score} />
        <NumberSelector
          SelectedValue={SelectedValue}
          setSelectedValue={setSelectedValue}
          newArr={newArr}
        />
      </div>
      <div className="dice-container">
        <Dice
          value={Value}
          generateRandomNumber={generateRandomNumber}
          setValue={() => {
            setScore(0);
            setSelectedValue(null);
          }}
          setShowTip={() => setShowTip((prev) => !prev)}
        />
      </div>
      {showTip ? (
        <div className="Tip">
          <h1>How to play dice game</h1>
          <p>Select any number </p> <p> Click on dice image </p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as
          </p>
          <p>dice if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Game;
