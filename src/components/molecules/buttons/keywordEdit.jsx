import styled from "styled-components";

const ButtonWrapper = styled.div.attrs((props) => {})`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: 15px;
  font-family: "Pretendard-SemiBold";
  font-weight: 600;

  background: #ffffff;
  border: ${(props) =>
    props.active === "true" ? "1px solid #0594d7" : "1px solid #aaaaaa"};
  border-radius: 50px;
  box-shadow: ${(props) =>
    props.active === "true" ? "2px 2px 8px rgba(0, 0, 0, 0.08)" : "none"};

  color: ${(props) => (props.active === "true" ? "#0594d7" : "#555555")};

  &:hover {
    background: #ffffff;
    border: 1px solid #0594d7;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 50px;

    color: #0594d7;

    .name {
      color: #0594d7 !important;
    }

    .image {
      filter: opacity(0.5) drop-shadow(0 0 0 #0594d7) !important;
    }
  }
`;

const KeywordEdit = (props) => {
  return (
    <ButtonWrapper {...props}>
      <img
        className="image"
        style={{
          width: 14,
          height: 14,
          marginRight: 7,
        }}
        src="./sellper-pages/assets/icons/keyword_edit.png"
        alt="keyword_edit"
      />
      <div className="name">키워드 수정하기</div>
    </ButtonWrapper>
  );
};

export default KeywordEdit;
