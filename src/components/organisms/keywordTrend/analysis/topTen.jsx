import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Container = styled.div.attrs((props) => {})`
  margin-right: 21px;
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
  font-size: 13px;
  color: rgb(153, 153, 153);
`;

const Count = styled.div.attrs((props) => {})`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  color: rgb(153, 153, 153);
`;

function TopTen(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <div
          style={{
            marginRight: 131,
          }}
        >
          <div
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              borderBottom: "1px solid #D9D9D9",
              borderTop: "1px solid #D9D9D9",
              width: 215,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 26,
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
                  position: "relative",
                }}
              >
                설렁탕
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
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                color: "#191919",
                lineHeight: 1,
              }}
            >
              Top10 공개!
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#767676",
                marginTop: 12,
                lineHeight: 1.4,
              }}
            >
              <div>오늘 네이버 상위랭킹에</div>
              <div>오른 상품들이에요!</div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 21,
            }}
          >
            <Container>
              <img
                style={{
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
                }}
                src="sellper-pages/assets/images/keywordTrend/product05.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price>690원</Price>
              <Count>구매건수 30,000</Count>
            </Container>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Container>
              <img
                style={{
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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
                  width: 130,
                  height: 130,
                  marginBottom: 10,
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

export default TopTen;
