import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import MainContainer from "../components/templates/layouts/mainContainer";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";

import RadioButtonThree from "../components/molecules/buttons/radioButtonThree";
import Select from "../components/atoms/selects";
import InputSearch from "../components/atoms/inputSearch";
import CategoryFind from "../components/templates/shoppingTrend/categoryFind";
import KeywordFind from "../components/templates/shoppingTrend/keywordFind";
import StoreFind from "../components/templates/shoppingTrend/storeFind";
import ItemDetail from "../components/templates/shoppingTrend/itemDetail";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import FooterM from "../components/templates/footer/footerM";
import CategoryFindM from "../components/templates/shoppingTrend/categoryFindM";
import KeywordFindM from "../components/templates/shoppingTrend/keywordFindM";
import StoreFindM from "../components/templates/shoppingTrend/storeFindM";
import ItemDetailM from "../components/templates/shoppingTrend/itemDetailM";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  flex: 1;
  flex-direction: column;
`;

const BasicLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CateogryScroll = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  white-space: pre-wrap;

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const selectList01 = [
  {
    value: "0",
    label: "전체",
  },
  {
    value: "1",
    label: "식품",
  },
];

const selectList02 = [
  {
    value: "0",
    label: "2차 카테고리",
  },
  {
    value: "1",
    label: "음료",
  },
];

const selectList03 = [
  {
    value: "0",
    label: "3차 카테고리",
  },
  {
    value: "생수",
    label: "생수",
  },
];

function ShoppingTrend(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  const [inputData, setInputData] = useState("0");
  const [inputDataTemp, setInputDataTemp] = useState("");
  const [itemClick, setItemClick] = useState({
    CFind: "true",
    KFind: "false",
    SFind: "false",
    IDetail: "false",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/cFind")) {
      setItemClick({
        CFind: "true",
        KFind: "false",
        SFind: "false",
        IDetail: "false",
      });
    } else if (location.pathname.includes("/kFind")) {
      setItemClick({
        CFind: "false",
        KFind: "true",
        SFind: "false",
        IDetail: "false",
      });
    } else if (location.pathname.includes("/sFind")) {
      setItemClick({
        CFind: "false",
        KFind: "false",
        SFind: "true",
        IDetail: "false",
      });
    } else if (location.pathname.includes("/iDetail")) {
      setItemClick({
        CFind: "false",
        KFind: "false",
        SFind: "false",
        IDetail: "true",
      });
    } else {
      setItemClick({
        CFind: "false",
        KFind: "false",
        SFind: "false",
        IDetail: "false",
      });
    }
  };

  return (
    <>
      {isSmall ? null : <EventBar />}
      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      <Layout isSmall={isSmall}>
        <BasicLayout>
          <MainContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: isSmall ? "0px 20px" : "0",
              }}
            >
              <div
                style={{
                  marginTop: isSmall ? 30 : 44,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  color: "#0594D7",
                }}
              >
                Shopping Trend
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 3,
                }}
              >
                <div
                  style={{
                    fontSize: isSmall ? 28 : 38,
                    fontWeight: 700,
                    fontFamily: "GmarketSans",
                    color: "#191919",
                  }}
                >
                  아이템 판매 순위
                </div>
                <img
                  style={{
                    marginLeft: isSmall ? 6 : 8,
                    width: isSmall ? 27 : 31,
                    height: isSmall ? 22.66 : 26.01,
                  }}
                  src="./sellper-pages/assets/icons/shoppingTrend.png"
                  alt="shoppingTrend"
                />
              </div>
              <div
                style={{
                  marginTop: 3,
                  fontSize: isSmall ? 13 : 15,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#555555",
                  width: isSmall ? "70%" : "100%",
                }}
              >
                네이버 쇼핑에서 가장 잘나가는 아이템들의 전체 판매 순위를
                공개합니다!
              </div>
              {itemClick.IDetail === "true" ? null : (
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#D9D9D9",
                    marginTop: 24,
                    marginBottom: isSmall ? 16 : 40,
                  }}
                />
              )}
              {itemClick.IDetail === "true" ? null : (
                <CateogryScroll>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <RadioButtonThree
                      style={{
                        width: 135,
                        marginRight: 10,
                      }}
                      active={itemClick.CFind}
                      onClick={() => {
                        history.push("/shoppingTrend/cFind");
                        setInputData("0");
                        setInputDataTemp("");
                      }}
                    >
                      카테고리로 찾기
                    </RadioButtonThree>
                    <RadioButtonThree
                      style={{
                        width: 122,
                        marginRight: 10,
                      }}
                      active={itemClick.KFind}
                      onClick={() => {
                        history.push("/shoppingTrend/kFind");
                        setInputData("0");
                        setInputDataTemp("");
                      }}
                    >
                      키워드로 찾기
                    </RadioButtonThree>
                    <RadioButtonThree
                      style={{
                        width: 122,
                      }}
                      active={itemClick.SFind}
                      onClick={() => {
                        history.push("/shoppingTrend/sFind");
                        setInputData("0");
                        setInputDataTemp("");
                      }}
                    >
                      스토어로 찾기
                    </RadioButtonThree>
                  </div>
                </CateogryScroll>
              )}

              {itemClick.CFind === "true" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: isSmall ? "column" : "row",
                    marginBottom: 56,
                    marginTop: 24,
                  }}
                >
                  <div
                    style={{
                      marginRight: isSmall ? 0 : 16,
                      marginBottom: isSmall ? 10 : 0,
                    }}
                  >
                    <Select
                      style={{
                        width: isSmall ? "100%" : 263,
                        textAlign: "left",
                      }}
                      data={selectList01}
                      defaultValue={"0"}
                    />
                  </div>

                  <div
                    style={{
                      marginRight: isSmall ? 0 : 16,
                      marginBottom: isSmall ? 10 : 0,
                    }}
                  >
                    <Select
                      style={{
                        width: isSmall ? "100%" : 263,
                        textAlign: "left",
                      }}
                      data={selectList02}
                      defaultValue={"0"}
                    />
                  </div>

                  <Select
                    style={{
                      width: isSmall ? "100%" : 263,
                      textAlign: "left",
                    }}
                    data={selectList03}
                    defaultValue={"0"}
                    value={inputData}
                    onChange={(e) => {
                      setInputData(e);
                    }}
                  />
                </div>
              ) : itemClick.KFind === "true" ? (
                <div
                  style={{
                    marginBottom: isSmall ? 70 : 56,
                  }}
                >
                  <InputSearch
                    value={inputDataTemp}
                    style={{ marginTop: isSmall ? 21 : 24 }}
                    placeholder="키워드를 검색해주세요."
                    onChange={(e) => {
                      setInputDataTemp(e.target.value);
                    }}
                    onClick={() => {
                      setInputData(inputDataTemp);
                    }}
                  />
                </div>
              ) : itemClick.SFind === "true" ? (
                <div
                  style={{
                    marginBottom: isSmall ? 70 : 56,
                  }}
                >
                  <InputSearch
                    value={inputDataTemp}
                    style={{ marginTop: isSmall ? 21 : 24 }}
                    placeholder="스토어를 검색해주세요."
                    onChange={(e) => {
                      setInputDataTemp(e.target.value);
                    }}
                    onClick={() => {
                      setInputData(inputDataTemp);
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    marginBottom: 32,
                  }}
                />
              )}
            </div>
          </MainContainer>
        </BasicLayout>

        {inputData === "0" || inputData === "" ? (
          <div
            style={{
              height: 300,
            }}
          />
        ) : itemClick.CFind === "true" ? (
          isSmall ? (
            <CategoryFindM />
          ) : (
            <CategoryFind />
          )
        ) : itemClick.KFind === "true" ? (
          isSmall ? (
            <KeywordFindM />
          ) : (
            <KeywordFind />
          )
        ) : itemClick.SFind === "true" ? (
          isSmall ? (
            <StoreFindM />
          ) : (
            <StoreFind />
          )
        ) : isSmall ? (
          <ItemDetailM />
        ) : (
          <ItemDetail />
        )}
      </Layout>
      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default ShoppingTrend;
