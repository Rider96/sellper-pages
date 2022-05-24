import React, { useState } from "react";
import styled from "styled-components";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #72c4ff;
  height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function EventBar() {
  return (
    <>
      <Layout>
        <div
          style={{
            color: "white",
            fontFamily: "Pretendard-Bold",
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          셀퍼 멤버십 서비스가 새롭게 오픈했습니다. 할인 혜택을 누려보세요!
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 16,
            width: 68,
            height: 23,
            backgroundColor: "white",
            borderRadius: 2,
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            marginBottom: 3,
          }}
        >
          <div
            style={{
              marginRight: 5,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "Pretendard-SemiBold",
              color: "#191919",
            }}
          >
            혜택받기
          </div>
          <img
            style={{
              width: 4,
              height: 8,
            }}
            src="assets/icons/right_arrow.png"
            alt="right_arrow"
          />
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
            }}
            src="assets/icons/close.png"
            alt="close"
          />
        </div>
      </Layout>
    </>
  );
}

export default EventBar;
