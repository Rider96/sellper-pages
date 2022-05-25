import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import AreaChart from "../../atoms/chart/areaChart";
import DatePicker from "../../atoms/datePicker";
import InputSearch from "../../atoms/inputSearch";
import RadioButtonThree from "../../molecules/buttons/radioButtonThree";
import ConnectionList from "../../organisms/keywordTrend/analysis/connectionList";
import Keyword from "../../organisms/keywordTrend/analysis/keyword";
import Ranking from "../../organisms/keywordTrend/analysis/ranking";
import TopTen from "../../organisms/keywordTrend/analysis/topTen";

import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TopLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 271px;
  flex-direction: column;
  width: 100%;
`;

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function KeywordAnalysis() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [agree, setAgree] = useState(true);
  const [dateChk, setDateChk] = useState({
    week: "true",
    directly: "false",
  });
  const [areaChartData, setAreaChartData] = useState({
    categories: ["03.01", "03.02", "03.03", "03.04", "03.05", "03.06", "03.07"],
    data: [30, 40, 44, 41, 52, 52, 43],
    pointX: "03.03",
    pointY: 44,
    text: "3,772,000",
  });

  useEffect(() => {
    if (agree) {
      if (dateChk.week === "true") {
        setAreaChartData({
          categories: [
            "03.01",
            "03.02",
            "03.03",
            "03.04",
            "03.05",
            "03.06",
            "03.07",
          ],
          data: [37720, 34720, 41720, 31720, 24720, 38720, 39720],
        });
      }
      if (dateChk.directly === "true") {
        setAreaChartData({
          categories: [
            "03.08",
            "03.09",
            "03.10",
            "03.11",
            "03.12",
            "03.13",
            "03.14",
            "03.15",
            "03.16",
            "03.17",
            "03.18",
            "03.19",
            "03.20",
            "03.21",
            "03.22",
          ],
          data: [
            37720, 34720, 41720, 31720, 24720, 38720, 39720, 32720, 54720,
            61720, 31720, 24720, 48720, 39720, 70720,
          ],
        });
      }
    } else {
      if (dateChk.week === "true") {
        setAreaChartData({
          categories: [
            "03.01",
            "03.02",
            "03.03",
            "03.04",
            "03.05",
            "03.06",
            "03.07",
          ],
          data: [30, 40, 44, 41, 52, 52, 43],
          color: "#06C1A0",
        });
      }
      if (dateChk.directly === "true") {
        setAreaChartData({
          categories: [
            "03.08",
            "03.09",
            "03.10",
            "03.11",
            "03.12",
            "03.13",
            "03.14",
            "03.15",
            "03.16",
            "03.17",
            "03.18",
            "03.19",
            "03.20",
            "03.21",
            "03.22",
          ],
          data: [30, 40, 44, 41, 52, 52, 43, 35, 33, 45, 40, 42, 49, 42, 30],
          color: "#06C1A0",
        });
      }
    }
  }, [agree, dateChk]);

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <TopLayout>
            <div
              style={{
                marginTop: 42,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                fontWeight: "bold",
                color: "#0594D7",
              }}
            >
              Keyword Trend
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  fontWeight: "bold",
                  color: "#191919",
                }}
              >
                키워드 분석
              </div>
              <img
                style={{
                  marginLeft: 10,
                  width: 30,
                  height: 27.52,
                }}
                src="./sellper-pages/assets/icons/keyword_a.png"
                alt="keyword_a"
              />
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#555555",
              }}
            >
              키워드 분석 어렵지 않아요! 셀퍼가 도와드릴게요.
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 24,
              }}
            />

            <InputSearch
              style={{ marginTop: 24 }}
              placeholder="키워드를 입력해주세요"
            />
          </TopLayout>
        </MainContainer>

        <BottomLayout>
          <MainContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingTop: 52,
                paddingBottom: 110,
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  fontFamily: "Pretendard",
                  color: "#191919",
                  marginBottom: 6,
                }}
              >
                키워드 : 설렁탕
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontFamily: "Pretendard",
                  fontSize: 12,
                  marginBottom: 56,
                }}
              >
                <div
                  style={{
                    color: "#191919",
                    fontWeight: 600,
                    marginRight: 9,
                  }}
                >
                  1위 카테고리 :
                </div>
                <div
                  style={{
                    color: "#555555",
                    fontWeight: 500,
                  }}
                >
                  식품
                </div>
                <img
                  style={{
                    width: 5,
                    height: 10,
                    marginRight: 6,
                    marginLeft: 6,
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/right_arrow_gray.png"
                  alt="right_arrow_gray"
                />
                <div
                  style={{
                    color: "#555555",
                    fontWeight: 500,
                  }}
                >
                  식품냉동/간편조리식품
                </div>
                <img
                  style={{
                    width: 5,
                    height: 10,
                    marginRight: 6,
                    marginLeft: 6,
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/right_arrow_gray.png"
                  alt="right_arrow_gray"
                />
                <div
                  style={{
                    color: "#555555",
                    fontWeight: 500,
                    marginRight: 8,
                  }}
                >
                  즉석국/즉석탕
                </div>
                <div
                  style={{
                    color: "#0594D7",
                    fontWeight: 600,
                  }}
                >
                  (100%)
                </div>
              </div>

              <TopTen />

              <Keyword />

              <Ranking />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "Pretendard",
                  marginTop: 72,
                  marginBottom: 12,
                }}
              >
                <div style={{ color: "#0594D7" }}>세부 내용</div>
                <div style={{ color: "#191919" }}>도 확인해보세요</div>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  height: 485,
                  width: "100%",
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
                    padding: "20px 30px",
                    color: "#191919",
                  }}
                >
                  검색량 및 판매량 그래프
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#AAAAAA",
                    marginBottom: 20,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 40,
                    marginLeft: 30,
                  }}
                >
                  {agree ? (
                    <img
                      onClick={() => {
                        setAgree(true);
                      }}
                      style={{
                        cursor: "pointer",
                        marginRight: 10,
                        width: 18,
                        height: 18,
                      }}
                      src="./sellper-pages/assets/icons/radio_a.png"
                      alt="radio_a"
                    />
                  ) : (
                    <img
                      onClick={() => {
                        setAgree(true);
                      }}
                      style={{
                        cursor: "pointer",
                        marginRight: 10,
                        width: 18,
                        height: 18,
                      }}
                      src="./sellper-pages/assets/icons/radio_d.png"
                      alt="radio_d"
                    />
                  )}
                  <div
                    style={{
                      marginRight: 18,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#555555",
                      fontFamily: "Pretendard",
                    }}
                  >
                    검색량
                  </div>
                  {agree ? (
                    <img
                      onClick={() => {
                        setAgree(false);
                      }}
                      style={{
                        cursor: "pointer",
                        marginRight: 10,
                        width: 18,
                        height: 18,
                      }}
                      src="./sellper-pages/assets/icons/radio_d.png"
                      alt="radio_d"
                    />
                  ) : (
                    <img
                      onClick={() => {
                        setAgree(false);
                      }}
                      style={{
                        cursor: "pointer",
                        marginRight: 10,
                        width: 18,
                        height: 18,
                      }}
                      src="./sellper-pages/assets/icons/radio_a2.png"
                      alt="radio_a2"
                    />
                  )}
                  <div
                    style={{
                      marginRight: 27,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#555555",
                      fontFamily: "Pretendard",
                    }}
                  >
                    판매량
                  </div>
                  <RadioButtonThree
                    style={{
                      width: 84,
                      height: 28,
                      marginRight: 12,
                      fontSize: 13,
                      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                    active={dateChk.week}
                    onClick={() => {
                      setDateChk({
                        week: "true",
                        directly: "false",
                      });
                    }}
                  >
                    최근 일주일
                  </RadioButtonThree>
                  <RadioButtonThree
                    style={{
                      marginRight: 18,
                      width: 84,
                      height: 28,
                      fontSize: 13,
                      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                    active={dateChk.directly}
                    onClick={() => {
                      setDateChk({
                        week: "false",
                        directly: "true",
                      });
                    }}
                  >
                    직접 입력
                  </RadioButtonThree>
                  {dateChk.directly === "true" ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <DatePicker
                        placeholder="2022-03-08"
                        style={{
                          width: 140,
                          height: 28,
                        }}
                        suffixIcon={
                          <img
                            style={{
                              width: 12,
                              height: 12,
                            }}
                            src="./sellper-pages/assets/icons/calendar.png"
                            alt="calendar"
                          />
                        }
                      />
                      <div
                        style={{
                          marginLeft: 5,
                          marginRight: 5,
                          color: "#999999",
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "Pretendard",
                        }}
                      >
                        ~
                      </div>
                      <DatePicker
                        placeholder="2022-03-22"
                        style={{
                          width: 140,
                          height: 28,
                        }}
                        suffixIcon={
                          <img
                            style={{
                              width: 12,
                              height: 12,
                            }}
                            src="./sellper-pages/assets/icons/calendar.png"
                            alt="calendar"
                          />
                        }
                      />
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    paddingLeft: 45,
                  }}
                >
                  <AreaChart
                    pointX={areaChartData.pointX}
                    pointY={areaChartData.pointY}
                    data={areaChartData.data}
                    categories={areaChartData.categories}
                    color={areaChartData.color}
                    text={areaChartData.text}
                  />
                </div>
              </div>

              <ConnectionList />
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default KeywordAnalysis;
