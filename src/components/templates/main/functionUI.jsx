import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

import FunctionItem from "../../organisms/main/functionItem";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 648px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function FunctionUI() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const isLogin = localStorage.getItem("isLogin");

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 36,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                fontWeight: "bold",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  color: "#191919",
                }}
              >
                셀퍼에서 제공하는&nbsp;
              </div>
              <div
                style={{
                  color: "#0594D7",
                }}
              >
                똑똑한 기능
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FunctionItem
                onClick={() => {
                  history.push("/keywordTrend/kFind");
                }}
                style={{
                  marginRight: 24.13,
                }}
                title={"Keyword Trend"}
                name={"키워드 찾기"}
                detail01={"상위노출에 최적화된"}
                detail02={"키워드를 찾아드립니다!"}
                imgSrc={"sellper-pages/assets/icons/function01.png"}
                imgSrc02={"sellper-pages/assets/icons/function01_active.png"}
                imgAlt={"function01"}
                imgWidth={59}
                imgHeight={39}
              />

              <FunctionItem
                onClick={() => {
                  history.push("/keywordTrend/kAnalysis");
                }}
                style={{
                  marginRight: 24.13,
                }}
                title={"Keyword Trend"}
                name={"키워드 분석"}
                detail01={"키워드 분석 어렵지 않아요!"}
                detail02={"셀퍼가 도와드릴게요."}
                imgSrc={"sellper-pages/assets/icons/function02.png"}
                imgSrc02={"sellper-pages/assets/icons/function02_active.png"}
                imgAlt={"function02"}
                imgWidth={48.82}
                imgHeight={44.78}
              />

              <FunctionItem
                onClick={() => {
                  history.push("/shoppingTrend/cFind");
                }}
                title={"Shopping Trend"}
                name={"아이템 판매 순위"}
                detail01={"장 잘나가는 아이템들의"}
                detail02={"전체 판매 순위를 공개합니다!"}
                imgSrc={"sellper-pages/assets/icons/function03.png"}
                imgSrc02={"sellper-pages/assets/icons/function03_active.png"}
                imgAlt={"function03"}
                imgWidth={49}
                imgHeight={38.6}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 24,
              }}
            >
              <FunctionItem
                onClick={() => {
                  isLogin === "true"
                    ? history.push("/consulting/price")
                    : history.push("/consultingReady/price");
                }}
                style={{
                  marginRight: 24.13,
                }}
                title={"Sellper Consulting"}
                name={"가격 분석"}
                detail01={"가격에 대한 모든 데이터를"}
                detail02={"파헤쳐 드립니다!"}
                imgSrc={"sellper-pages/assets/icons/function04.png"}
                imgSrc02={"sellper-pages/assets/icons/function04_active.png"}
                imgAlt={"function04"}
                imgWidth={34}
                imgHeight={55.47}
              />

              <FunctionItem
                onClick={() => {
                  isLogin === "true"
                    ? history.push("/consulting/exposure")
                    : history.push("/consultingReady/exposure");
                }}
                style={{
                  marginRight: 24.13,
                }}
                title={"Sellper Consulting"}
                name={"노출 순위 분석"}
                detail01={"내 상품이 몇 순위로 노출되고"}
                detail02={"있는지 추적해드릴게요!"}
                imgSrc={"sellper-pages/assets/icons/function05.png"}
                imgSrc02={"sellper-pages/assets/icons/function05_active.png"}
                imgAlt={"function05"}
                imgWidth={52}
                imgHeight={41.09}
              />

              <FunctionItem
                onClick={() => {
                  isLogin === "true"
                    ? history.push("/consulting/contents")
                    : history.push("/consultingReady/contents");
                }}
                title={"Shopping Trend"}
                name={"콘텐츠 분석"}
                detail01={"노출 최적화를 위해 스마트스토어를"}
                detail02={"분석하고 진단을 내려드려요!"}
                imgSrc={"sellper-pages/assets/icons/function06.png"}
                imgSrc02={"sellper-pages/assets/icons/function06_active.png"}
                imgAlt={"function06"}
                imgWidth={41}
                imgHeight={41}
              />
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default FunctionUI;
