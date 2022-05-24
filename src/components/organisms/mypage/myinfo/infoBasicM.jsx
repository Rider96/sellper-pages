import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LeftLayout = styled.div.attrs((props) => {})`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: rgb(25, 25, 25);
  font-family: Pretendard;
`;

const RightLayout = styled.div.attrs((props) => {})`
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  color: rgb(85, 85, 85);
  font-family: Pretendard;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function InfoBasicM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            paddingTop: 32,
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
              borderRadius: 10,
              width: "100%",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Layout>
              <LeftLayout>아이디</LeftLayout>
              <RightLayout>sellper0123</RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout>
              <LeftLayout>이름</LeftLayout>
              <RightLayout>홍길동</RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout>
              <LeftLayout>휴대폰 번호</LeftLayout>
              <RightLayout>010-1234-5678</RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout>
              <LeftLayout
                style={{
                  marginRight: 50,
                }}
              >
                광고성 정보 수신 및 마케팅 활용 동의
              </LeftLayout>
              <RightLayout
                style={{
                  marginRight: 50,
                }}
              >
                동의
              </RightLayout>
            </Layout>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoBasicM;
