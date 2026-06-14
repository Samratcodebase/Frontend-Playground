import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./sidebar.css";
export type RadioQueryType = {
  Category: string;
  Price: string;
  Color: string;
};

export type SideBarProps = {
  RadioQuery: RadioQueryType;
  setRadioQuery: React.Dispatch<React.SetStateAction<RadioQueryType>>;
};

function Sidebar({ RadioQuery, setRadioQuery }: SideBarProps) {
  return (
    <div className="container">
      <Category RadioQuery={RadioQuery} setRadioQuery={setRadioQuery} />
      <Colors RadioQuery={RadioQuery} setRadioQuery={setRadioQuery} />
      <Price RadioQuery={RadioQuery} setRadioQuery={setRadioQuery} />
    </div>
  );
}

export default Sidebar;
