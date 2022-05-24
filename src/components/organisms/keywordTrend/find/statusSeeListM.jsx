import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import KFSProductItem from "../../../molecules/keywordTrend/kfsProductItem";
import KFSProductItemM from "../../../molecules/keywordTrend/kfsProductItemM";
import KeywordFindModal from "../../../templates/modal/keywordFindModal";

const ScrollYContainer = styled.div.attrs((props) => {})`
  overflow-x: auto;
  overflow-y: auto;
  height: 647px;

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

const RankL = styled.div.attrs((props) => {})`
  margin-left: 16px;
  width: 38px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const KeywordL = styled.div.attrs((props) => {})`
  width: 129px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchL = styled.div.attrs((props) => {})`
  width: 90px;
  display: flex;
  align-items: center;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  width: 85px;
  display: flex;
  align-items: center;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  width: 85px;
  display: flex;
  align-items: center;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  width: 90px;
  display: flex;
  align-items: center;
`;

function StatusSeeListM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [itemDataLength, setItemDataLength] = useState(0);
  const [tableData, setTableData] = useState({
    search: {
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
      search: "1759300",
      productC: "16136",
      competitionR: "0.8",
      shoppingR: "0.8",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.8",
      shoppingR: "0.8",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.8",
      shoppingR: "0.8",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.5",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.4",
      shoppingR: "0.12",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.9",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.9",
      shoppingR: "0.9",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.9",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.9",
      shoppingR: "0.9",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.9",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.9",
      shoppingR: "0.9",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "마켓컬리",
      search: "1759300",
      productC: "16136",
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
          height: 647,
          width: "100%",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        <ScrollYContainer>
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
              width: 533,
            }}
          >
            <RankL>순위</RankL>
            <KeywordL>
              키워드
              <img
                onClick={() => {
                  setIsMouseOver(true);
                }}
                style={{
                  width: 16,
                  height: 16,
                  cursor: "pointer",
                  marginLeft: 5,
                }}
                src="sellper-pages/assets/icons/question.png"
                alt="question"
              />
            </KeywordL>
            <SearchL>
              검색량
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
                      search: {
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
                    filter: tableData.search.up
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                    marginBottom: 2,
                  }}
                  src="sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      search: {
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
                    filter: tableData.search.down
                      ? "invert(44%) sepia(68%) saturate(2794%) hue-rotate(171deg) brightness(93%) contrast(96%)"
                      : "",
                    width: 8,
                    height: 8,
                    cursor: "pointer",
                  }}
                  src="sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </SearchL>
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
                      search: {
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
                  src="sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      search: {
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
                  src="sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </ProductCountL>
            <CompetitionRL>
              경쟁도
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
                      search: {
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
                  src="sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      search: {
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
                  src="sellper-pages/assets/icons/table_down.png"
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
                      search: {
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
                  src="sellper-pages/assets/icons/table_up.png"
                  alt="table_up"
                />
                <img
                  onClick={() => {
                    setTableData({
                      search: {
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
                  src="sellper-pages/assets/icons/table_down.png"
                  alt="table_down"
                />
              </div>
            </ShoppingRL>
          </div>

          {itemData.map((item, index) => {
            return (
              <KFSProductItemM
                key={index}
                index={index + 1}
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

export default StatusSeeListM;
