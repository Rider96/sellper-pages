import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  cursor: pointer;

  background: #06be34;
  border-radius: 61px;
  color: #ffffff;
  border-color: #06be34;

  &:hover {
    background: #06be34;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-color: #06be34;
  }
`;

const NaverButton = (props) => {
  return <ButtonWrapper {...props} />;
};

export default NaverButton;
