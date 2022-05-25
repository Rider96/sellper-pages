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
  width: 222px;
  margin-left: 14px;
  border-right: 1px solid rgb(217, 217, 217);
  padding-bottom: 14px;
  padding-top: 14px;
  display: flex;
  align-items: center;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";

  font-weight: 600;
  font-size: 14px;

  color: #191919;
`;

const RightLabel = styled.div.attrs((props) => {})`
  margin-left: 16px;
  padding-bottom: 14px;
  padding-top: 14px;
  display: flex;
  align-items: center;
`;

const RightValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";

  font-weight: 400;
  font-size: 14px;

  color: #191919;
`;

const RightImpact = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Bold";

  font-weight: 700;
  font-size: 14px;

  color: #191919;
`;

function ProductSaleConCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 383,
          width: "100%",
          marginBottom: 134,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 16,
            color: "#191919",
            marginLeft: 28,
            marginTop: 18,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              color: "#0594D7",
            }}
          >
            상품 판매 관리 시&nbsp;
          </div>
          <div>이부분을 놓치면 안돼요!</div>
          <img
            style={{
              width: 14,
              height: 18,
              marginLeft: 8,
            }}
            src="./sellper-pages/assets/images/consulting/contents/icon2_01.png"
            alt="icon2_01"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#AAAAAA",
          }}
        />
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 16,
                height: 16,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon2_02.png"
              alt="icon2_02"
            />
            <LeftValue>판매량</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>배송비가&nbsp;</RightValue>
            <RightImpact>3,000원을 초과해</RightImpact>
            <RightValue>&nbsp;가격의 효율성이 낮아보입니다.</RightValue>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 17,
                height: 17,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon2_03.png"
              alt="icon2_03"
            />
            <LeftValue>평점</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>배송비가&nbsp;</RightValue>
            <RightImpact>3,000원을 초과해</RightImpact>
            <RightValue>&nbsp;가격의 효율성이 낮아보입니다.</RightValue>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 17,
                height: 18,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon2_04.png"
              alt="icon2_04"
            />
            <LeftValue>포토리뷰</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>배송비가&nbsp;</RightValue>
            <RightImpact>3,000원을 초과해</RightImpact>
            <RightValue>&nbsp;가격의 효율성이 낮아보입니다.</RightValue>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 14,
                height: 16,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon2_05.png"
              alt="icon2_05"
            />
            <LeftValue>평균 배송일</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>배송비가&nbsp;</RightValue>
            <RightImpact>3,000원을 초과해</RightImpact>
            <RightValue>&nbsp;가격의 효율성이 낮아보입니다.</RightValue>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 15,
                height: 14,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon2_06.png"
              alt="icon2_06"
            />
            <LeftValue>판매자 답변</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>배송비가&nbsp;</RightValue>
            <RightImpact>3,000원을 초과해</RightImpact>
            <RightValue>&nbsp;가격의 효율성이 낮아보입니다.</RightValue>
          </RightLabel>
        </Layout>
        <Layout
          style={{
            borderBottom: "none",
          }}
        >
          <LeftLabel>
            <img
              style={{
                width: 16,
                height: 13,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon2_07.png"
              alt="icon2_07"
            />
            <LeftValue>쿠폰</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>배송비가&nbsp;</RightValue>
            <RightImpact>3,000원을 초과해</RightImpact>
            <RightValue>&nbsp;가격의 효율성이 낮아보입니다.</RightValue>
          </RightLabel>
        </Layout>
      </div>
    </>
  );
}

export default ProductSaleConCard;
