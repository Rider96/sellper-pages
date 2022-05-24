import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: 15px;
  font-family: "Pretendard";
  font-weight: 600;

  background: ${(props) =>
    props.active === "true" ? "rgba(5, 148, 215, 0.03)" : "#ffffff"};

  border: ${(props) =>
    props.active === "true" ? "1px solid #0594d7" : "1px solid #aaaaaa"};
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.active === "true" ? "2px 2px 8px rgba(0, 0, 0, 0.08)" : "none"};

  color: ${(props) => (props.active === "true" ? "#0594d7" : "#999999")};

  &:hover {
    background: rgba(5, 148, 215, 0.03);
    border: 1px solid #0594d7;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 50px;

    color: #0594d7;
  }
`;

const RadioButtonThree = (props) => {
  return <ButtonWrapper {...props} />;
};

export default RadioButtonThree;
