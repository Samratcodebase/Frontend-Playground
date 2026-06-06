
export type ButtonProps = {
  ButtonText: string;
  ButtonTextColor: string;
  ButtonColor: string;

  width: string;
  height: string;
  borderRadius: string;

  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;

  gap: string;
};

function Button(prop: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    color: prop.ButtonTextColor,
    backgroundColor: prop.ButtonColor,

    width: prop.width,
    height: prop.height,
    borderRadius: prop.borderRadius,

    paddingTop: prop.paddingTop,
    paddingRight: prop.paddingRight,
    paddingBottom: prop.paddingBottom,
    paddingLeft: prop.paddingLeft,

    gap: prop.gap,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <button style={buttonStyle}>{prop.ButtonText}</button>;
}

export default Button;
