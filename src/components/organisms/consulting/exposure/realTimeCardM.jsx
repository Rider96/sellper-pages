import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const TagWrapper = styled.div.attrs((props) => {})`
  background: #06c1a0;
  border-radius: 50px;

  padding: 3px 12px;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 11px;

  color: #ffffff;

  text-align: center;
`;

const TagWrapper2 = styled.div.attrs((props) => {})`
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  padding: 0px 6px;
  font-family: "Pretendard-Medium";
  margin-right: 8px;

  font-weight: 500;
  font-size: 11px;

  text-align: center;

  color: #767676;
`;

function RealTimeCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          flex: 1,
          marginBottom: 79,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Layout
          style={{
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
            }}
          >
            <img
              style={{
                width: 49,
                height: 50,
                marginRight: 16,
              }}
              src="assets/images/consulting/exposure/product01.png"
              alt="product01"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#191919",
                  fontFamily: "pretendard",
                  marginBottom: 6,
                  lineHeight: "17px",
                }}
              >
                육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                돼지고기...
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#999999",
                  fontFamily: "pretendard",
                  marginBottom: 4,
                }}
              >
                다여기다여기
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <TagWrapper2>설렁탕</TagWrapper2>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #D9D9D9",
              display: "flex",
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 8,
              paddingBottom: 13,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard-SemiBold",
              }}
            >
              1위&nbsp;
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#191919",
                marginRight: 8.5,
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
        <Layout
          style={{
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
            }}
          >
            <img
              style={{
                width: 49,
                height: 50,
                marginRight: 16,
              }}
              src="assets/images/consulting/exposure/product01.png"
              alt="product01"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#191919",
                  fontFamily: "pretendard",
                  marginBottom: 6,
                  lineHeight: "17px",
                }}
              >
                육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                돼지고기...
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#999999",
                  fontFamily: "pretendard",
                  marginBottom: 4,
                }}
              >
                다여기다여기
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <TagWrapper2>설렁탕</TagWrapper2>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #D9D9D9",
              display: "flex",
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 8,
              paddingBottom: 13,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard-SemiBold",
              }}
            >
              1위&nbsp;
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#191919",
                marginRight: 8.5,
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
        <Layout
          style={{
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
            }}
          >
            <img
              style={{
                width: 49,
                height: 50,
                marginRight: 16,
              }}
              src="assets/images/consulting/exposure/product01.png"
              alt="product01"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#191919",
                  fontFamily: "pretendard",
                  marginBottom: 6,
                  lineHeight: "17px",
                }}
              >
                육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                돼지고기...
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#999999",
                  fontFamily: "pretendard",
                  marginBottom: 4,
                }}
              >
                다여기다여기
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <TagWrapper2>설렁탕</TagWrapper2>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #D9D9D9",
              display: "flex",
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 8,
              paddingBottom: 13,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard-SemiBold",
              }}
            >
              1위&nbsp;
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#191919",
                marginRight: 8.5,
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
        <Layout style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
            }}
          >
            <img
              style={{
                width: 49,
                height: 50,
                marginRight: 16,
              }}
              src="assets/images/consulting/exposure/product01.png"
              alt="product01"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#191919",
                  fontFamily: "pretendard",
                  marginBottom: 6,
                  lineHeight: "17px",
                }}
              >
                육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                돼지고기...
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#999999",
                  fontFamily: "pretendard",
                  marginBottom: 4,
                }}
              >
                다여기다여기
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <TagWrapper2>설렁탕</TagWrapper2>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #D9D9D9",
              display: "flex",
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 8,
              paddingBottom: 13,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard-SemiBold",
              }}
            >
              1위&nbsp;
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#191919",
                marginRight: 8.5,
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default RealTimeCardM;
