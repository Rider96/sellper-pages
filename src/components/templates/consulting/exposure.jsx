import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import Input from "../../atoms/input";
import InputSearch from "../../atoms/inputSearch";

import RadioButton from "../../molecules/buttons/radioButton";
import DailyCard from "../../organisms/consulting/exposure/dailyCard";
import RealTimeCard from "../../organisms/consulting/exposure/realTimeCard";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TopLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 369px;
  flex-direction: column;
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

const InputLayout = styled(Input).attrs((props) => {})`
  height: 40px;
  background: #ffffff;
  border: 1px solid #0594d7;
  border-radius: 4px;
  width: 280px;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 15px;
`;

function Exposure() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClick, setItemClick] = useState({
    daily: "true",
    realTime: "false",
  });

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <TopLayout>
            <div
              style={{
                marginTop: 42,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                fontWeight: "bold",
                color: "#0594D7",
              }}
            >
              Sellper Consulting
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
                  fontSize: 38,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  fontWeight: "bold",
                  color: "#191919",
                }}
              >
                ?????? ?????? ??????
              </div>
              <img
                style={{
                  marginLeft: 10,
                  width: 31.97,
                  height: 25.26,
                }}
                src="./assets/icons/exposure.png"
                alt="exposure"
              />
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#555555",
              }}
            >
              ??? ????????? ??? ????????? ???????????? ????????? ?????????????????????!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 24,
                marginBottom: 32,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton
                style={{
                  width: 135,
                  marginRight: 10,
                }}
                active={itemClick.daily}
                onClick={() => {
                  setItemClick({
                    daily: "true",
                    realTime: "false",
                  });
                }}
              >
                ?????? ?????? ??????
              </RadioButton>
              <RadioButton
                style={{
                  width: 135,
                }}
                active={itemClick.realTime}
                onClick={() => {
                  setItemClick({
                    daily: "false",
                    realTime: "true",
                  });
                }}
              >
                ????????? ?????? ??????
              </RadioButton>
            </div>
            {itemClick.daily === "true" ? (
              <InputSearch
                style={{ marginTop: 24 }}
                placeholder="?????? URL??? ??????????????????"
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 24,
                }}
              >
                <InputLayout
                  placeholder="??????????????? ??????????????????"
                  style={{
                    marginRight: 10,
                  }}
                />
                <InputLayout placeholder="???????????? ??????????????????" />

                <img
                  style={{
                    width: 40,
                    height: 40,
                    cursor: "pointer",
                    marginLeft: 10,
                  }}
                  src="./assets/icons/search_color.png"
                  alt="search_color"
                />
              </div>
            )}
          </TopLayout>
        </MainContainer>

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
                  marginTop: itemClick.daily === "true" ? 36 : 26,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: itemClick.daily === "true" ? 24 : 0,
                }}
              >
                {itemClick.daily === "true"
                  ? "?????? ?????? ????????? ???????????? ?????? ?????? ????????? ?????????"
                  : "????????????"}
              </div>
              {itemClick.daily === "true" ? null : (
                <div
                  style={{
                    fontFamily: "Pretendard-Medium",
                    fontWeight: 500,
                    fontSize: 12,
                    color: "#555555",
                    marginBottom: 24,
                  }}
                >
                  ??????????????? ????????? ?????? ?????????
                </div>
              )}
              {itemClick.daily === "true" ? <DailyCard /> : <RealTimeCard />}
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default Exposure;
