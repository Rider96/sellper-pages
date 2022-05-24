import React, { useState } from "react";
import styled from "styled-components";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #72c4ff;
  height: 32px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

function EventBarM() {
  return (
    <>
      <Layout>
        <div
          style={{
            color: "white",
            fontFamily: "Pretendard-Bold",
            fontWeight: 700,
            fontSize: 11,
          }}
        >
          셀퍼 멤버십 서비스 오픈기념 할인 혜택을 누려보세요!
        </div>

        <div
          style={{
            position: "absolute",
            right: 24,
            cursor: "pointer",
          }}
        >
          <img
            style={{
              width: 12,
              height: 12,
              marginBottom: 3,
            }}
            src="./assets/icons/close.png"
            alt="close"
          />
        </div>
      </Layout>
    </>
  );
}

export default EventBarM;
