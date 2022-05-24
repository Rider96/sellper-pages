import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 40px;

  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  background: #ffe812;
  border-radius: 61px;
  color: #ffffff;
  border-color: #ffe812;

  &:hover {
    background: #ffe812;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-color: #ffe812;
  }
`;

const KakaoButton = (props) => {
  return <ButtonWrapper {...props} />;
};

export default KakaoButton;
