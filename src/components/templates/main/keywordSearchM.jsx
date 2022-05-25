import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import InputSearchMain from "../../atoms/inputSearchMain";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;

  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function KeywordSearchM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              marginTop: 48,
            }}
          >
            <div style={{ width: "90%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  fontWeight: "bold",
                  lineHeight: "36px",
                }}
              >
                <div
                  style={{
                    color: "#191919",
                  }}
                >
                  성공하는 온라인 마케팅,&nbsp;
                </div>
                <div
                  style={{
                    color: "#0594D7",
                    position: "relative",
                  }}
                >
                  SELLPER
                </div>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  textAlign: "center",
                  color: "#191919",
                  marginTop: 20,
                }}
              >
                스마트한 데이터 분석을 통해 매출상승을 도와드립니다!
              </div>
              <InputSearchMain
                style={{ marginTop: 12, width: "100%" }}
                placeholder="분석하고싶은 키워드를 입력해주세요"
              />
            </div>
            <img
              style={{
                width: 205.83,
                height: 168,
              }}
              src="./sellper-pages/assets/images/rocket.png"
              alt="rocket"
            />
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default KeywordSearchM;
