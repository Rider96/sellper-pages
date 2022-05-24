import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import Input from "../../atoms/input";
import InputSearch from "../../atoms/inputSearch";

import RadioButton from "../../molecules/buttons/radioButton";
import DailyCard from "../../organisms/consulting/exposure/dailyCard";
import DailyCardM from "../../organisms/consulting/exposure/dailyCardM";
import RealTimeCardM from "../../organisms/consulting/exposure/realTimeCardM";
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
  flex-direction: column;
  width: 100%;
  margin: 0px 20px;
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
  width: 100%;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 14px;
  padding-left: 20px;
`;

function ExposureM() {
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
                marginTop: 30,
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
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  color: "#191919",
                }}
              >
                노출 순위 분석
              </div>
              <img
                style={{
                  marginLeft: 8,
                  width: 28,
                  height: 22.12,
                }}
                src="assets/icons/exposure.png"
                alt="exposure"
              />
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#555555",
              }}
            >
              내 상품이 몇 순위로 노출되고 있는지 추적해드릴게요!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 32,
                marginBottom: 16,
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
                일간 노출 순위
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
                실시간 노출 순위
              </RadioButton>
            </div>
            {itemClick.daily === "true" ? (
              <div
                style={{
                  paddingBottom: 80,
                }}
              >
                <InputSearch
                  style={{ marginTop: 22 }}
                  placeholder="상품 URL를 입력해주세요"
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: 22,
                  paddingBottom: 70,
                }}
              >
                <InputLayout
                  placeholder="스토어명을 입력해주세요"
                  style={{
                    marginBottom: 10,
                  }}
                />
                <InputSearch
                  iconStyle={{
                    top: "48%",
                  }}
                  placeholder="키워드를 입력해주세요"
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
                  marginLeft: 20,
                  marginTop: 22,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: itemClick.daily === "true" ? 20 : 0,
                  width: itemClick.daily === "true" ? "50%" : "100%",
                }}
              >
                {itemClick.daily === "true"
                  ? "일간 노출 순위를 추적하고 있는 상품 리스트 입니다"
                  : "검색결과"}
              </div>
              {itemClick.daily === "true" ? null : (
                <div
                  style={{
                    marginLeft: 20,
                    fontFamily: "Pretendard-Medium",
                    fontWeight: 500,
                    fontSize: 13,
                    color: "#555555",
                    marginBottom: 21,
                  }}
                >
                  실시간으로 분석한 결과 입니다
                </div>
              )}
              {itemClick.daily === "true" ? <DailyCardM /> : <RealTimeCardM />}
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default ExposureM;
