import Form from "../components/Form";
import Button from "../components/Button";
import "./Contactus.css";
import contactImage from "../assets/contact.svg";
import Nav from "../components/Nav";
function Contactus() {
  return (
    <>
      {" "}
      <Nav />
      <div className="container">
        <div className="contact-wrapper">
          <div className="content">
            <div className="btn-row">
              <Button
                text="VIA SUPPORT CHAT"
                textColor="white"
                width="100%"
                height="44px"
                backgroundColor="#000000"
              />

              <Button
                text="VIA CALL"
                textColor="white"
                width="100%"
                height="44px"
                backgroundColor="#000000"
              />
            </div>

            <div className="btn-center">
              <Button
                text="VIA EMAIL FORM"
                textColor="white"
                width="100%"
                height="44px"
                backgroundColor="#000000"
              />
            </div>

            <Form />
          </div>
        </div>

        <div className="image-container">
          <img src={contactImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Contactus;
