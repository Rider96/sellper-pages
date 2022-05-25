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

function ProductAddConCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 393,
          width: "100%",
          marginBottom: 33,
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
            상품 등록 시&nbsp;
          </div>
          <div>이부분은 꼭 고려해주셔야 해요!</div>
          <img
            style={{
              width: 14,
              height: 18,
              marginLeft: 8,
            }}
            src="./assets/images/consulting/contents/icon1_01.png"
            alt="icon1_01"
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
                width: 18,
                height: 18,
                marginRight: 10,
              }}
              src="./assets/images/consulting/contents/icon1_02.png"
              alt="icon1_02"
            />
            <LeftValue>썸네일 이미지</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>고객의 이해를 돕기 위해 썸네일은&nbsp;</RightValue>
            <RightImpact>최소 4장</RightImpact>
            <RightValue>을 업로드 하는 것이 좋아요.</RightValue>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 18,
                height: 18,
                marginRight: 10,
              }}
              src="./assets/images/consulting/contents/icon1_03.png"
              alt="icon1_03"
            />
            <LeftValue>상세페이지 이미지</LeftValue>
          </LeftLabel>
          <RightLabel style={{ paddingBottom: 12, paddingTop: 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <RightValue>
                  상세페이지가 한개의 통이미지로 되어있어서 로딩이
                  느립니다!&nbsp;
                </RightValue>
                <RightImpact>분할시키면 좋을 것 같아요.</RightImpact>
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 12,
                  color: "#999999",
                }}
              >
                (평균 분할 이미지 갯수 : 26개)
              </div>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 16,
                height: 16,
                marginRight: 10,
              }}
              src="./assets/images/consulting/contents/icon1_04.png"
              alt="icon1_04"
            />
            <LeftValue>상품 할인율</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>상품&nbsp;</RightValue>
            <RightImpact>가격 할인율을 책정</RightImpact>
            <RightValue>하면 고객들의 마음을 더 사로잡을 수 있어요.</RightValue>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 17,
                height: 13,
                marginRight: 10,
              }}
              src="./assets/images/consulting/contents/icon1_05.png"
              alt="icon1_05"
            />
            <LeftValue>배송비 측정</LeftValue>
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
                width: 13,
                height: 18,
                marginRight: 10,
              }}
              src="./assets/images/consulting/contents/icon1_06.png"
              alt="icon1_06"
            />
            <LeftValue>리뷰 포인트 적립</LeftValue>
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
                width: 17,
                height: 17,
                marginRight: 10,
              }}
              src="./assets/images/consulting/contents/icon1_07.png"
              alt="icon1_07"
            />
            <LeftValue>태그</LeftValue>
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

export default ProductAddConCard;
