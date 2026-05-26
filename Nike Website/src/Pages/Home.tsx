import Button from "../components/Button";
import Nav from "../components/Nav";
import HeroImg from "../assests/hero-image.png";

const Home = () => {
  return (
    <>
      <Nav />

      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "170px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontWeight: "800",
              lineHeight: "102px",
              fontSize: "108px",
            }}
          >
            YOUR FEET DESERVE THE BEST
          </h1>

          <p
            style={{
              fontWeight: "800",
              color: "#2e2e2e",
              maxWidth: "400px",
            }}
          >
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              Text="SHOP NOW"
              style={{
                backgroundColor: "#d01c28",
                padding: "10px",
                color: "white",
                fontSize: "16px",
                width: "100px",
                textAlign: "center",
              }}
            />

            <Button
              Text="Catagory"
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                color: "#2e2e2e",
                fontSize: "16px",
                width: "100px",
                textAlign: "center",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "gray",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <img
            src={HeroImg}
            alt=""
            style={{
              width: "900px",
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
