import Form from "../components/Form";
import Button from "../components/Button";
import "./Contactus.css";
function contactus() {
  return (
    <>
      <div className="container">
        <div className="Btn-container">
          <Button
            Text="VIA SUPPORT CHAT "
            TextColor="white"
            BtnWidth="220px"
            BtnHiegt="44px"
            BtnBackgroundColor=" #000000"
          />
          <Button
            Text="VIA CAll "
            TextColor="white"
            BtnWidth="220px"
            BtnHiegt="44px"
            BtnBackgroundColor=" #000000"
          />
        </div>
        <div className="btn-last">
          <Button
            Text="VIA SUPPORT CHAT "
            TextColor="white"
            BtnWidth="220px"
            BtnHiegt="44px"
            BtnBackgroundColor=" #000000"
          />
        </div>
        <Form />
      </div>
    </>
  );
}

export default contactus;
