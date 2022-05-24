import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import BlueButtonMini from "../../molecules/buttons/blueButtonMini";
import GrayButton from "../../molecules/buttons/grayButton";

import InfoBasic from "../../organisms/mypage/myinfo/infoBasic";
import InfoBasicM from "../../organisms/mypage/myinfo/infoBasicM";
import InfoChange from "../../organisms/mypage/myinfo/infoChange";
import InfoChangeM from "../../organisms/mypage/myinfo/infoChangeM";
import MainContainer from "../layouts/mainContainer";
import Withdrawal from "../modal/withdrawal";

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

function MyInfo() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isChange, setIsChange] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  const handleModalOk = () => {
    setIsModal(false);
  };

  const handleModalCancel = () => {
    setIsModal(false);
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
                padding: isSmall ? "0px 20px" : 0,
              }}
            >
              {isChange ? (
                isSmall ? (
                  <InfoChangeM />
                ) : (
                  <InfoChange />
                )
              ) : isSmall ? (
                <InfoBasicM />
              ) : (
                <InfoBasic />
              )}

              <div
                onClick={() => {
                  showModal();
                }}
                style={{
                  marginBottom: isSmall ? 32 : 9,
                  marginTop: isSmall ? 12 : 18,
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-end",
                  fontSize: isSmall ? 13 : 14,
                  fontWeight: 400,
                  color: "#555555",
                  fontFamily: "Pretendard",
                  cursor: "pointer",
                  textDecorationLine: "underline",
                }}
              >
                탈퇴하기
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: isSmall ? 66 : 100,
                }}
              >
                {isChange ? (
                  <BlueButtonMini
                    onClick={() => {
                      setIsChange(false);
                    }}
                    style={{
                      width: isSmall ? "100%" : 135,
                      height: 40,
                      fontSize: 14,
                      borderRadius: 50,
                    }}
                  >
                    저장하기
                  </BlueButtonMini>
                ) : (
                  <GrayButton
                    onClick={() => {
                      setIsChange(true);
                    }}
                    style={{
                      width: isSmall ? "100%" : 135,
                      height: 40,
                    }}
                  >
                    변경하기
                  </GrayButton>
                )}
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>

      <Withdrawal
        isModalVisible={isModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default MyInfo;
