import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import BlueButtonMini from "../../../molecules/buttons/blueButtonMini";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 10px;
  margin-right: 10px;
`;

const LeftLabel = styled.div.attrs((props) => {})`
  padding-left: 7px;
  border-right: 1px solid #d9d9d9;
  padding-bottom: 14px;
  padding-top: 13px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const LeftValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 13px;

  color: #191919;
`;

const RightLabel = styled.div.attrs((props) => {})`
  display: flex;
  padding-left: 17px;
  flex-direction: column;
  padding-bottom: 14px;
  padding-top: 13px;
  flex: 2;
`;

const RightValue = styled.div.attrs((props) => {})`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 13px;

  color: #0594d7;
`;

const RightUnit = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 13px;
  margin-left: 5px;

  color: #191919;
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
          marginBottom: 62,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Pretendard-SemiBold",
            fontWeight: 600,
            fontSize: 12,
            color: "#191919",
            borderBottom: "1px solid #AAAAAA",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              marginLeft: 17,
            }}
          >
            날짜
          </div>
          <div
            style={{
              flex: 2,
              marginLeft: 17,
            }}
          >
            상품 노출 순위
          </div>
        </div>
        <Layout>
          <LeftLabel>
            <LeftValue>03.08</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <BlueButtonMini style={{ width: 62.69, fontSize: 10 }}>
                상품명 변경
              </BlueButtonMini>
              <BlueButtonMini
                style={{
                  width: 51,
                  fontSize: 10,
                  marginLeft: 6.31,
                }}
              >
                태그 변경
              </BlueButtonMini>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.09</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
          </RightLabel>
        </Layout>

        <Layout>
          <LeftLabel>
            <LeftValue>03.10</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.11</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
          </RightLabel>
        </Layout>

        <Layout>
          <LeftLabel>
            <LeftValue>03.12</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <BlueButtonMini style={{ width: 62.69, fontSize: 10 }}>
                옵션명 변경
              </BlueButtonMini>
            </div>
          </RightLabel>
        </Layout>

        <Layout>
          <LeftLabel>
            <LeftValue>03.13</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
          </RightLabel>
        </Layout>
        <Layout>
          <LeftLabel>
            <LeftValue>03.14</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
          </RightLabel>
        </Layout>

        <Layout>
          <LeftLabel>
            <LeftValue>03.15</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <BlueButtonMini style={{ width: 54, fontSize: 10 }}>
                가격 변경
              </BlueButtonMini>
            </div>
          </RightLabel>
        </Layout>

        <Layout
          style={{
            borderBottom: "none",
          }}
        >
          <LeftLabel>
            <LeftValue>03.16</LeftValue>
          </LeftLabel>
          <RightLabel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <RightValue>1위</RightValue>
              <RightUnit>1/페이지</RightUnit>
              <img
                style={{
                  width: 7,
                  height: 7,
                  marginLeft: 5,
                }}
                src="/assets/icons/up_red02.png"
                alt="up_red02"
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#FC2559",
                  marginTop: 2,
                  marginLeft: 2,
                }}
              >
                2
              </div>
            </div>
          </RightLabel>
        </Layout>
      </div>
    </>
  );
}

export default BottomCardM;
