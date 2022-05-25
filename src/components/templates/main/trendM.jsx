import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import Select from "../../atoms/selects";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import BestItem from "../../organisms/main/bestItem";
import BestKeyword from "../../organisms/main/bestKeyword";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
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

function TrendM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isMore, setIsMore] = useState(false);
  const [ranking, setRanking] = useState(0);
  const [rankingKeyword, setRankingKeyword] = useState(0);
  const [setTimer, setSetTimer] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (setTimer > 111 && setTimer < 814 && ranking < 5) {
      setTimeout(() => {
        if (ranking < 5) {
          setRanking(ranking + 1);
        }
      }, 300);
    }

    if (isMore) {
      setTimeout(() => {
        if (ranking < 10) {
          setRanking(ranking + 1);
        }
      }, 300);
    }

    if (setTimer > 814 && rankingKeyword < 11) {
      setTimeout(() => {
        if (rankingKeyword < 11) {
          setRankingKeyword(rankingKeyword + 1);
        }
      }, 300);
    }
  }, [ranking, rankingKeyword, setTimer, isMore]);

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
              padding: "45px 20px 60px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 700,
                fontFamily: "GmarketSans",
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
                fontSize: 24,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                color: "#191919",
                textAlign: "center",
              }}
            >
              오늘의 트렌드를 공개합니다!
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 27,
              }}
            >
              <Select
                style={{
                  width: "100%",
                  marginBottom: 10,
                  textAlign: "left",
                }}
                data={selectList01}
                defaultValue={"0"}
              />
              <Select
                style={{
                  width: "100%",
                  marginBottom: 10,
                  textAlign: "left",
                }}
                data={selectList02}
                defaultValue={"0"}
              />

              <Select
                style={{
                  width: "100%",
                  textAlign: "left",
                }}
                data={selectList03}
                defaultValue={"0"}
              />
            </div>

            <div
              style={{
                marginTop: 52,
                marginBottom: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                }}
              >
                <div
                  style={{
                    color: "#191919",
                  }}
                >
                  오늘의 BEST&nbsp;
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
                    src="./sellper-pages/assets/icons/impact.png"
                    alt="impact"
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#555555",
                }}
              >
                오늘 네이버에서 가장 많이 검색된 키워드들이에요!
              </div>
            </div>
            <div
              style={{
                minHeight: 400,
              }}
            >
              {ranking > 0 ? (
                <BestItem
                  style={{
                    marginBottom: 10,
                  }}
                  imgSrc={"./sellper-pages/assets/images/product01.png"}
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
                  style={{
                    marginBottom: 10,
                  }}
                  imgSrc={"./sellper-pages/assets/images/product02.png"}
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

              {ranking > 2 ? (
                <BestItem
                  style={{
                    marginBottom: 10,
                  }}
                  imgSrc={"./sellper-pages/assets/images/product03.png"}
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
                  style={{
                    marginBottom: 10,
                  }}
                  imgSrc={"./sellper-pages/assets/images/product04.png"}
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

              {ranking > 4 ? (
                <BestItem
                  style={{
                    marginBottom: 10,
                  }}
                  imgSrc={"./sellper-pages/assets/images/product05.png"}
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

              {isMore ? (
                <div>
                  {ranking > 5 ? (
                    <BestItem
                      style={{
                        marginBottom: 10,
                      }}
                      imgSrc={"./sellper-pages/assets/images/product06.png"}
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

                  {ranking > 6 ? (
                    <BestItem
                      style={{
                        marginBottom: 10,
                      }}
                      imgSrc={"./sellper-pages/assets/images/product07.png"}
                      imgAlt={"product07"}
                      rank={"7위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}

                  {ranking > 7 ? (
                    <BestItem
                      style={{
                        marginBottom: 10,
                      }}
                      imgSrc={"./sellper-pages/assets/images/product08.png"}
                      imgAlt={"product08"}
                      rank={"8위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}

                  {ranking > 8 ? (
                    <BestItem
                      style={{
                        marginBottom: 10,
                      }}
                      imgSrc={"./sellper-pages/assets/images/product09.png"}
                      imgAlt={"product09"}
                      rank={"9위"}
                      name={"일리야"}
                      title={"일리 캡슐 커피"}
                      detail={"(네스프레소 호환 캡슐 스타벅스..."}
                      category01={"식품"}
                      category02={"커피"}
                      category03={"커피"}
                    />
                  ) : null}
                </div>
              ) : null}

              {ranking > 4 ? (
                <div>
                  {!isMore ? (
                    <GrayTextButton
                      onClick={() => {
                        setIsMore(true);
                      }}
                      style={{
                        width: "100%",
                        fontSize: 13,
                        color: "#191919",
                        fontWeight: 600,
                        border: "none",
                        borderRadius: 8,
                      }}
                    >
                      6위~10위 더보기
                      <img
                        style={{
                          width: 13,
                          height: 7,
                          marginLeft: 7,
                        }}
                        src="./sellper-pages/assets/icons/menu_down2.png"
                        alt="menu_down2"
                      />
                    </GrayTextButton>
                  ) : (
                    <GrayTextButton
                      onClick={() => {
                        setIsMore(false);
                      }}
                      style={{
                        width: "100%",
                        fontSize: 13,
                        color: "#191919",
                        fontWeight: 600,
                        border: "none",
                        borderRadius: 8,
                      }}
                    >
                      접어서 보기
                      <img
                        style={{
                          width: 13,
                          height: 7,
                          marginLeft: 7,
                        }}
                        src="./sellper-pages/assets/icons/menu_up2.png"
                        alt="menu_up2"
                      />
                    </GrayTextButton>
                  )}
                </div>
              ) : null}
            </div>

            <div
              style={{
                marginTop: 69,
                marginBottom: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                }}
              >
                <div
                  style={{
                    color: "#191919",
                  }}
                >
                  오늘의 BEST&nbsp;
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
                    src="./sellper-pages/assets/icons/impact.png"
                    alt="impact"
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#555555",
                }}
              >
                오늘 네이버에서 가장 많이 판매된 아이템들이에요!
              </div>
            </div>
            <div>
              {rankingKeyword > 0 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"1"}
                  name={"갤럭시탭s8울트라"}
                  rate={"2"}
                  result={"up"}
                  impact={true}
                />
              ) : null}
              {rankingKeyword > 1 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"2"}
                  name={"코로나진단키트"}
                  rate={"2"}
                  result={"up"}
                  impact={true}
                />
              ) : null}
              {rankingKeyword > 2 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"3"}
                  name={"s22울트라케이스"}
                  rate={""}
                  result={""}
                  impact={true}
                />
              ) : null}
              {rankingKeyword > 3 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"4"}
                  name={"가니미소"}
                  rate={"2"}
                  result={"up"}
                  impact={false}
                />
              ) : null}
              {rankingKeyword > 4 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"5"}
                  name={"산소포화도측정기"}
                  rate={""}
                  result={""}
                  impact={false}
                />
              ) : null}
              {rankingKeyword > 5 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"6"}
                  name={"킨더조이꽃다발"}
                  rate={"2"}
                  result={"down"}
                  impact={false}
                />
              ) : null}
              {rankingKeyword > 6 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"7"}
                  name={"갤럭시케이스"}
                  rate={"2"}
                  result={"down"}
                  impact={false}
                />
              ) : null}
              {rankingKeyword > 7 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"8"}
                  name={"포켓몬카드"}
                  rate={"2"}
                  result={"down"}
                  impact={false}
                />
              ) : null}
              {rankingKeyword > 8 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"9"}
                  name={"그래놀라"}
                  rate={""}
                  result={""}
                  impact={false}
                />
              ) : null}
              {rankingKeyword > 9 ? (
                <BestKeyword
                  style={{
                    marginBottom: 10,
                  }}
                  rank={"10"}
                  name={"산양유단백질"}
                  rate={""}
                  result={""}
                  impact={false}
                />
              ) : null}
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default TrendM;
