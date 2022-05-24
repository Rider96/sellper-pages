import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import InputSearchMain from "../../atoms/inputSearchMain";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 433px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function KeywordSearch() {
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
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 36,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  fontWeight: "bold",
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
                  <img
                    style={{
                      position: "absolute",
                      width: 11,
                      height: 11,
                    }}
                    src="assets/icons/impact.png"
                    alt="impact"
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#191919",
                }}
              >
                스마트한 데이터 분석을 통해 매출상승을 도와드립니다!
              </div>
              <InputSearchMain
                style={{ marginTop: 30 }}
                placeholder="분석하고싶은 키워드를 입력해주세요"
              />
            </div>
            <img
              style={{
                width: 330,
                height: 289,
              }}
              src="assets/images/rocket.png"
              alt="rocket"
            />
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default KeywordSearch;
