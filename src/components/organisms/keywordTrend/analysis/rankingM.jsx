import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Card = styled.div.attrs((props) => {})`
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Title = styled.div.attrs((props) => {})`
  padding-top: 17px;
  padding-bottom: 17px;
  font-size: 14px;
  color: rgb(85, 85, 85);
  font-family: Pretendard;
  font-weight: 500;
  padding-left: 20px;
`;

const Content = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-start;
  padding-left: 24px;
  align-items: center;
  font-family: "Pretendard";

  font-weight: 700;
  font-size: 14px;

  color: #191919;
`;

function RankingM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          marginTop: 61,
        }}
      >
        <div style={{ marginBottom: 32 }}>
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
              네이버에서&nbsp;
            </div>
            <div
              style={{
                color: "#0594D7",
              }}
            >
              노출되는 순위
            </div>
            <div
              style={{
                color: "#191919",
              }}
            >
              는?
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
              fontWeight: 700,
              fontFamily: "Pretendard",
              marginLeft: 20,
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: "#191919",
              }}
            >
              네이버 쇼핑탭 노출 순위 &nbsp;
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#0594D7",
              }}
            >
              4위
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 40,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Card style={{ marginBottom: 10 }}>
              <Title>1위</Title>
              <Content>통합검색</Content>
            </Card>
            <Card style={{ marginBottom: 10 }}>
              <Title>2위</Title>
              <Content>지도</Content>
            </Card>
            <Card style={{ marginBottom: 10 }}>
              <Title>3위</Title>
              <Content>이미지</Content>
            </Card>
            <Card
              style={{
                marginBottom: 10,
                border: "2px solid #0594D7",
              }}
            >
              <Title
                style={{
                  color: "#0594D7",
                }}
              >
                4위
              </Title>
              <Content>쇼핑</Content>
            </Card>
            <Card>
              <Title>5위</Title>
              <Content>어학사전</Content>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
              fontWeight: 700,
              fontFamily: "Pretendard",
              marginLeft: 20,
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: "#191919",
              }}
            >
              네이버 쇼핑섹션 노출 순위 &nbsp;
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#0594D7",
              }}
            >
              2위
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Card
              style={{
                marginBottom: 10,
              }}
            >
              <Title>1위</Title>
              <Content>VIEW</Content>
            </Card>
            <Card
              style={{
                marginBottom: 10,
                border: "2px solid #0594D7",
              }}
            >
              <Title
                style={{
                  color: "#0594D7",
                }}
              >
                2위
              </Title>
              <Content>쇼핑</Content>
            </Card>
            <Card
              style={{
                marginBottom: 10,
              }}
            >
              <Title>3위</Title>
              <Content>동영상</Content>
            </Card>
            <Card
              style={{
                marginBottom: 10,
              }}
            >
              <Title>4위</Title>
              <Content>플레이스</Content>
            </Card>
            <Card>
              <Title>5위</Title>
              <Content>지식백과</Content>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default RankingM;
