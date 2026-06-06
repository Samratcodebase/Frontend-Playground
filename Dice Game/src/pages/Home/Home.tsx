import "./Home.css";
import DiceIMG from "../../../public/dices.png";
import Button from "../../components/button";
type HomeProps = {
  toggle: () => void;
};
function Home({ toggle }: HomeProps) {
  return (
    <div className="Home-Container">
      <div className="Left-Container">
        <div className="Img-Container">
          <img src={DiceIMG} alt="Dice-Image" />
        </div>
      </div>
      <div className="Right-Container">
        <div className="Dice-Container">
          <h1 className="Dice-Game">DICE GAME</h1>
          <div className="btn" onClick={toggle}>
            <Button
              ButtonText="Play Now"
              ButtonTextColor="#f3eeeeec"
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
        </div>
      </div>
    </div>
  );
}

export default Home;
