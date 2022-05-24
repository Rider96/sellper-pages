import React, { useState, useEffect, useCallback } from "react";
import { Progress } from "antd";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div.attrs((props) => {})`
  font-family: Pretendard-Medium;
  font-weight: 500;
  font-size: 14px;
  color: rgb(85, 85, 85);
  padding-top: 20px;
`;

const Content = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Pretendard-Bold;
  font-weight: 700;
  font-size: 18px;
  color: rgb(25, 25, 25);
  padding-bottom: 20px;
`;

function PriceTopCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemPercent, setItemPercent] = useState({
    price: 0,
    marketability: 0,
    advertising: 0,
    competition: 0,
  });
  const [setTimer, setSetTimer] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (itemPercent.price < 80 && setTimer > 140) {
      setItemPercent({
        price: itemPercent.price + 1,
        marketability: itemPercent.price + 1,
        advertising: itemPercent.price + 1,
        competition: itemPercent.price + 1,
      });
    }
  }, [itemPercent.price, setTimer]);

  const handleScroll = (e) => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const myScroll = e.srcElement.scrollingElement.scrollTop;

    setSetTimer(myScroll);
  };

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          flex: 1,
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
            fontSize: 15,
            color: "#191919",
            marginLeft: 16,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          오, 괜찮은 상품인데요?
          <img
            style={{
              width: 16,
              height: 16,
              marginRight: 6,
              marginLeft: 6,
            }}
            src="sellper-pages/assets/icons/cool.png"
            alt="cool"
          />
        </div>
        <div
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAAAAA",
          }}
        />
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
                borderRight: "1px solid rgb(217, 217, 217)",
              }}
            >
              <Title
                style={{
                  marginLeft: 20,
                }}
              >
                가격순위
              </Title>
              <Content
                style={{
                  borderBottom: "1px solid #D9D9D9",
                  marginLeft: 10,
                  paddingLeft: 10,
                  marginRight: 10,
                }}
              >
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
            <Layout>
              <Title
                style={{
                  marginLeft: 20,
                }}
              >
                최저가 순위
              </Title>
              <Content
                style={{
                  borderBottom: "1px solid #D9D9D9",
                  marginRight: 10,
                  marginLeft: 10,
                  paddingLeft: 10,
                }}
              >
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
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Layout
              style={{
                borderRight: "1px solid rgb(217, 217, 217)",
              }}
            >
              <Title
                style={{
                  marginLeft: 20,
                }}
              >
                1개 당 예상수익
              </Title>
              <Content
                style={{
                  borderBottom: "1px solid #D9D9D9",
                  marginLeft: 10,
                  paddingLeft: 10,
                  marginRight: 10,
                }}
              >
                <div>350원</div>
              </Content>
            </Layout>

            <Layout>
              <Title
                style={{
                  marginLeft: 20,
                }}
              >
                상품 평균가
              </Title>
              <Content
                style={{
                  borderBottom: "1px solid #D9D9D9",
                  marginRight: 10,
                  marginLeft: 10,
                  paddingLeft: 10,
                }}
              >
                <div>13,828원</div>
              </Content>
            </Layout>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Layout
              style={{
                borderRight: "1px solid rgb(217, 217, 217)",
              }}
            >
              <Title
                style={{
                  marginLeft: 20,
                }}
              >
                평균 광고 클릭비
              </Title>
              <Content
                style={{
                  borderBottom: "1px solid #D9D9D9",
                  marginLeft: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <div>920원</div>
              </Content>
            </Layout>
            <Layout>
              <Title
                style={{
                  marginLeft: 20,
                }}
              >
                가격대비 광고비
              </Title>
              <Content
                style={{
                  borderBottom: "1px solid #D9D9D9",
                  marginRight: 10,
                  paddingLeft: 20,
                }}
              >
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 16,
              paddingBottom: 30,
            }}
          >
            <Title>종합평가</Title>
            <div>
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
                    width: 50,
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
                    width: "70%",
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
                    width: 50,
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
                    width: "70%",
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
                    width: 50,
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
                    width: "70%",
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
                    width: 50,
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
                    width: "70%",
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

export default PriceTopCardM;
