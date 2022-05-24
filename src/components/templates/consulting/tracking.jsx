import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import AreaChart from "../../atoms/chart/areaChart";

import ExcelDownload from "../../molecules/buttons/excelDownload";
import KeywordEdit from "../../molecules/buttons/keywordEdit";
import RadioButtonTwo from "../../molecules/buttons/radioButtonTwo";
import TopProductCard from "../../organisms/consulting/contents/topProductCard";
import BottomCard from "../../organisms/consulting/tracking/bottomCard";

import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

function Tracking() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClick, setItemClick] = useState({
    item01: { value: "true", label: "설렁탕" },
    item02: { value: "false", label: "육개장" },
    item03: { value: "false", label: "부대찌개" },
    item04: { value: "false", label: "미역국" },
  });
  const [areaChartData, setAreaChartData] = useState({
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
    pointX: "03.12",
    pointY: 52,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const findClickedItem = () => {
    if (itemClick.item01.value === "true") {
      return itemClick.item01.label;
    }

    if (itemClick.item02.value === "true") {
      return itemClick.item02.label;
    }

    if (itemClick.item03.value === "true") {
      return itemClick.item03.label;
    }

    if (itemClick.item04.value === "true") {
      return itemClick.item04.label;
    }
  };

  return (
    <>
      <Layout isSmall={isSmall}>
        <BottomLayout>
          <MainContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  marginTop: 50,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 20,
                }}
              >
                해당 상품의 일간 노출순위 추적 결과를 보여드려요
              </div>
              <TopProductCard />

              <div
                style={{
                  marginTop: 24,
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  height: 84,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 24,
                  }}
                >
                  <RadioButtonTwo
                    style={{
                      padding: "10px 15px",
                      marginRight: 10,
                    }}
                    active={itemClick.item01.value}
                    onClick={() => {
                      setItemClick({
                        item01: { value: "true", label: "설렁탕" },
                        item02: { value: "false", label: "육개장" },
                        item03: { value: "false", label: "부대찌개" },
                        item04: { value: "false", label: "미역국" },
                      });
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
                          30, 40, 44, 41, 52, 52, 43, 35, 33, 45, 40, 42, 49,
                          42, 30,
                        ],
                        pointX: "03.12",
                        pointY: 52,
                      });
                    }}
                  >
                    설렁탕
                  </RadioButtonTwo>
                  <RadioButtonTwo
                    style={{
                      padding: "10px 15px",
                      marginRight: 10,
                    }}
                    active={itemClick.item02.value}
                    onClick={() => {
                      setItemClick({
                        item01: { value: "false", label: "설렁탕" },
                        item02: { value: "true", label: "육개장" },
                        item03: { value: "false", label: "부대찌개" },
                        item04: { value: "false", label: "미역국" },
                      });
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
                          100, 140, 144, 141, 52, 52, 43, 35, 33, 45, 40, 42,
                          49, 42, 230,
                        ],
                        pointX: "03.22",
                        pointY: 230,
                      });
                    }}
                  >
                    육개장
                  </RadioButtonTwo>
                  <RadioButtonTwo
                    style={{
                      padding: "10px 15px",
                      marginRight: 10,
                    }}
                    active={itemClick.item03.value}
                    onClick={() => {
                      setItemClick({
                        item01: { value: "false", label: "설렁탕" },
                        item02: { value: "false", label: "육개장" },
                        item03: { value: "true", label: "부대찌개" },
                        item04: { value: "false", label: "미역국" },
                      });
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
                          10, 20, 14, 41, 52, 52, 43, 35, 33, 45, 40, 62, 49,
                          42, 30,
                        ],
                        pointX: "03.19",
                        pointY: 62,
                      });
                    }}
                  >
                    부대찌개
                  </RadioButtonTwo>
                  <RadioButtonTwo
                    style={{
                      padding: "10px 15px",
                    }}
                    active={itemClick.item04.value}
                    onClick={() => {
                      setItemClick({
                        item01: { value: "false", label: "설렁탕" },
                        item02: { value: "false", label: "육개장" },
                        item03: { value: "false", label: "부대찌개" },
                        item04: { value: "true", label: "미역국" },
                      });
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
                          30, 40, 44, 41, 52, 52, 43, 35, 33, 45, 40, 42, 49,
                          42, 30,
                        ],
                        pointX: "03.12",
                        pointY: 52,
                      });
                    }}
                  >
                    미역국
                  </RadioButtonTwo>
                </div>
                <div
                  style={{
                    padding: "22px 30px",
                  }}
                >
                  <KeywordEdit
                    style={{
                      width: 151,
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  height: 426,
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
                  }}
                >
                  <div
                    style={{
                      color: "#0594D7",
                    }}
                  >
                    {findClickedItem()}
                  </div>
                  <div>
                    의 노출 순위 추적 결과를 그래프로 먼저 확인해보세요!
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#AAAAAA",
                    marginBottom: 30,
                  }}
                />
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
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: 32,
                  marginBottom: 16,
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <ExcelDownload
                  style={{
                    width: 136,
                  }}
                />
              </div>

              <BottomCard />
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default Tracking;
