import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(217, 217, 217);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 8px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  margin-left: 14px;
  border-right: 1px solid rgb(217, 217, 217);
  padding-bottom: 11px;
  padding-top: 13px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const LeftPercent = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 13px;
  color: #0594d7;
  padding-right: 16px;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 13px;

  color: #191919;
`;

const RightLabel = styled.div.attrs((props) => {})`
  margin-right: 14px;
  padding-bottom: 11px;
  padding-top: 13px;
  display: flex;
  align-items: center;
  padding-left: 17px;
  flex: 1;
`;

const RightValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 13px;

  color: #006c9e;
`;

const RightUnit = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 1px;
}
  color: #191919;
`;

function PriceBottomCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontFamily: "Pretendard-Bold",
            fontWeight: 700,
            fontSize: 14,
            color: "#191919",
            marginLeft: 18,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <div>이 가격을 추천드립니다</div>
          <img
            style={{
              width: 12,
              height: 12,
              marginRight: 10,
              marginLeft: 9,
            }}
            src="/assets/icons/right_arrow_color.png"
            alt="right_arrow_color"
          />
          <div
            style={{
              color: "#006C9E",
            }}
          >
            {props.title}
          </div>
        </div>
        <div
          style={{
            height: 1,
            backgroundColor: "#AAAAAA",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 13,
            color: "#191919",
            marginLeft: 18,
            paddingBottom: 13,
            paddingTop: 13,
            borderBottom: "1px solid #D9D9D9",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            {props.content}
          </div>
          <div style={{ flex: 1 }}>예상 수익</div>
        </div>
        <Layout>
          <LeftLabel>
            <LeftPercent>10%</LeftPercent>
            <LeftValue>1,500원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1,000</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>20%</LeftPercent>
            <LeftValue>2,510원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1,820</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>30%</LeftPercent>
            <LeftValue>3,900원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>2,950</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>40%</LeftPercent>
            <LeftValue>9,630원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>7,590</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>50%</LeftPercent>
            <LeftValue>16,250원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>12,950</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>60%</LeftPercent>
            <LeftValue>24,360원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>19,520</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>70%</LeftPercent>
            <LeftValue>38,960원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>31,350</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>80%</LeftPercent>
            <LeftValue>60,620원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>48,890</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftPercent>90%</LeftPercent>
            <LeftValue>196,250원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>158,750</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
        <Layout
          style={{
            borderBottom: "none",
          }}
        >
          <LeftLabel>
            <LeftPercent>100%</LeftPercent>
            <LeftValue>994,390원</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>805,240</RightValue>
            <RightUnit>원</RightUnit>
          </RightLabel>
        </Layout>
      </div>
    </>
  );
}

export default PriceBottomCardM;
