import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import AreaChart from "../../atoms/chart/areaChart";

import ExcelDownload from "../../molecules/buttons/excelDownload";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import KeywordEdit from "../../molecules/buttons/keywordEdit";
import RadioButtonTwo from "../../molecules/buttons/radioButtonTwo";
import TopProductCard from "../../organisms/consulting/contents/topProductCard";
import BottomCard from "../../organisms/consulting/tracking/bottomCard";
import BottomCardM from "../../organisms/consulting/tracking/bottomCardM";

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

function TrackingM() {
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
                  marginTop: 30,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 20,
                  marginLeft: 20,
                  width: "50%",
                }}
              >
                해당 상품의 일간 노출순위 추적 결과를 보여드려요
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  padding: "24px 20px",
                  marginBottom: 32,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <img
                    style={{
                      marginRight: 16,
                      width: 49,
                      height: 50,
                    }}
                    src="./sellper-pages/assets/images/consulting/contents/product.png"
                    alt="product"
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
                        fontFamily: "Pretendard-SemiBold",
                        color: "#191919",
                        width: "100%",
                        display: "inline-block",
                        overflow: "hidden",
                      }}
                    >
                      육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국
                      우거지국 돼지고기...
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 10,
                        color: "#555555",
                        marginTop: 6,
                      }}
                    >
                      <div>식품 </div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 4,
                          marginLeft: 4,
                        }}
                        src="./sellper-pages/assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>식품냉동/간편조리식품</div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 4,
                          marginLeft: 4,
                        }}
                        src="./sellper-pages/assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>즉석국/즉석탕</div>
                    </div>
                    <div
                      style={{
                        fontFamily: "Pretendard-SemiBold",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#0594D7",
                      }}
                    >
                      690원
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 11,
                        color: "#999999",
                      }}
                    >
                      키워드 총 검색수 : 1,210,840
                    </div>
                    <div
                      style={{
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 11,
                        color: "#999999",
                      }}
                    >
                      리뷰수 : 19,914
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        flex: 1,
                        marginTop: 20,
                      }}
                    >
                      <GrayTextButton style={{ width: "100%", fontSize: 14 }}>
                        판매 페이지로 가기
                      </GrayTextButton>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: 19,
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    width: 10,
                    height: 10,
                    marginRight: 4,
                  }}
                  src="./sellper-pages/assets/icons/keyword_edit.png"
                  alt="keyword_edit"
                />
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: "Pretendard",
                    color: "#555555",
                    textDecorationLine: "underline",
                  }}
                >
                  키워드 수정하기
                </div>
              </div>
              <div
                style={{
                  marginTop: 10,
                  marginLeft: 20,
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                  }}
                >
                  <RadioButtonTwo
                    style={{
                      padding: "10px 15px",
                      marginRight: 10,
                      width: 73,
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
                      width: 73,
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
                      width: 83,
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
                      width: 73,
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
              </div>
              <div
                style={{
                  marginTop: 12,
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  marginLeft: 20,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  overflowX: "auto",
                  overflowY: "hidden",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    width: 1020,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontFamily: "Pretendard-Bold",
                    fontWeight: 700,
                    fontSize: 14,
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
                  />
                </div>
              </div>
              <div style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                <BottomCardM />
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default TrackingM;
