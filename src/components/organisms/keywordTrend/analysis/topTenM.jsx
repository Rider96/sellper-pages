import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Container = styled.div.attrs((props) => {})`
  margin-right: 16px;
`;

const Title = styled.div.attrs((props) => {})`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 13px;
  color: rgb(25, 25, 25);
`;

const Price = styled.div.attrs((props) => {})`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  color: rgb(153, 153, 153);
`;

const Count = styled.div.attrs((props) => {})`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 11px;
  color: rgb(153, 153, 153);
`;

function TopTenM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            paddingBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "GmarketSans",
            }}
          >
            <div
              style={{
                color: "#191919",
              }}
            >
              오늘의&nbsp;
            </div>
            <div
              style={{
                color: "#0594D7",
              }}
            >
              설렁탕&nbsp;
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              Top10 공개!
              <img
                style={{
                  position: "absolute",
                  width: 8,
                  height: 8,
                }}
                src="sellper-pages/assets/icons/impact.png"
                alt="impact"
              />
            </div>
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 400,
              fontFamily: "Pretendard-Regular",
              color: "#555555",
              lineHeight: 1.4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            오늘 네이버 상위랭킹에 오른 상품들이에요!
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
              overflowX: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product01.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product02.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product03.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product04.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container style={{}}>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product05.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product06.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product07.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product08.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product09.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
            <Container style={{}}>
              <img
                style={{
                  width: 87,
                  height: 87,
                  marginBottom: 8,
                }}
                src="sellper-pages/assets/images/keywordTrend/product07.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTenM;
