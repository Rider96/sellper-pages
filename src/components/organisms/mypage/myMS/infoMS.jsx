import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  height: 95px;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftLayout = styled.div.attrs((props) => {})`
  width: 223px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(25, 25, 25);
  font-family: Pretendard;
`;

const RightLayout = styled.div.attrs((props) => {})`
  font-size: 14px;
  font-weight: 400;
  color: rgb(25, 25, 25);
  font-family: Pretendard;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function InfoMS(props) {
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
            paddingTop: 40,
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
              borderRadius: 10,
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Layout>
              <LeftLayout>이용중인 멤버십</LeftLayout>
              <RightLayout>Standard</RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout>
              <LeftLayout>가입 날짜</LeftLayout>
              <RightLayout>
                <div>2022-02-22</div>
                <div
                  style={{
                    color: "#555555",
                    marginLeft: 12,
                  }}
                >
                  (다음 결제 예정일은 2022-03-22 입니다)
                </div>
              </RightLayout>
            </Layout>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoMS;
