import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Container = styled.div.attrs((props) => {})`
  margin-right: ${(props) => (props.isSmall ? "16px" : "22px")};
`;

const Title = styled.div.attrs((props) => {})`
  font-family: Pretendard-Medium;
  font-weight: 500;
  font-size: 13px;
  color: rgb(25, 25, 25);
`;

const Price = styled.div.attrs((props) => {})`
  font-family: Pretendard-Medium;
  font-weight: 500;
  font-size: ${(props) => (props.isSmall ? "12px" : "13px")};
  color: rgb(153, 153, 153);
`;

const Count = styled.div.attrs((props) => {})`
  font-family: Pretendard-Medium;
  font-weight: 500;
  font-size: ${(props) => (props.isSmall ? "11px" : "12px")};
  color: rgb(153, 153, 153);
`;

function PriceTopTen(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              overflowX: isSmall ? "auto" : "hidden",
              whiteSpace: "pre-wrap",
            }}
          >
            <Container isSmall={isSmall}>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product08.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product02.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product03.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product04.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product05.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product06.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product07.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product08.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
            <Container>
              <img
                style={{
                  width: isSmall ? 87 : 102,
                  height: isSmall ? 87 : 102,
                  marginBottom: 8,
                }}
                src="assets/images/consulting/price/product09.png"
                alt="product01"
              />
              <Title>비비고사골곰탕</Title>
              <Price isSmall={isSmall}>690원</Price>
              <Count isSmall={isSmall}>구매건수 30,000</Count>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceTopTen;
