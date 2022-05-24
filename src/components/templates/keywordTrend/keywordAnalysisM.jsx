import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import AreaChart from "../../atoms/chart/areaChart";
import InputSearch from "../../atoms/inputSearch";
import ConnectionListM from "../../organisms/keywordTrend/analysis/connectionListM";
import KeywordM from "../../organisms/keywordTrend/analysis/keywordM";
import RankingM from "../../organisms/keywordTrend/analysis/rankingM";
import TopTenM from "../../organisms/keywordTrend/analysis/topTenM";

import MainContainer from "../layouts/mainContainer";
import KeywordADateModal from "../modal/keywordADateModal";
import KeywordAStatusModal from "../modal/keywordAStatusModal";

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
  flex-direction: column;
  width: 100%;
  padding: 0px 20px;
  padding-bottom: 80px;
`;

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function KeywordAnalysisM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [agree, setAgree] = useState(true);
  const [dateChk, setDateChk] = useState({
    week: true,
    directly: false,
  });
  const [areaChartData, setAreaChartData] = useState({
    categories: ["03.01", "03.02", "03.03", "03.04", "03.05", "03.06", "03.07"],
    data: [30, 40, 44, 41, 52, 52, 43],
    pointX: "03.03",
    pointY: 44,
    text: "3,772,000",
  });
  const [isStatusModal, setIsStatusModal] = useState(false);
  const [isDateModal, setIsDateModal] = useState(false);

  useEffect(() => {
    if (agree) {
      if (dateChk.week) {
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
      if (dateChk.directly) {
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
      if (dateChk.week) {
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
      if (dateChk.directly) {
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

  const showModal = () => {
    setIsStatusModal(true);
  };

  const handleModalOk = () => {
    setIsStatusModal(false);
  };

  const handleModalCancel = () => {
    setIsStatusModal(false);
  };

  const showDateModal = () => {
    setIsDateModal(true);
  };

  const handleDateModalOk = () => {
    setIsDateModal(false);
  };

  const handleDateModalCancel = () => {
    setIsDateModal(false);
  };

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <TopLayout>
            <div
              style={{
                marginTop: 38,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "GmarketSans",
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
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  color: "#191919",
                }}
              >
                키워드 분석
              </div>
              <img
                style={{
                  marginLeft: 8,
                  width: 25,
                  height: 22.93,
                }}
                src="./assets/icons/keyword_a.png"
                alt="keyword_a"
              />
            </div>
            <div
              style={{
                fontSize: 13,
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
                marginTop: 30,
              }}
            />

            <InputSearch
              style={{ marginTop: 24, width: "100%" }}
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
                paddingTop: 23,
                paddingBottom: 46,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 20,
                  marginBottom: 48,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 3,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      fontFamily: "Pretendard",
                      color: "#191919",
                    }}
                  >
                    설렁탕
                  </div>
                  <div
                    style={{
                      marginLeft: 4,
                      fontSize: 15,
                      fontWeight: 600,
                      fontFamily: "Pretendard",
                      color: "#191919",
                    }}
                  >
                    (300개)
                  </div>

                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: 11,
                      fontWeight: 500,
                      fontFamily: "Pretendard",
                      color: "#999999",
                    }}
                  >
                    최근 일주일
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontFamily: "Pretendard-Medium",
                    fontWeight: 500,
                    fontSize: 11,
                    color: "#555555",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#191919",
                      fontFamily: "Pretendard",
                      marginRight: 5,
                    }}
                  >
                    1위 카테고리 :
                  </div>
                  <div>식품 </div>
                  <img
                    style={{
                      width: 4,
                      height: 8,
                      marginRight: 6,
                      marginLeft: 6,
                    }}
                    src="./assets/icons/right_arrow_gray.png"
                    alt="right_arrow_gray"
                  />
                  <div>식품냉동/간편조리식품</div>
                  <img
                    style={{
                      width: 4,
                      height: 8,
                      marginRight: 6,
                      marginLeft: 6,
                    }}
                    src="./assets/icons/right_arrow_gray.png"
                    alt="right_arrow_gray"
                  />
                  <div>즉석국/즉석탕</div>
                </div>
              </div>

              <TopTenM />

              <KeywordM />

              <RankingM />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "Pretendard",
                  marginTop: 48,
                  marginBottom: 16,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: "#0594D7" }}>세부 내용</div>
                  <div style={{ color: "#191919" }}>도 확인해보세요</div>
                </div>
                <img
                  onClick={() => {
                    showModal();
                  }}
                  style={{
                    cursor: "pointer",
                    width: 3,
                    height: 15,
                    marginRight: 26,
                  }}
                  src="./assets/icons/sub_menu.png"
                  alt="sub_menu"
                />
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  marginLeft: 20,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
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
                    height: 1,
                    width: 1020,
                    backgroundColor: "#AAAAAA",
                    marginBottom: 20,
                  }}
                />
                <div
                  style={{
                    paddingLeft: 20,
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

              <div
                style={{
                  marginTop: 41,
                  marginLeft: 20,
                }}
              >
                <ConnectionListM />
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>

      <KeywordAStatusModal
        agree={agree}
        setAgree={setAgree}
        isModalVisible={isStatusModal}
        isDateModalVisible={showDateModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />

      <KeywordADateModal
        dateChk={dateChk}
        setDateChk={setDateChk}
        isModalVisible={isDateModal}
        handleOk={handleDateModalOk}
        handleCancel={handleDateModalCancel}
      />
    </>
  );
}

export default KeywordAnalysisM;
