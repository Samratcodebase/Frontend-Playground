interface ButtonProps {
  text: string;
  textColor: string;
  width?: string;
  height?: string;
  backgroundColor: string;
}

function Button({
  text,
  textColor,
  width = "auto",
  height = "44px",
  backgroundColor,
}: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    width,
    height,
    color: textColor,
    backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    transition: "background 0.15s, transform 0.1s",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.9";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.98)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {text}
    </button>
  );
}

export default Button;
