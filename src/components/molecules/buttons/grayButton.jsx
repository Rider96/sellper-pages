import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: #616161;
  border-color: #616161;
  border-radius: 50px;
  color: #ffffff;
  font-family: "Pretendard-Bold";
  font-weight: 700;

  &:hover {
    background: #0594d7;
    border-color: #0594d7;
    color: #ffffff;
  }
`;

const GrayButton = (props) => {
  return <ButtonWrapper {...props} />;
};

export default GrayButton;
