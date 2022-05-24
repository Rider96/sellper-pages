import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 12px;
  margin-right: 12px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  flex: 2;
  border-right: 1px solid #d9d9d9;
  padding-bottom: 14px;
  padding-top: 13px;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 13px;
  color: #191919;
`;

const BasicLabel = styled.div.attrs((props) => {})`
  flex: 1;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;

const StandardLabel = styled.div.attrs((props) => {})`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;

const PremiumLabel = styled.div.attrs((props) => {})`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;

function BottomCardM(props) {
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
          marginBottom: 75,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 13,
            color: "#191919",
            borderBottom: "1px solid #AAAAAA",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              flex: 2,
              marginLeft: 12,
            }}
          >
            제공기능
          </div>
          <div
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          >
            Basic
          </div>
          <div
            style={{
              flex: 1,
              marginRight: 10,
            }}
          >
            Standard
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            Premium
          </div>
        </div>
        <Layout>
          <LeftLabel>
            <LeftValue>키워드 찾기</LeftValue>
          </LeftLabel>
          <BasicLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 16,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 26,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
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
                width: 10,
                height: 7,
                marginLeft: 16,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 26,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
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
                marginLeft: 18,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 26,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
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
                marginLeft: 18,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                marginLeft: 29,
              }}
            >
              ·
            </div>
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
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
                width: 10,
                height: 7,
                marginLeft: 16,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </BasicLabel>
          <StandardLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 26,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
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
                marginLeft: 8,
              }}
            >
              10개
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                color: "#0594D7",
                marginLeft: 18,
              }}
            >
              30개
            </div>
          </StandardLabel>
          <PremiumLabel>
            <div
              style={{
                color: "#0594D7",
                marginLeft: 18,
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
                marginLeft: 20,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                marginLeft: 28,
              }}
            >
              ·
            </div>
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
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
                marginLeft: 20,
              }}
            >
              ·
            </div>
          </BasicLabel>
          <StandardLabel>
            <div
              style={{
                marginLeft: 28,
              }}
            >
              ·
            </div>
          </StandardLabel>
          <PremiumLabel>
            <img
              style={{
                width: 10,
                height: 7,
                marginLeft: 36,
              }}
              src="assets/icons/check.png"
              alt="check"
            />
          </PremiumLabel>
        </Layout>
      </div>
    </>
  );
}

export default BottomCardM;
