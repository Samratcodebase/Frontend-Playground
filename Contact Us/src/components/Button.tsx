type buttonConfig = {
  Text: string;
  TextColor: string;

  BtnWidth?: string;
  BtnHiegt?: string;
  BtnBackgroundColor: string;
};

function Button(props: buttonConfig) {
  const ButtonStyle = {
    width: props.BtnWidth,
    height: props.BtnHiegt,
    color: props.TextColor,
    backgroundColor: props.BtnBackgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px 50px",
  };

  return <div style={ButtonStyle}> {props.Text}</div>;
}

export default Button;
