import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import Select from "../../atoms/selects";
import BestItem from "../../organisms/main/bestItem";
import BestItemSmall from "../../organisms/main/bestItemSmall";
import BestKeyword from "../../organisms/main/bestKeyword";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  height: 1358px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const selectList01 = [
  {
    value: "0",
    label: "전체",
  },
  {
    value: "1",
    label: "식품",
  },
];

const selectList02 = [
  {
    value: "0",
    label: "2차 카테고리",
  },
  {
    value: "1",
    label: "음료",
  },
];

const selectList03 = [
  {
    value: "0",
    label: "3차 카테고리",
  },
  {
    value: "1",
    label: "생수",
  },
];

function Trend() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [ranking, setRanking] = useState(0);
  const [rankingKeyword, setRankingKeyword] = useState(0);
  const [setTimer, setSetTimer] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (ranking < 10) {
      setTimeout(() => {
        if (ranking < 10) {
          setRanking(ranking + 1);
        }
      }, 300);
    }

    if (setTimer > 500 && rankingKeyword < 11) {
      setTimeout(() => {
        if (rankingKeyword < 11) {
          setRankingKeyword(rankingKeyword + 1);
        }
      }, 300);
    }
  }, [ranking, rankingKeyword, setTimer]);

  const handleScroll = (e) => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const myScroll = e.srcElement.scrollingElement.scrollTop;

    setSetTimer(myScroll);
  };

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 22,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  color: "#0594D7",
                }}
              >
                SELLPER
              </div>
              <div
                style={{
                  color: "#191919",
                }}
              >
                에서
              </div>
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                fontWeight: "bold",
                color: "#191919",
              }}
            >
              오늘의 트렌드를 공개합니다!
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 56,
              }}
            >
              <div
                style={{
                  marginRight: 16,
                }}
              >
                <Select
                  style={{
                    width: 263,
                    textAlign: "left",
                  }}
                  data={selectList01}
                  defaultValue={"0"}
                />
              </div>

              <div
                style={{
                  marginRight: 16,
                }}
              >
                <Select
                  style={{
                    width: 263,
                    textAlign: "left",
                  }}
                  data={selectList02}
                  defaultValue={"0"}
                />
              </div>

              <Select
                style={{
                  width: 263,
                  textAlign: "left",
                }}
                data={selectList03}
                defaultValue={"0"}
              />
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                marginTop: 36,
              }}
            >
              <div
                style={{
                  marginRight: 88,
                }}
              >
                <div
                  style={{
                    paddingTop: 24,
                    paddingBottom: 32,
                    borderBottom: "1px solid #D9D9D9",
                    borderTop: "1px solid #D9D9D9",
                    width: 215,
                  }}
                >
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: "GmarketSans",
                      fontWeight: "bold",
                      color: "#191919",
                      lineHeight: 1,
                    }}
                  >
                    오늘의
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: "GmarketSans",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        color: "#191919",
                      }}
                    >
                      BEST&nbsp;
                    </div>
                    <div
                      style={{
                        color: "#0594D7",
                        position: "relative",
                      }}
                    >
                      판매
                      <img
                        style={{
                          position: "absolute",
                          width: 8,
                          height: 8,
                        }}
                        src="./assets/icons/impact.png"
                        alt="impact"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard-Regular",
                      color: "#767676",
                      marginTop: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    <div>오늘 네이버에서</div>
                    <div>가장 많이 판매된 아이템들이에요!</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  minHeight: 500,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 16,
                  }}
                >
                  {ranking > 0 ? (
                    <BestItem
                      style={{
                        marginRight: 17,
                      }}
                      imgSrc={"/assets/images/product01.png"}
                      imgAlt={"product01"}
                      rank={"1위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}

                  {ranking > 1 ? (
                    <BestItem
                      imgSrc={"/assets/images/product02.png"}
                      imgAlt={"product02"}
                      rank={"2위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 16,
                  }}
                >
                  {ranking > 2 ? (
                    <BestItem
                      style={{
                        marginRight: 17,
                      }}
                      imgSrc={"/assets/images/product03.png"}
                      imgAlt={"product03"}
                      rank={"3위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}

                  {ranking > 3 ? (
                    <BestItem
                      imgSrc={"/assets/images/product04.png"}
                      imgAlt={"product04"}
                      rank={"4위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 16,
                  }}
                >
                  {ranking > 4 ? (
                    <BestItem
                      style={{
                        marginRight: 17,
                      }}
                      imgSrc={"/assets/images/product05.png"}
                      imgAlt={"product05"}
                      rank={"5위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}

                  {ranking > 5 ? (
                    <BestItem
                      imgSrc={"/assets/images/product06.png"}
                      imgAlt={"product06"}
                      rank={"6위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {ranking > 6 ? (
                    <BestItemSmall
                      style={{
                        marginRight: 16,
                      }}
                      imgSrc={"/assets/images/product07.png"}
                      imgAlt={"product07"}
                      rank={"7위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                    />
                  ) : null}

                  {ranking > 7 ? (
                    <BestItemSmall
                      style={{
                        marginRight: 16,
                      }}
                      imgSrc={"/assets/images/product08.png"}
                      imgAlt={"product08"}
                      rank={"8위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                    />
                  ) : null}

                  {ranking > 8 ? (
                    <BestItemSmall
                      imgSrc={"/assets/images/product09.png"}
                      imgAlt={"product09"}
                      rank={"9위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                    />
                  ) : null}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                marginTop: 77,
              }}
            >
              <div
                style={{
                  marginRight: 88,
                }}
              >
                <div
                  style={{
                    paddingTop: 24,
                    paddingBottom: 32,
                    borderBottom: "1px solid #D9D9D9",
                    borderTop: "1px solid #D9D9D9",
                    width: 215,
                  }}
                >
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: "GmarketSans",
                      fontWeight: "bold",
                      color: "#191919",
                      lineHeight: 1,
                    }}
                  >
                    오늘의
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: "GmarketSans",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      style={{
                        color: "#191919",
                      }}
                    >
                      BEST&nbsp;
                    </div>
                    <div
                      style={{
                        color: "#0594D7",
                        position: "relative",
                      }}
                    >
                      키워드
                      <img
                        style={{
                          position: "absolute",
                          width: 8,
                          height: 8,
                        }}
                        src="./assets/icons/impact.png"
                        alt="impact"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard-Regular",
                      color: "#767676",
                      marginTop: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    <div>오늘 네이버에서</div>
                    <div>가장 많이 판매된 아이템들이에요!</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  minHeight: 360,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  {rankingKeyword > 0 ? (
                    <BestKeyword
                      style={{
                        marginRight: 20,
                      }}
                      rank={"1"}
                      name={"갤럭시탭s8울트라"}
                      rate={"2"}
                      result={"up"}
                      impact={true}
                    />
                  ) : null}

                  {rankingKeyword > 5 ? (
                    <BestKeyword
                      rank={"6"}
                      name={"킨더조이꽃다발"}
                      rate={"2"}
                      result={"down"}
                      impact={false}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  {rankingKeyword > 1 ? (
                    <BestKeyword
                      style={{
                        marginRight: 20,
                      }}
                      rank={"2"}
                      name={"코로나진단키트"}
                      rate={"2"}
                      result={"up"}
                      impact={true}
                    />
                  ) : null}

                  {rankingKeyword > 6 ? (
                    <BestKeyword
                      rank={"7"}
                      name={"갤럭시케이스"}
                      rate={"2"}
                      result={"down"}
                      impact={false}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  {rankingKeyword > 2 ? (
                    <BestKeyword
                      style={{
                        marginRight: 20,
                      }}
                      rank={"3"}
                      name={"s22울트라케이스"}
                      rate={""}
                      result={""}
                      impact={true}
                    />
                  ) : null}

                  {rankingKeyword > 7 ? (
                    <BestKeyword
                      rank={"8"}
                      name={"포켓몬카드"}
                      rate={"2"}
                      result={"down"}
                      impact={false}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  {rankingKeyword > 3 ? (
                    <BestKeyword
                      style={{
                        marginRight: 20,
                      }}
                      rank={"4"}
                      name={"가니미소"}
                      rate={"2"}
                      result={"up"}
                      impact={false}
                    />
                  ) : null}

                  {rankingKeyword > 8 ? (
                    <BestKeyword
                      rank={"9"}
                      name={"그래놀라"}
                      rate={""}
                      result={""}
                      impact={false}
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {rankingKeyword > 4 ? (
                    <BestKeyword
                      style={{
                        marginRight: 20,
                      }}
                      rank={"5"}
                      name={"산소포화도측정기"}
                      rate={""}
                      result={""}
                      impact={false}
                    />
                  ) : null}

                  {rankingKeyword > 9 ? (
                    <BestKeyword
                      rank={"10"}
                      name={"산양유단백질"}
                      rate={""}
                      result={""}
                      impact={false}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default Trend;
