import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Card = styled.div.attrs((props) => {})`
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div.attrs((props) => {})`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  color: rgb(85, 85, 85);
  font-family: Pretendard;
  font-weight: 500;
`;

const Content = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";

  font-weight: 700;
  font-size: 20px;

  color: #191919;
`;

function Ranking(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          marginTop: 92,
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
                네이버에서
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                lineHeight: 1,
              }}
            >
              <div
                style={{
                  color: "#191919",
                }}
              >
                노출되는&nbsp;
              </div>
              <div
                style={{
                  color: "#0594D7",
                }}
              >
                순위
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
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <Card style={{ width: 134.65, height: 122, marginRight: 15 }}>
              <Title>1위</Title>
              <Content>통합검색</Content>
            </Card>
            <Card style={{ width: 134.65, height: 122, marginRight: 15 }}>
              <Title>2위</Title>
              <Content>지도</Content>
            </Card>
            <Card style={{ width: 134.65, height: 122, marginRight: 15 }}>
              <Title>3위</Title>
              <Content>이미지</Content>
            </Card>
            <Card
              style={{
                width: 134.65,
                height: 122,
                marginRight: 15,
                border: "2px solid #0594D7",
              }}
            >
              <Title
                style={{
                  backgroundColor: "#0594D7",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                4위
              </Title>
              <Content>쇼핑</Content>
            </Card>
            <Card style={{ width: 134.65, height: 122 }}>
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
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Card style={{ width: 134.65, height: 122, marginRight: 15 }}>
              <Title>1위</Title>
              <Content>VIEW</Content>
            </Card>
            <Card
              style={{
                width: 134.65,
                height: 122,
                marginRight: 15,
                border: "2px solid #0594D7",
              }}
            >
              <Title
                style={{
                  backgroundColor: "#0594D7",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                2위
              </Title>
              <Content>쇼핑</Content>
            </Card>
            <Card style={{ width: 134.65, height: 122, marginRight: 15 }}>
              <Title>3위</Title>
              <Content>동영상</Content>
            </Card>
            <Card style={{ width: 134.65, height: 122, marginRight: 15 }}>
              <Title>4위</Title>
              <Content>플레이스</Content>
            </Card>
            <Card style={{ width: 134.65, height: 122 }}>
              <Title>5위</Title>
              <Content>지식백과</Content>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ranking;
