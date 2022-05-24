import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  padding-bottom: 25px;
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
  color: #555555;
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
`;

function InfoMSM(props) {
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
                    marginTop: 11,
                    fontSize: 12,
                    width: "80%",
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

export default InfoMSM;
