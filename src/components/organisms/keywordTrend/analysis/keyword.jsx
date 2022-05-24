import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Card = styled.div.attrs((props) => {})`
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div.attrs((props) => {})`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  color: rgb(85, 85, 85);
  font-family: Pretendard;
  font-weight: 500;
`;

const Content = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";

  font-weight: 700;
  font-size: 20px;

  color: #191919;
`;

const KeywordCard = styled.div.attrs((props) => {})`
  position: absolute;
  width: 289px;
  background: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 24px 30px 27px 30px;
  top: 23px;
  left: 207px;
  font-family: "Pretendard";
`;

function Keyword(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          marginTop: 87,
        }}
      >
        <div
          style={{
            marginRight: 131,
          }}
        >
          <div
            style={{
              paddingTop: 24,
              paddingBottom: 24,
              borderBottom: "1px solid #D9D9D9",
              borderTop: "1px solid #D9D9D9",
              width: 215,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "GmarketSans",
              }}
            >
              <div
                style={{
                  color: "#0594D7",
                  position: "relative",
                }}
              >
                키워드
              </div>
              <div
                style={{
                  color: "#191919",
                }}
              >
                를
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  color: "#191919",
                  lineHeight: 1,
                }}
              >
                파헤쳐드립니다!
              </div>
              <img
                onMouseOver={() => {
                  setIsMouseOver(true);
                }}
                onMouseOut={() => {
                  setIsMouseOver(false);
                }}
                style={{
                  width: 20,
                  height: 19,
                  marginLeft: 8,
                  cursor: "pointer",
                }}
                src="assets/icons/question.png"
                alt="question"
              />
              {isMouseOver ? (
                <KeywordCard>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0594D7",
                    }}
                  >
                    키워드 경쟁률
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#191919",
                      marginTop: 5,
                      width: 184,
                    }}
                  >
                    검색량 대비 상품수로, 수치가 낮을수록 경쟁률이 낮은
                    키워드입니다.
                  </div>
                  <div
                    style={{
                      border: "1px dashed #D9D9D9",
                      width: "100%",
                      marginTop: 16,
                      marginBottom: 16,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0594D7",
                    }}
                  >
                    Top10 평균 판매 가격
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#191919",
                      marginTop: 5,
                      width: 163,
                    }}
                  >
                    해당 키워드를 사용하는 상품의 상위 10개의 평균 판매
                    가격입니다.
                  </div>
                  <div
                    style={{
                      border: "1px dashed #D9D9D9",
                      width: "100%",
                      marginTop: 16,
                      marginBottom: 16,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0594D7",
                    }}
                  >
                    최근 6개월 시장 규모
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#191919",
                      marginTop: 5,
                      width: 172,
                    }}
                  >
                    상위 80개 상품이 6개월 동안 판매한 예상 매출가격 입니다.
                  </div>
                  <div
                    style={{
                      border: "1px dashed #D9D9D9",
                      width: "100%",
                      marginTop: 16,
                      marginBottom: 16,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0594D7",
                    }}
                  >
                    최근 6개월 판매량
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#191919",
                      marginTop: 5,
                      width: 172,
                    }}
                  >
                    상위 80개 상품이 6개월 동안 판매한 판매수량 입니다.
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#191919",
                      marginTop: 12,
                    }}
                  >
                    · 지수는 상대적 지표입니다 :)
                  </div>
                </KeywordCard>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card style={{ width: 231, height: 107, marginRight: 20 }}>
              <Title>월간 총 검색량</Title>
              <Content>52,036</Content>
            </Card>
            <Card style={{ width: 231, height: 107, marginRight: 20 }}>
              <Title>판매 상품 수</Title>
              <Content>20,155</Content>
            </Card>
            <Card style={{ width: 231, height: 107 }}>
              <Title>키워드 경쟁률</Title>
              <Content>0 : 1</Content>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Card style={{ width: 734, height: 135 }}>
              <Title
                style={{
                  color: "#191919",
                }}
              >
                검색 비율 (PC 및 모바일)
              </Title>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    color: "#30B0EC",
                    marginRight: 20,
                  }}
                >
                  PC
                </div>
                <div
                  style={{
                    width: 420,
                    height: 30,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "65%",
                      height: "100%",
                      background: "#30B0EC",
                      paddingLeft: 20,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                      fontSize: 14,
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    65%
                  </div>
                  <div
                    style={{
                      width: "35%",
                      height: "100%",
                      background: "#05E4BC",
                      textAlign: "right",
                      paddingRight: 20,
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      fontSize: 14,
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    35%
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: "Pretendard",
                    fontWeight: 700,
                    color: "#06C1A0",
                    marginLeft: 20,
                  }}
                >
                  모바일
                </div>
              </div>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Card style={{ width: 168, height: 137, marginRight: 20 }}>
              <Title>평균 판매 가격</Title>
              <Content>52,036</Content>
            </Card>
            <Card style={{ width: 168, height: 137, marginRight: 20 }}>
              <Title>Top10 평균 판매 가격</Title>
              <Content>20,155</Content>
            </Card>
            <Card style={{ width: 168, height: 137, marginRight: 20 }}>
              <Title>최근 6개월 시장 규모</Title>
              <Content>52,036</Content>
            </Card>
            <Card style={{ width: 168, height: 137 }}>
              <Title>최근 6개월 판매량</Title>
              <Content>20,155</Content>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keyword;
