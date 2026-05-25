type styleT = {
  backgroundColor: string;
  padding: string;
  color: string;
  fontSize: string;
  width: string;
  textAlign: "center" | "left" | "right";
};
type props = {
  Text: string;
  style: styleT;
};
const Button = ({ Text, style }: props) => {
  const TextStyle = {
    backgroundColor: style.backgroundColor,
    padding: style.padding,
    color: style.color,
    fontSize: style.fontSize,
    width: style.width,
    textAlign: style.textAlign,
    display:"inline"
  };
  return (
    <>
      <h1 style={TextStyle}>{Text}</h1>
    </>
  );
};

export default Button;
