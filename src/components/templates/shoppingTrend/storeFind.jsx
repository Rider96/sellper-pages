import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import DatePicker from "../../atoms/datePicker";
import ExcelDownload from "../../molecules/buttons/excelDownload";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import RadioButtonThree from "../../molecules/buttons/radioButtonThree";
import ProductCard from "../../organisms/shoppingTrend/productCard";

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

function StoreFind() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClick, setItemClick] = useState({
    upProduct: "false",
    downProduct: "false",
    storeProduct: "false",
  });

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
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 24,
                }}
              >
                입력하신 스마트스토어 내의 아이템 판매 순위입니다
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  height: 131,
                  width: "100%",
                  padding: 24,
                  marginBottom: 48,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    style={{
                      marginRight: 16,
                      width: 81,
                      height: 83,
                    }}
                    src="./assets/images/shoppingTrend/water08.png"
                    alt="water08"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        fontFamily: "Pretendard-SemiBold",
                        color: "#191919",
                      }}
                    >
                      제주 삼다수 500ml 20개/생수/먹는샘물/천연암반수
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 12,
                        color: "#555555",
                        marginBottom: 4,
                        marginTop: 2,
                      }}
                    >
                      <div>식품 </div>
                      <img
                        style={{
                          width: 5,
                          height: 10,
                          marginRight: 6,
                          marginLeft: 6,
                          marginBottom: 2,
                        }}
                        src="./assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>음료</div>
                      <img
                        style={{
                          width: 5,
                          height: 10,
                          marginRight: 6,
                          marginLeft: 6,
                          marginBottom: 2,
                        }}
                        src="./assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>생수</div>
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
                          fontFamily: "Pretendard-SemiBold",
                          fontWeight: 600,
                          fontSize: 14,
                          color: "#0594D7",
                          marginRight: 8,
                        }}
                      >
                        10,000원
                      </div>
                      <div
                        style={{
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
                          marginLeft: 10,
                          marginRight: 10,
                          fontFamily: "Pretendard-Medium",
                          fontWeight: 500,
                          fontSize: 11,
                          color: "#999999",
                        }}
                      >
                        l
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
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      flex: 1,
                    }}
                  >
                    <GrayTextButton style={{ width: 143, fontSize: 15 }}>
                      판매 페이지로 가기
                    </GrayTextButton>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <DatePicker
                    placeholder="2022-01-08"
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
                        src="./assets/icons/calendar.png"
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
                    placeholder="2022-01-08"
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
                        src="./assets/icons/calendar.png"
                        alt="calendar"
                      />
                    }
                  />

                  <RadioButtonThree
                    style={{
                      width: 93,
                      height: 32,
                      marginRight: 10,
                      marginLeft: 20,
                      fontSize: 14,
                      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                    active={itemClick.upProduct}
                    onClick={() => {
                      setItemClick({
                        upProduct: "true",
                        downProduct: "false",
                        storeProduct: "false",
                      });
                    }}
                  >
                    급상승 상품
                  </RadioButtonThree>
                  <RadioButtonThree
                    style={{
                      width: 93,
                      height: 32,
                      marginRight: 10,
                      fontSize: 14,
                      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                    active={itemClick.downProduct}
                    onClick={() => {
                      setItemClick({
                        upProduct: "false",
                        downProduct: "true",
                        storeProduct: "false",
                      });
                    }}
                  >
                    급하락 상품
                  </RadioButtonThree>
                </div>
                <ExcelDownload
                  style={{
                    width: 136,
                  }}
                />
              </div>
              <ProductCard itemClick={itemClick} />
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default StoreFind;
