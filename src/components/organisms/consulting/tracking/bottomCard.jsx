import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import BlueButtonMini from "../../../molecules/buttons/blueButtonMini";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 16px;
  margin-right: 16px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  width: 129px;
  margin-left: 14px;
  border-right: 1px solid #d9d9d9;
  padding-bottom: 16px;
  padding-top: 16px;
  display: flex;
  align-items: center;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 14px;

  color: #191919;
`;

const RightLabel = styled.div.attrs((props) => {})`
  margin-left: 51px;
  padding-bottom: 14px;
  padding-top: 14px;
  display: flex;
  align-items: center;
`;

const RightValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 16px;

  color: #0594d7;
`;

const RightUnit = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 14px;
  margin-left: 5px;

  color: #191919;
`;

function BottomCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 570,
          width: "100%",
          marginBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 14,
            color: "#191919",
            borderBottom: "1px solid #AAAAAA",
            paddingTop: 21,
            paddingBottom: 20,
          }}
        >
          <div
            style={{
              width: 129,
              marginLeft: 30,
            }}
          >
            날짜
          </div>
          <div
            style={{
              marginLeft: 51,
            }}
          >
            상품 노출 순위
          </div>
        </div>
        <Layout>
          <LeftLabel>
            <LeftValue>03.08</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
            <BlueButtonMini
              style={{
                width: 68,
              }}
            >
              상품명 변경
            </BlueButtonMini>
            <BlueButtonMini
              style={{
                width: 56,
                marginLeft: 8,
              }}
            >
              태그 변경
            </BlueButtonMini>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.09</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.10</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.11</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.12</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
            <BlueButtonMini
              style={{
                width: 68,
              }}
            >
              옵션명 변경
            </BlueButtonMini>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.13</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.14</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.15</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
            <BlueButtonMini
              style={{
                width: 59,
              }}
            >
              가격 변경
            </BlueButtonMini>
          </RightLabel>
        </Layout>
        <Layout
          style={{
            borderBottom: "none",
          }}
        >
          <LeftLabel>
            <LeftValue>03.16</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>1위</RightValue>
            <RightUnit>1/페이지</RightUnit>
            <img
              style={{
                width: 7,
                height: 7,
                marginLeft: 5,
              }}
              src="sellper-pages/assets/icons/up_red02.png"
              alt="up_red02"
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#FC2559",
                marginTop: 2,
                marginLeft: 2,
                marginRight: 103,
              }}
            >
              2
            </div>
          </RightLabel>
        </Layout>
      </div>
    </>
  );
}

export default BottomCard;
