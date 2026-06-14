import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="container">
      <Category />
      <Colors />
      <Price />
    </div>
  );
}

export default Sidebar;
