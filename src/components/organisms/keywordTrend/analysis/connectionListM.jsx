import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import KAProductItem from "../../../molecules/keywordTrend/kaProductItem";
import KAProductItemM from "../../../molecules/keywordTrend/kaProductItemM";
import KeywordFindModal from "../../../templates/modal/keywordFindModal";

const ScrollYContainer = styled.div.attrs((props) => {})`
  overflow-x: auto;
  overflow-y: auto;
  height: 600px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const KeywordL = styled.div.attrs((props) => {})`
  margin-left: 20px;
  width: 115px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchPCL = styled.div.attrs((props) => {})`
  width: 90px;
  display: flex;
  align-items: center;
`;

const SearchML = styled.div.attrs((props) => {})`
  width: 129px;
  display: flex;
  align-items: center;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  width: 80px;
  display: flex;
  align-items: center;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  width: 70px;
  display: flex;
  align-items: center;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  width: 80px;
  display: flex;
  align-items: center;
`;

function ConnectionListM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [itemDataLength, setItemDataLength] = useState(0);
  const [tableData, setTableData] = useState({
    searchPC: {
      up: false,
      down: false,
    },
    searchM: {
      up: false,
      down: false,
    },
    productC: {
      up: false,
      down: false,
    },
    competitionR: {
      up: false,
      down: false,
    },
    shoppingR: {
      up: false,
      down: false,
    },
  });
  const [itemData, setItemData] = useState([
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
  ]);

  useEffect(() => {
    setItemDataLength(itemData.length);
  }, [tableData]);

  const showModal = () => {
    setIsMouseOver(true);
  };

  const handleModalOk = () => {
    setIsMouseOver(false);
  };

  const handleModalCancel = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 600,
          width: "100%",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        <ScrollYContainer>
          <div
            style={{
              paddingLeft: 20,
              paddingTop: 20,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              borderBottom: "1px solid #AAAAAA",
              width: 576,
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "Pretendard",
                color: "#191919",
                marginRight: 5,
              }}
            >
              연관 키워드 리스트
            </div>
            <img
              onClick={() => {
                setIsMouseOver(true);
              }}
              style={{
                width: 16,
                height: 16,
                cursor: "pointer",
                marginBottom: 2,
              }}
              src="./sellper-pages/assets/icons/question.png"
              alt="question"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: 36,
              borderBottom: "1px solid #AAAAAA",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "Pretendard",
              color: "#191919",
              width: 576,
            }}
          >
            <KeywordL>키워드</KeywordL>
            <SearchPCL>
              검색량(PC)
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: true,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.searchPC.up
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: true,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.searchPC.down
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                  }}
                  src="./sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </SearchPCL>
            <SearchML>
              검색량(Mobile)
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: true,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.searchM.up
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: true,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.searchM.down
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                  }}
                  src="./sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </SearchML>
            <ProductCountL>
              상품수
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: true,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.productC.up
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: true,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.productC.down
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                  }}
                  src="./sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </ProductCountL>
            <CompetitionRL>
              경쟁률
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: true,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.competitionR.up
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: true,
                      },
                      shoppingR: {
                        up: false,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.competitionR.down
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                  }}
                  src="./sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </CompetitionRL>
            <ShoppingRL>
              쇼핑전환율
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: true,
                        down: false,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.shoppingR.up
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                  src="./sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      searchPC: {
                        up: false,
                        down: false,
                      },
                      searchM: {
                        up: false,
                        down: false,
                      },
                      productC: {
                        up: false,
                        down: false,
                      },
                      competitionR: {
                        up: false,
                        down: false,
                      },
                      shoppingR: {
                        up: false,
                        down: true,
                      },
                    });
                  }}
                  style={{
                    filter: tableData.shoppingR.down
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                  }}
                  src="./sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </ShoppingRL>
          </div>

          {itemData.map((item, index) => {
            return (
              <KAProductItemM
                key={index}
                item={item}
                last={itemDataLength - 1 === index}
              />
            );
          })}
        </ScrollYContainer>
      </div>

      <KeywordFindModal
        isModalVisible={isMouseOver}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default ConnectionListM;
