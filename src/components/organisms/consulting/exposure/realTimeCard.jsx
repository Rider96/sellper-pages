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

const Name = styled.div.attrs((props) => {})`
  width: 525px;
`;

const Price = styled.div.attrs((props) => {})`
  width: 179px;
`;

const Total = styled.div.attrs((props) => {})`
  width: 132px;
`;

const TagWrapper = styled.div.attrs((props) => {})`
  background: #06c1a0;

  padding: 1px 10px;
  margin-left: 6px;
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;

  color: #ffffff;

  text-align: center;

  border-radius: 17.5px;
`;

function RealTimeCard(props) {
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
          marginBottom: 109,
        }}
      >
        <Layout
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#191919",
            fontFamily: "pretendard-SemiBold",
          }}
        >
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            상품명
          </Name>
          <Price>스토어</Price>
          <Total>키워드</Total>
          <div>노출 순위</div>
        </Layout>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#AAAAAA",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
                }}
                src="assets/images/consulting/exposure/product01.png"
                alt="product01"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌...
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            다여기다여기
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            설렁탕
          </Total>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 16,
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
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
        <div
          style={{
            width: "96%",
            height: 1,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#D9D9D9",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
                }}
                src="assets/images/consulting/exposure/product01.png"
                alt="product01"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌...
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            다여기다여기
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            설렁탕
          </Total>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 16,
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
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
        <div
          style={{
            width: "96%",
            height: 1,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#D9D9D9",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
                }}
                src="assets/images/consulting/exposure/product01.png"
                alt="product01"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌...
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            다여기다여기
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            설렁탕
          </Total>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 16,
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
                fontFamily: "pretendard-Regular",
              }}
            >
              /1페이지
            </div>
            <TagWrapper>광고</TagWrapper>
          </div>
        </Layout>
        <div
          style={{
            width: "96%",
            height: 1,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#D9D9D9",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
                }}
                src="assets/images/consulting/exposure/product01.png"
                alt="product01"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌...
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            다여기다여기
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            설렁탕
          </Total>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 16,
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

export default RealTimeCard;
