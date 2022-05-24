import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(217, 217, 217);
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 16px;
  padding-bottom: 20px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  padding-left: 8px;
`;

const TitleValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";

  font-weight: 600;
  font-size: 14px;
  margin-bottom: 12px;
  color: #191919;
`;

const RightLabel = styled.div.attrs((props) => {})`
  padding-right: 8px;
  display: flex;
  flex-direction: column;
`;

const RightValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";

  font-weight: 400;
  font-size: 14px;

  color: #191919;
  float: left;
`;

const RightImpact = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Bold";

  font-weight: 700;
  font-size: 14px;
  float: left;

  color: #191919;
`;

function ProductSaleConCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          width: "100%",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 15,
            color: "#191919",
            marginLeft: 16,
            paddingTop: 12,
            paddingBottom: 12,
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
              width: 16,
              height: 16,
              marginLeft: 6,
              marginBottom: 4,
            }}
            src="/assets/images/consulting/contents/icon2_01.png"
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
                marginRight: 12,
              }}
              src="/assets/images/consulting/contents/icon2_02.png"
              alt="icon2_02"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>판매량</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>배송비가&nbsp;</RightValue>
              <RightImpact>3,000원을 초과해&nbsp;</RightImpact>
              <RightValue>가격의 효율성이 낮아보입니다.</RightValue>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 17,
                height: 17,
                marginRight: 11,
              }}
              src="/assets/images/consulting/contents/icon2_03.png"
              alt="icon2_03"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>평점</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>배송비가&nbsp;</RightValue>
              <RightImpact>3,000원을 초과해&nbsp;</RightImpact>
              <RightValue>가격의 효율성이 낮아보입니다.</RightValue>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 17,
                height: 18,
                marginRight: 11,
              }}
              src="/assets/images/consulting/contents/icon2_04.png"
              alt="icon2_04"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>포토리뷰</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>배송비가&nbsp;</RightValue>
              <RightImpact>3,000원을 초과해&nbsp;</RightImpact>
              <RightValue>가격의 효율성이 낮아보입니다.</RightValue>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 14,
                height: 16,
                marginRight: 14,
              }}
              src="/assets/images/consulting/contents/icon2_05.png"
              alt="icon2_05"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>평균 배송일</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>배송비가&nbsp;</RightValue>
              <RightImpact>3,000원을 초과해&nbsp;</RightImpact>
              <RightValue>가격의 효율성이 낮아보입니다.</RightValue>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 15,
                height: 14,
                marginRight: 13,
              }}
              src="/assets/images/consulting/contents/icon2_06.png"
              alt="icon2_06"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>판매자 답변</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>배송비가&nbsp;</RightValue>
              <RightImpact>3,000원을 초과해&nbsp;</RightImpact>
              <RightValue>가격의 효율성이 낮아보입니다.</RightValue>
            </div>
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
                marginRight: 12,
              }}
              src="/assets/images/consulting/contents/icon2_07.png"
              alt="icon2_07"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>쿠폰</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>배송비가&nbsp;</RightValue>
              <RightImpact>3,000원을 초과해&nbsp;</RightImpact>
              <RightValue>가격의 효율성이 낮아보입니다.</RightValue>
            </div>
          </RightLabel>
        </Layout>
      </div>
    </>
  );
}

export default ProductSaleConCardM;
