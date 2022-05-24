import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 18px;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: #0594d7;
  border-color: #0594d7;
  border-radius: 17.5px;
  color: #ffffff;
  font-family: "Pretendard-Bold";
  font-weight: 700;

  &:hover {
    background: #00628f;
    border-color: #00628f;
    color: #ffffff;
  }
`;

const BlueButtonMini = (props) => {
  return <ButtonWrapper {...props} />;
};

export default BlueButtonMini;
