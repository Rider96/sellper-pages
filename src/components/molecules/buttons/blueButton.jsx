import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 40px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: #0594d7;
  border-color: #0594d7;
  border-radius: 61px;
  color: #ffffff;
  font-family: "Pretendard-Bold";
  font-weight: 700;

  &:hover {
    background: #00628f;
    border-color: #00628f;
    color: #ffffff;
  }
`;

const BlueButton = (props) => {
  return <ButtonWrapper {...props} />;
};

export default BlueButton;
