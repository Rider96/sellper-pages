import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(217, 217, 217);
  margin-left: 16px;
  margin-right: 16px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  width: 201.5px;
  margin-left: 14px;
  border-right: 1px solid rgb(217, 217, 217);
  padding-bottom: 14px;
  padding-top: 14px;
  display: flex;
  align-items: center;
`;

const LeftPercent = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Bold";
  font-weight: 700;
  font-size: 13px;
  width: 48px;
  color: #0594d7;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 14px;

  color: #191919;
`;

const RightLabel = styled.div.attrs((props) => {})`
  margin-left: 36.5px;
  padding-bottom: 14px;
  padding-top: 14px;
  display: flex;
  align-items: center;
`;

const RightValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 15px;

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

function PriceBottomCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 660,
          width: 528,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontFamily: "Pretendard-Bold",
            fontWeight: 700,
            fontSize: 18,
            color: "#191919",
            marginLeft: 30,
            marginTop: 19,
            marginBottom: 17,
          }}
        >
          <div>이 가격을 추천드립니다</div>
          <img
            style={{
              width: 15,
              height: 15,
              marginRight: 8,
              marginLeft: 8,
            }}
            src="assets/icons/right_arrow_color.png"
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
            width: "100%",
            height: 1,
            backgroundColor: "#AAAAAA",
            marginBottom: 18,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 14,
            color: "#191919",
            marginLeft: 16,
            marginRight: 16,
            paddingBottom: 18,
            borderBottom: "1px solid #D9D9D9",
          }}
        >
          <div
            style={{
              width: 201.5,
              marginLeft: 14,
            }}
          >
            {props.content}
          </div>
          <div
            style={{
              marginLeft: 36.5,
            }}
          >
            예상 수익
          </div>
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

export default PriceBottomCard;
