import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import DatePicker from "../../atoms/datePicker";
import ExcelDownload from "../../molecules/buttons/excelDownload";
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

function KeywordFind() {
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
                생수 키워드로 검색한 아이템 판매 순위입니다
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
                        src="./sellper-pages/assets/icons/calendar.png"
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
                  <RadioButtonThree
                    style={{
                      width: 117,
                      height: 32,
                      fontSize: 14,
                      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.08)",
                    }}
                    active={itemClick.storeProduct}
                    onClick={() => {
                      setItemClick({
                        upProduct: "false",
                        downProduct: "false",
                        storeProduct: "true",
                      });
                    }}
                  >
                    스토어 인기 순위
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

export default KeywordFind;
