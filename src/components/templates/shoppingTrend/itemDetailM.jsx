import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import AreaChart from "../../atoms/chart/areaChart";
import DatePicker from "../../atoms/datePicker";
import RadioButtonThree from "../../molecules/buttons/radioButtonThree";
import ProductItem from "../../molecules/shoppingTrend/productItem";

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

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function ItemDetailM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [agree, setAgree] = useState(true);
  const [dateChk, setDateChk] = useState({
    week: true,
    directly: false,
  });
  const [isStatusModal, setIsStatusModal] = useState(false);
  const [isDateModal, setIsDateModal] = useState(false);
  const [areaChartData, setAreaChartData] = useState({
    categories: ["03.01", "03.02", "03.03", "03.04", "03.05", "03.06", "03.07"],
    data: [30, 40, 44, 41, 52, 52, 43],
    pointX: "03.03",
    pointY: 44,
    text: "3,772,000",
  });

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
          data: [3772000, 3472000, 4172000, 3172000, 2472000, 3872000, 3972000],
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
            3772000, 3472000, 4172000, 3172000, 2472000, 3872000, 3972000,
            3272000, 5472000, 6172000, 3172000, 2472000, 4872000, 3972000,
            7072000,
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
                  marginTop: 23,
                  marginLeft: 20,
                  fontFamily: "Pretendard",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 15,
                }}
              >
                선택하신 상품의 판매 순위를 확인해보세요!
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: 48,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontFamily: "Pretendard",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "#191919",
                      borderBottom: "1px solid #D9D9D9",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        marginLeft: 16,
                        width: 67,
                      }}
                    >
                      순위
                    </div>
                    <div
                      style={{
                        width: 237,
                      }}
                    >
                      상품명
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontFamily: "Pretendard",
                      borderBottom: "1px solid #D9D9D9",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: 20,
                        width: 63,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontSize: 12,
                        fontWeight: 400,
                      }}
                    >
                      1
                      <img
                        style={{
                          width: 8,
                          height: 8,
                          marginLeft: 5,
                          marginRight: 1,
                          marginBottom: 1,
                        }}
                        src={"/assets/icons/up_red.png"}
                        alt="up_red"
                      />
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 400,
                          fontFamily: "Pretendard-Medium",
                          color: "#FF6561",
                        }}
                      >
                        2
                      </div>
                    </div>
                    <div
                      style={{
                        width: 237,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15,
                        paddingBottom: 16,
                      }}
                    >
                      <img
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 12,
                        }}
                        src={"/assets/images/shoppingTrend/water01.png"}
                        alt="water"
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          제주삼다수 무라벨
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            fontSize: 10,
                            fontWeight: 500,
                          }}
                        >
                          <div>식품</div>
                          <img
                            style={{
                              width: 4,
                              height: 8,
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                            src="assets/icons/right_arrow.png"
                            alt="right_arrow"
                          />
                          <div>음료</div>
                          <img
                            style={{
                              width: 4,
                              height: 8,
                              marginRight: 4,
                              marginLeft: 4,
                            }}
                            src="assets/icons/right_arrow.png"
                            alt="right_arrow"
                          />
                          <div>생수</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1,
                        borderRight: "1px solid #D9D9D9",
                        paddingTop: 16,
                        paddingBottom: 19,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        판매수량
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 400,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        5,230
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1,
                        borderRight: "1px solid #D9D9D9",
                        paddingTop: 16,
                        paddingBottom: 19,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        판매가격
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 400,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        9,900
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1,
                        paddingTop: 16,
                        paddingBottom: 19,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        총판매금액
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 400,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        51,777,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "Pretendard",
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 20,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
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
                  src="assets/icons/sub_menu.png"
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
                  marginBottom: 75,
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
                    width: 1020,
                    height: 1,
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
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>

      <KeywordAStatusModal
        sales={true}
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

export default ItemDetailM;
