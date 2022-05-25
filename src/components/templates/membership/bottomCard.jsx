import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 16px;
  margin-right: 16px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  width: 342px;
  margin-left: 11px;
  border-right: 1px solid #d9d9d9;
  padding-bottom: 24px;
  padding-top: 24px;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 14px;
  color: #191919;
`;

const BasicLabel = styled.div.attrs((props) => {})`
  margin-left: 98px;
  width: 220px;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

const StandardLabel = styled.div.attrs((props) => {})`
  width: 245px;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

const PremiumLabel = styled.div.attrs((props) => {})`
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
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
          height: 634,
          width: "100%",
          marginBottom: 170,
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
            paddingTop: 22,
            paddingBottom: 18,
          }}
        >
          <div
            style={{
              width: 343,
              marginLeft: 26,
            }}
          >
            제공기능
          </div>
          <div
            style={{
              width: 220,
              marginLeft: 98,
            }}
          >
            Basic
          </div>
          <div
            style={{
              width: 245,
            }}
          >
            Standard
          </div>
          <div>Premium</div>
        </div>
        <Layout>
          <LeftLabel>
            <LeftValue>키워드 찾기</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 10,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>키워드 분석</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 10,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>주제별 키워드 개수</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <div
              style={{
                marginLeft: 16,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>주제별 키워드 개수</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <div
              style={{
                marginLeft: 16,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                marginLeft: 24,
              }}
            >
              ·
            </div>
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>주제별 키워드 개수</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 10,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>주제별 키워드 개수</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <div
              style={{
                color: "#0594D7",
                marginLeft: 4,
              }}
            >
              10개
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                color: "#0594D7",
                marginLeft: 14,
              }}
            >
              30개
            </div>
          </StandardLabel>
          <PremiumLabel>
            <div
              style={{
                color: "#0594D7",
                marginLeft: 7,
              }}
            >
              100개
            </div>
          </PremiumLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>주제별 키워드 개수</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <div
              style={{
                marginLeft: 16,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                marginLeft: 24,
              }}
            >
              ·
            </div>
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
        <Layout
          style={{
            borderBottom: "none",
          }}
        >
          <LeftLabel>
            <LeftValue>주제별 키워드 개수</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <div
              style={{
                marginLeft: 16,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                marginLeft: 24,
              }}
            >
              ·
            </div>
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 16,
                height: 11,
                marginLeft: 20,
              }}
              src="./assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
      </div>
    </>
  );
}

export default BottomCard;
