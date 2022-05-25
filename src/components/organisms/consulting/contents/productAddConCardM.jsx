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

function ProductAddConCardM(props) {
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
            상품 등록 시&nbsp;
          </div>
          <div>이부분은 꼭 고려해주셔야 해요!</div>
          <img
            style={{
              width: 12,
              height: 15,
              marginLeft: 7,
              marginBottom: 2,
            }}
            src="./sellper-pages/assets/images/consulting/contents/icon1_01.png"
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
              src="./sellper-pages/assets/images/consulting/contents/icon1_02.png"
              alt="icon1_02"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>썸네일 이미지</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>고객의 이해를 돕기 위해 썸네일은&nbsp;</RightValue>
              <RightImpact>최소 4장</RightImpact>
              <RightValue>을 업로드 하는 것이 좋아요.</RightValue>
            </div>
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
              src="./sellper-pages/assets/images/consulting/contents/icon1_03.png"
              alt="icon1_03"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>상세페이지 이미지</TitleValue>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "block",
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
                  marginTop: 8,
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
                marginRight: 12,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon1_04.png"
              alt="icon1_04"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>상품 할인율</TitleValue>
            <div
              style={{
                display: "block",
              }}
            >
              <RightValue>상품&nbsp;</RightValue>
              <RightImpact>가격 할인율을 책정</RightImpact>
              <RightValue>
                하면 고객들의 마음을 더 사로잡을 수 있어요.
              </RightValue>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <img
              style={{
                width: 17,
                height: 13,
                marginRight: 11,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon1_05.png"
              alt="icon1_05"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>배송비 측정</TitleValue>
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
                width: 13,
                height: 18,
                marginRight: 15,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon1_06.png"
              alt="icon1_06"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>리뷰 포인트 적립</TitleValue>
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
                width: 17,
                height: 17,
                marginRight: 11,
              }}
              src="./sellper-pages/assets/images/consulting/contents/icon1_07.png"
              alt="icon1_07"
            />
          </LeftLabel>
          <RightLabel>
            <TitleValue>태그</TitleValue>
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

export default ProductAddConCardM;
