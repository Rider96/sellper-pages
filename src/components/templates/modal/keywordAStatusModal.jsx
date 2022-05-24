import React, { useState } from "react";
import styled from "styled-components";
import MobileModal from "../../atoms/mobileModal";

const Layout = styled.div.attrs((props) => {})`
  background: #fbfbfb;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.09);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

function KeywordAStatusModal(props) {
  return (
    <>
      {props.isModalVisible ? (
        <MobileModal>
          <Layout>
            <div
              onClick={() => {
                props.setAgree(true);
                props.handleCancel();
              }}
              style={{
                cursor: "pointer",
                paddingLeft: 20,
                paddingTop: 24,
                paddingBottom: 24,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
                color: props.agree ? "#0594D7" : "#191919",
              }}
            >
              {props.sales ? "매출액 그래프 보기" : "검색량 그래프 보기"}
            </div>
            <div
              onClick={() => {
                props.setAgree(false);
                props.handleCancel();
              }}
              style={{
                cursor: "pointer",
                paddingLeft: 20,
                paddingBottom: 24,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
                color: !props.agree ? "#0594D7" : "#191919",
              }}
            >
              판매량 그래프 보기
            </div>
            <div
              onClick={() => {
                props.isDateModalVisible();
                props.handleCancel();
              }}
              style={{
                cursor: "pointer",
                paddingLeft: 20,
                paddingBottom: 24,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
              }}
            >
              날짜 검색 필터
            </div>
          </Layout>
        </MobileModal>
      ) : null}
    </>
  );
}

export default KeywordAStatusModal;
