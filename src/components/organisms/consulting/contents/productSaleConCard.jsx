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
            ์ํ ํ๋งค ๊ด๋ฆฌ ์&nbsp;
          </div>
          <div>์ด๋ถ๋ถ์ ๋์น๋ฉด ์๋ผ์!</div>
          <img
            style={{
              width: 14,
              height: 18,
              marginLeft: 8,
            }}
            src="./assets/images/consulting/contents/icon2_01.png"
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
              src="./assets/images/consulting/contents/icon2_02.png"
              alt="icon2_02"
            />
            <LeftValue>ํ๋งค๋</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>๋ฐฐ์ก๋น๊ฐ&nbsp;</RightValue>
            <RightImpact>3,000์์ ์ด๊ณผํด</RightImpact>
            <RightValue>&nbsp;๊ฐ๊ฒฉ์ ํจ์จ์ฑ์ด ๋ฎ์๋ณด์๋๋ค.</RightValue>
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
              src="./assets/images/consulting/contents/icon2_03.png"
              alt="icon2_03"
            />
            <LeftValue>ํ์?</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>๋ฐฐ์ก๋น๊ฐ&nbsp;</RightValue>
            <RightImpact>3,000์์ ์ด๊ณผํด</RightImpact>
            <RightValue>&nbsp;๊ฐ๊ฒฉ์ ํจ์จ์ฑ์ด ๋ฎ์๋ณด์๋๋ค.</RightValue>
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
              src="./assets/images/consulting/contents/icon2_04.png"
              alt="icon2_04"
            />
            <LeftValue>ํฌํ?๋ฆฌ๋ทฐ</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>๋ฐฐ์ก๋น๊ฐ&nbsp;</RightValue>
            <RightImpact>3,000์์ ์ด๊ณผํด</RightImpact>
            <RightValue>&nbsp;๊ฐ๊ฒฉ์ ํจ์จ์ฑ์ด ๋ฎ์๋ณด์๋๋ค.</RightValue>
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
              src="./assets/images/consulting/contents/icon2_05.png"
              alt="icon2_05"
            />
            <LeftValue>ํ๊ท? ๋ฐฐ์ก์ผ</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>๋ฐฐ์ก๋น๊ฐ&nbsp;</RightValue>
            <RightImpact>3,000์์ ์ด๊ณผํด</RightImpact>
            <RightValue>&nbsp;๊ฐ๊ฒฉ์ ํจ์จ์ฑ์ด ๋ฎ์๋ณด์๋๋ค.</RightValue>
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
              src="./assets/images/consulting/contents/icon2_06.png"
              alt="icon2_06"
            />
            <LeftValue>ํ๋งค์ ๋ต๋ณ</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>๋ฐฐ์ก๋น๊ฐ&nbsp;</RightValue>
            <RightImpact>3,000์์ ์ด๊ณผํด</RightImpact>
            <RightValue>&nbsp;๊ฐ๊ฒฉ์ ํจ์จ์ฑ์ด ๋ฎ์๋ณด์๋๋ค.</RightValue>
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
              src="./assets/images/consulting/contents/icon2_07.png"
              alt="icon2_07"
            />
            <LeftValue>์ฟ?ํฐ</LeftValue>
          </LeftLabel>
          <RightLabel>
            <RightValue>๋ฐฐ์ก๋น๊ฐ&nbsp;</RightValue>
            <RightImpact>3,000์์ ์ด๊ณผํด</RightImpact>
            <RightValue>&nbsp;๊ฐ๊ฒฉ์ ํจ์จ์ฑ์ด ๋ฎ์๋ณด์๋๋ค.</RightValue>
          </RightLabel>
        </Layout>
      </div>
    </>
  );
}

export default ProductSaleConCard;
