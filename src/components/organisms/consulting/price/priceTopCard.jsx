import React, { useState, useEffect, useCallback } from "react";
import { Progress } from "antd";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(217, 217, 217);
  width: 218px;
`;

const Title = styled.div.attrs((props) => {})`
  font-family: Pretendard-Medium;
  font-weight: 500;
  font-size: 14px;
  color: rgb(85, 85, 85);
  margin-bottom: 6px;
`;

const Content = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Pretendard-Bold;
  font-weight: 700;
  font-size: 18px;
  color: rgb(25, 25, 25);
`;

function PriceTopCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemPercent, setItemPercent] = useState({
    price: 0,
    marketability: 0,
    advertising: 0,
    competition: 0,
  });

  useEffect(() => {
    if (itemPercent.price < 80) {
      setItemPercent({
        price: itemPercent.price + 1,
        marketability: itemPercent.price + 1,
        advertising: itemPercent.price + 1,
        competition: itemPercent.price + 1,
      });
    }
  }, [itemPercent.price]);

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 280,
          width: "100%",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontFamily: "Pretendard-Bold",
            fontWeight: 700,
            fontSize: 20,
            color: "#191919",
            marginLeft: 30,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          오, 괜찮은 상품인데요?
          <img
            style={{
              width: 22,
              height: 22,
              marginRight: 6,
              marginLeft: 6,
            }}
            src="assets/icons/cool.png"
            alt="cool"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#AAAAAA",
            marginBottom: 26,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Layout
                style={{
                  marginLeft: 30,
                }}
              >
                <Title>가격순위</Title>
                <Content>
                  <div>396개 중</div>
                  <div
                    style={{
                      color: "#0594D7",
                    }}
                  >
                    &nbsp;1위
                  </div>
                </Content>
              </Layout>
              <Layout
                style={{
                  marginLeft: 23,
                }}
              >
                <Title>최저가 순위</Title>
                <Content>
                  <div>상위</div>
                  <div
                    style={{
                      color: "#0594D7",
                    }}
                  >
                    &nbsp;1%
                  </div>
                </Content>
              </Layout>
              <Layout
                style={{
                  marginLeft: 23,
                }}
              >
                <Title>1개 당 예상수익</Title>
                <Content>
                  <div>350원</div>
                </Content>
              </Layout>
            </div>
            <div
              style={{
                width: "95%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginBottom: 16,
                marginTop: 16,
                marginLeft: 30,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Layout
                style={{
                  marginLeft: 30,
                }}
              >
                <Title>상품 평균가</Title>
                <Content>
                  <div>13,828원</div>
                </Content>
              </Layout>
              <Layout
                style={{
                  marginLeft: 23,
                }}
              >
                <Title>평균 광고 클릭비</Title>
                <Content>
                  <div>920원</div>
                </Content>
              </Layout>
              <Layout
                style={{
                  marginLeft: 23,
                }}
              >
                <Title>가격대비 광고비</Title>
                <Content>
                  <div>0.15&nbsp;&nbsp;</div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#FC2559",
                      fontFamily: "Pretendard-SemiBold",
                    }}
                  >
                    BAD
                  </div>
                </Content>
              </Layout>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 24,
            }}
          >
            <Title>종합평가</Title>
            <div
              style={{
                marginLeft: 9,
              }}
            >
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#255CFC",
                    fontFamily: "Pretendard-Bold",
                    width: 32,
                    marginTop: 4,
                    marginRight: 20,
                  }}
                >
                  가격
                </div>

                <Progress
                  percent={itemPercent.price}
                  showInfo={false}
                  strokeColor={"#255CFC"}
                  strokeWidth={16}
                  style={{
                    width: 180,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 6,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1B7FDD",
                    fontFamily: "Pretendard-Bold",
                    width: 32,
                    marginTop: 4,
                    marginRight: 20,
                  }}
                >
                  시장성
                </div>
                <Progress
                  percent={itemPercent.price}
                  showInfo={false}
                  strokeColor={"#1B7FDD"}
                  strokeWidth={16}
                  style={{
                    width: 180,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 6,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#11A0BF",
                    fontFamily: "Pretendard-Bold",
                    width: 32,
                    marginTop: 4,
                    marginRight: 20,
                  }}
                >
                  광고비
                </div>
                <Progress
                  percent={itemPercent.price}
                  showInfo={false}
                  strokeColor={"#11A0BF"}
                  strokeWidth={16}
                  style={{
                    width: 180,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 6,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#06C1A0",
                    fontFamily: "Pretendard-Bold",
                    width: 32,
                    marginTop: 4,
                    marginRight: 20,
                  }}
                >
                  경쟁도
                </div>
                <Progress
                  percent={itemPercent.price}
                  showInfo={false}
                  strokeColor={"#06C1A0"}
                  strokeWidth={16}
                  style={{
                    width: 180,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceTopCard;
