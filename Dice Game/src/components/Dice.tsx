import styled from "styled-components";

import Button from "./button";

type DiceProp = {
  value: number;
  generateRandomNumber: () => void;
  setValue: () => void;
  setShowTip: () => void;
};
function Dice({ value, setValue, setShowTip, generateRandomNumber }: DiceProp) {
  return (
    <DiceContainer>
      <img
        src={`/dice/dice_${value}.png`}
        alt={`dice ${value}`}
        onClick={generateRandomNumber}
      />
      <p>Click on Dice to Roll</p>
      <div onClick={setValue}>
        <Button
          ButtonText="Reset Score"
          ButtonTextColor="#000000"
          ButtonColor="#f3eeeeec"
          width="220px"
          height="44px"
          borderRadius="5px"
          paddingTop="10px"
          paddingRight="18px"
          paddingBottom="10px"
          paddingLeft="18px"
          gap="10px"
        />
      </div>
      <div onClick={setShowTip}>
        <Button
          ButtonText="Show Rules"
          ButtonTextColor="#FFFFFF"
          ButtonColor="#000000"
          width="220px"
          height="44px"
          borderRadius="5px"
          paddingTop="10px"
          paddingRight="18px"
          paddingBottom="10px"
          paddingLeft="18px"
          gap="10px"
        />
      </div>
    </DiceContainer>
  );
}

export default Dice;

const DiceContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  img {
    width: 250px;
    height: 250px;
    cursor: pointer;
  }
  p {
    font-weight: 300;
    font-size: large;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;
