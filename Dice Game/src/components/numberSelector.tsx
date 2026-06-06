import styled from "styled-components";
type NumberSelectorProp = {
  SelectedValue: number | null;
  setSelectedValue: (value: number | null) => void;
  newArr: number[];
};
function NumberSelector({
  SelectedValue,
  setSelectedValue,
  newArr,
}: NumberSelectorProp) {
  return (
    <NumberSelect>
      {newArr.map((value, index) => {
        return (
          <div
            onClick={() => {
              return setSelectedValue(value);
            }}
            key={`index-${index}`}
            className={`box-select ${value === SelectedValue ? "selected" : ""}`}
          >
            <p>{value}</p>
          </div>
        );
      })}
    </NumberSelect>
  );
}
export default NumberSelector;

const NumberSelect = styled.div`
  .box-select {
    width: 72px;
    height: 72px;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #333;
    cursor: pointer;
    p {
      margin: 0;
    }

    &.selected {
      background-color: black;
      color: white;
    }
  }
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
