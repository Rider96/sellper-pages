import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import KeywordAnalysisModal from "../../../templates/modal/keywordAnalysisModal";

const Card = styled.div.attrs((props) => {})`
  background: #ffffff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div.attrs((props) => {})`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  color: rgb(85, 85, 85);
  font-family: Pretendard;
  font-weight: 500;
`;

const Content = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";

  font-weight: 700;
  font-size: 18px;

  color: #191919;
`;

const KeywordCard = styled.div.attrs((props) => {})`
  position: absolute;
  width: 289px;
  background: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 24px 30px 27px 30px;
  top: 23px;
  left: 207px;
  font-family: "Pretendard";
`;

function KeywordM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isMouseOver, setIsMouseOver] = useState(false);

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
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: 57,
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "GmarketSans",
            }}
          >
            <div
              style={{
                color: "#0594D7",
                position: "relative",
              }}
            >
              ?????????
            </div>
            <div
              style={{
                color: "#191919",
              }}
            >
              ??? ?????????????????????!
            </div>
            <img
              onClick={() => {
                setIsMouseOver(true);
              }}
              style={{
                width: 16,
                height: 16,
                marginLeft: 6,
                cursor: "pointer",
              }}
              src="./assets/icons/question.png"
              alt="question"
            />
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
              flex: 1,
            }}
          >
            <Card
              style={{ flex: 1, height: 100, marginLeft: 20, marginRight: 8 }}
            >
              <Title>?????? ??? ?????????</Title>
              <Content>52,036</Content>
            </Card>
            <Card
              style={{ flex: 1, height: 100, marginRight: 20, marginLeft: 8 }}
            >
              <Title>?????? ?????? ???</Title>
              <Content>20,155</Content>
            </Card>
          </div>
          <Card
            style={{
              flex: 1,
              marginLeft: 20,
              marginRight: 20,
              height: 100,
              marginBottom: 16,
            }}
          >
            <Title>????????? ?????????</Title>
            <Content>0 : 1</Content>
          </Card>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Card
              style={{ flex: 1, marginLeft: 20, height: 134, marginRight: 20 }}
            >
              <Title>?????? ?????? (PC ??? ?????????)</Title>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "86%",
                    height: 30,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 8,
                  }}
                >
                  <div
                    style={{
                      width: "65%",
                      height: "100%",
                      background: "#30B0EC",
                      paddingLeft: 20,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                      fontSize: 14,
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    65%
                  </div>
                  <div
                    style={{
                      width: "35%",
                      height: "100%",
                      background: "#05E4BC",
                      textAlign: "right",
                      paddingRight: 20,
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      fontSize: 14,
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    35%
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "86%",
                    padding: "0px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#30B0EC",
                    }}
                  >
                    PC
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontFamily: "Pretendard",
                      fontWeight: 700,
                      color: "#06C1A0",
                    }}
                  >
                    ?????????
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
              flex: 1,
            }}
          >
            <Card
              style={{ flex: 1, height: 100, marginLeft: 20, marginRight: 8 }}
            >
              <Title>?????? ?????? ??????</Title>
              <Content>52,036</Content>
            </Card>
            <Card
              style={{ flex: 1, height: 100, marginRight: 20, marginLeft: 8 }}
            >
              <Title>Top10 ?????? ?????? ??????</Title>
              <Content>20,155</Content>
            </Card>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Card
              style={{ flex: 1, height: 100, marginLeft: 20, marginRight: 8 }}
            >
              <Title>?????? 6?????? ?????? ??????</Title>
              <Content>52,036</Content>
            </Card>
            <Card
              style={{ flex: 1, height: 100, marginRight: 20, marginLeft: 8 }}
            >
              <Title>?????? 6?????? ?????????</Title>
              <Content>20,155</Content>
            </Card>
          </div>
        </div>
      </div>

      <KeywordAnalysisModal
        isModalVisible={isMouseOver}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default KeywordM;
