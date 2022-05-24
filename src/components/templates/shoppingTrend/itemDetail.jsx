import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import AreaChart from "../../atoms/chart/areaChart";
import DatePicker from "../../atoms/datePicker";
import RadioButtonThree from "../../molecules/buttons/radioButtonThree";
import ProductItem from "../../molecules/shoppingTrend/productItem";

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

const RankLayout = styled.div.attrs((props) => {})`
  margin-left: 24px;
  width: 71px;
`;

const NameLayout = styled.div.attrs((props) => {})`
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  color: #191919;
`;

const CategoryLayout = styled.div.attrs((props) => {})`
  width: 223px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AmountLayout = styled.div.attrs((props) => {})`
  width: 137px;
`;

const PriceLayout = styled.div.attrs((props) => {})`
  width: 137px;
`;

function ItemDetail() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClick, setItemClick] = useState({
    upProduct: "true",
    downProduct: "false",
    storeProduct: "false",
  });
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
          data: [3772000, 3472000, 4172000, 3172000, 2472000, 3872000, 3972000],
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
            3772000, 3472000, 4172000, 3172000, 2472000, 3872000, 3972000,
            3272000, 5472000, 6172000, 3172000, 2472000, 4872000, 3972000,
            7072000,
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
                  marginTop: 36,
                  fontFamily: "Pretendard",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 24,
                }}
              >
                선택하신 상품의 판매 순위를 확인해보세요!
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  height: 141,
                  width: "100%",
                  marginBottom: 56,
                }}
              >
                <div
                  style={{
                    height: 49,
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid #AAAAAA",
                    alignItems: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "Pretendard",
                    color: "#191919",
                  }}
                >
                  <RankLayout>순위</RankLayout>
                  <NameLayout>상품명</NameLayout>
                  <CategoryLayout>카테고리</CategoryLayout>
                  <AmountLayout>판매수량</AmountLayout>
                  <PriceLayout>판매가격</PriceLayout>
                  <div>총판매금액</div>
                </div>
                <ProductItem
                  itemClick={itemClick}
                  last={true}
                  rank={"1"}
                  name={"제주삼다수 무라벨"}
                  image={"/assets/images/shoppingTrend/water01.png"}
                  isDetail={true}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontFamily: "Pretendard",
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    color: "#191919",
                  }}
                >
                  해당 상품의&nbsp;
                </div>
                <div
                  style={{
                    color: "#0594D7",
                  }}
                >
                  히스토리
                </div>
                <div
                  style={{
                    color: "#191919",
                  }}
                >
                  를 확인해보세요
                </div>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  height: 485,
                  width: "100%",
                  marginBottom: 126,
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
                  매출액 및 판매량 그래프
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
                      src="assets/icons/radio_a.png"
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
                      src="assets/icons/radio_d.png"
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
                    매출액
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
                      src="assets/icons/radio_d.png"
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
                      src="assets/icons/radio_a2.png"
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
                            src="assets/icons/calendar.png"
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
                            src="assets/icons/calendar.png"
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
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default ItemDetail;
