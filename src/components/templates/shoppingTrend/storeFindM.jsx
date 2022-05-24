import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import DatePicker from "../../atoms/datePicker";
import ExcelDownload from "../../molecules/buttons/excelDownload";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import RadioButtonThree from "../../molecules/buttons/radioButtonThree";
import ProductCard from "../../organisms/shoppingTrend/productCard";
import ProductCardM from "../../organisms/shoppingTrend/productCardM";

import MainContainer from "../layouts/mainContainer";
import KeywordADateModal from "../modal/keywordADateModal";
import ShoppingTStatusModal from "../modal/shoppingTStatusModal";

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
  const [isStatusModal, setIsStatusModal] = useState(false);
  const [isDateModal, setIsDateModal] = useState(false);
  const [dateChk, setDateChk] = useState({
    week: true,
    directly: false,
  });

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
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 24,
                  marginBottom: 20,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#191919",
                    width: 170,
                  }}
                >
                  입력하신 스마트스토어 내의 아이템 판매 순위입니다
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
                  src="sellper-pages/assets/icons/sub_menu.png"
                  alt="sub_menu"
                />
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  padding: "24px 20px",
                  marginBottom: 20,
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
                      width: 48.8,
                      height: 50,
                    }}
                    src="sellper-pages/assets/images/shoppingTrend/water08.png"
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
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "Pretendard-SemiBold",
                        color: "#191919",
                        width: "100%",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      제주 삼다수 500ml 20개/생수/먹는샘...
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
                        src="sellper-pages/assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>음료</div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 4,
                          marginLeft: 4,
                        }}
                        src="sellper-pages/assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>생수</div>
                    </div>
                    <div
                      style={{
                        fontFamily: "Pretendard-SemiBold",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#0594D7",
                      }}
                    >
                      10,000원
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
                  marginLeft: 20,
                }}
              >
                <ProductCardM itemClick={itemClick} />
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>

      <ShoppingTStatusModal
        isStore={true}
        itemClick={itemClick}
        setItemClick={setItemClick}
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

export default StoreFind;
