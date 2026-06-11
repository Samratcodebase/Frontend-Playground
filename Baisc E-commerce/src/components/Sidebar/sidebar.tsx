import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="container">
      <Category />
      <Colors />
    </div>
  );
}

export default Sidebar;
