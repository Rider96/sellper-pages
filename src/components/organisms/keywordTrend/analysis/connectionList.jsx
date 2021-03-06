import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import KAProductItem from "../../../molecules/keywordTrend/kaProductItem";

const ScrollYContainer = styled.div.attrs((props) => {})`
  overflow-x: hidden;
  overflow-y: auto;
  height: 347px;

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

const KeywordCard = styled.div.attrs((props) => {})`
  position: absolute;
  width: 226px;
  background: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 24px 30px 27px 30px;
  top: 38px;
  left: 146px;
  font-family: "Pretendard";
`;

const KeywordL = styled.div.attrs((props) => {})`
  margin-left: 30px;
  width: 153px;
  border-right: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchPCL = styled.div.attrs((props) => {})`
  margin-left: 55px;
  width: 160px;
  display: flex;
  align-items: center;
`;

const SearchML = styled.div.attrs((props) => {})`
  width: 219px;
  display: flex;
  align-items: center;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  width: 173px;
  display: flex;
  align-items: center;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  width: 146px;
  display: flex;
  align-items: center;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  display: flex;
  align-items: center;
`;

function ConnectionList(props) {
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
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
      searchPC: "6400",
      searchM: "16136",
      productC: "110",
      competitionR: "0.18",
      shoppingR: "0.72",
    },
    {
      keyword: "????????????",
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

  return (
    <>
      <div
        style={{
          marginTop: 40,
          background: "#FFFFFF",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 480,
          width: "100%",
        }}
      >
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
            ?????? ????????? ?????????
          </div>
          <img
            onMouseOver={() => {
              setIsMouseOver(true);
            }}
            onMouseOut={() => {
              setIsMouseOver(false);
            }}
            style={{
              width: 16,
              height: 16,
              cursor: "pointer",
              marginBottom: 2,
            }}
            src="./assets/icons/question.png"
            alt="question"
          />
          {isMouseOver ? (
            <KeywordCard>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0594D7",
                }}
              >
                ?????????
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#191919",
                  marginTop: 5,
                  width: 184,
                }}
              >
                ????????? ?????? ????????????, ????????? ???????????? ???????????? ??????
                ??????????????????.
              </div>
              <div
                style={{
                  border: "1px dashed #D9D9D9",
                  width: "100%",
                  marginTop: 16,
                  marginBottom: 16,
                }}
              />
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0594D7",
                }}
              >
                ???????????????
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#191919",
                  marginTop: 5,
                  width: 163,
                }}
              >
                ????????? ?????? ?????????????????? ???????????? ??????????????????.
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#191919",
                  marginTop: 12,
                }}
              >
                ?? ????????? ????????? ??????????????? :)
              </div>
            </KeywordCard>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 57,
            borderBottom: "1px solid #AAAAAA",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Pretendard",
            color: "#191919",
          }}
        >
          <KeywordL>?????????</KeywordL>
          <SearchPCL>
            ?????????(PC)
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
                src="./assets/icons/table_up.png"
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
                src="./assets/icons/table_down.png"
                alt="table_down"
              />
            </div>
          </SearchPCL>
          <SearchML>
            ?????????(Mobile)
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
                src="./assets/icons/table_up.png"
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
                src="./assets/icons/table_down.png"
                alt="table_down"
              />
            </div>
          </SearchML>
          <ProductCountL>
            ?????????
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
                src="./assets/icons/table_up.png"
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
                src="./assets/icons/table_down.png"
                alt="table_down"
              />
            </div>
          </ProductCountL>
          <CompetitionRL>
            ?????????
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
                src="./assets/icons/table_up.png"
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
                src="./assets/icons/table_down.png"
                alt="table_down"
              />
            </div>
          </CompetitionRL>
          <ShoppingRL>
            ???????????????
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
                src="./assets/icons/table_up.png"
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
                src="./assets/icons/table_down.png"
                alt="table_down"
              />
            </div>
          </ShoppingRL>
        </div>
        <ScrollYContainer>
          {itemData.map((item, index) => {
            return (
              <KAProductItem
                key={index}
                item={item}
                last={itemDataLength - 1 === index}
              />
            );
          })}
        </ScrollYContainer>
      </div>
    </>
  );
}

export default ConnectionList;
