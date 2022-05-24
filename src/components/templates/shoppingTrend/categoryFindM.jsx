import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
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

function CategoryFindM() {
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
                    width: 141,
                  }}
                >
                  식품 카테고리로 검색한 아이템 판매 순위입니다
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

export default CategoryFindM;
