import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

import GrayButton from "../../molecules/buttons/grayButton";

import InfoMS from "../../organisms/mypage/myMS/infoMS";
import InfoMSM from "../../organisms/mypage/myMS/infoMSM";
import MSCard from "../../organisms/mypage/myMS/msCard";
import MsCardM from "../../organisms/mypage/myMS/msCardM";
import MainContainer from "../layouts/mainContainer";
import MembershipCardM from "../membership/membershipCardM";
import MembershipCancel from "../modal/membershipCancel";
import MembershipChange from "../modal/membershipChange";

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

function MyMembership() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [isClickedItem, setIsClickedItem] = useState({
    item01: "false",
    item02: "true",
    item03: "false",
  });
  const [isModal, setIsModal] = useState(false);
  const [isModalCancel, setIsModalCancel] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModal(true);
  };

  const handleModalOk = () => {
    setIsModal(false);
  };

  const handleModalCancel = () => {
    setIsModal(false);
  };

  const showCancelModal = () => {
    setIsModalCancel(true);
  };

  const handleCancelModalOk = () => {
    setIsModalCancel(false);
  };

  const handleCancelModalCancel = () => {
    setIsModalCancel(false);
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
              {isSmall ? <InfoMSM /> : <InfoMS />}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: isSmall ? 40 : 56,
                  marginBottom: isSmall ? 42 : 29,
                }}
              >
                <div
                  style={{
                    fontSize: isSmall ? 15 : 18,
                    fontWeight: 600,
                    color: "#191919",
                    fontFamily: "Pretendard",
                  }}
                >
                  ????????? ????????????
                </div>
                {isSmall ? null : (
                  <div
                    onClick={() => {
                      history.push("/membership");
                    }}
                    style={{
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#555555",
                      fontFamily: "Pretendard",
                      textDecorationLine: "underline",
                    }}
                  >
                    ????????? ?????? ??? ????????? ??????
                  </div>
                )}
              </div>

              {isSmall ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <MsCardM
                    onClick={() => {
                      setIsClickedItem({
                        item01: "true",
                        item02: "false",
                        item03: "false",
                      });
                    }}
                    active={isClickedItem.item01}
                    title={"Standard"}
                    price={"29,800"}
                    content01={"????????? ????????? ???????????? ????????? ??? ??????"}
                    content02={"???????????? ????????? ?????????!"}
                    imgSrc={"./assets/images/membership/standard.png"}
                  />
                  <MsCardM
                    onClick={() => {
                      setIsClickedItem({
                        item01: "false",
                        item02: "true",
                        item03: "false",
                      });
                    }}
                    active={isClickedItem.item02}
                    title={"Basic"}
                    price={"19,800"}
                    content01={"??? ????????? ????????? ????????????"}
                    content02={"???????????? ????????? ??????????????????!"}
                    imgSrc={"./assets/images/membership/basic.png"}
                  />
                  <MsCardM
                    onClick={() => {
                      setIsClickedItem({
                        item01: "false",
                        item02: "false",
                        item03: "true",
                      });
                    }}
                    active={isClickedItem.item03}
                    title={"Premium"}
                    price={"99,800"}
                    content01={"???????????? ???????????? ????????????"}
                    content02={"?????? ?????? ??????????????? ??????????????????!"}
                    imgSrc={"./assets/images/membership/premium.png"}
                    marginBottom={16}
                  />
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 56,
                  }}
                >
                  <MSCard
                    onClick={() => {
                      setIsClickedItem({
                        item01: "true",
                        item02: "false",
                        item03: "false",
                      });
                    }}
                    active={isClickedItem.item01}
                    title={"Basic"}
                    price={"19,800"}
                    content01={"??? ????????? ????????? ????????????"}
                    content02={"???????????? ????????? ??????????????????!"}
                    imgSrc={"./assets/images/membership/basic.png"}
                  />
                  <MSCard
                    onClick={() => {
                      setIsClickedItem({
                        item01: "false",
                        item02: "true",
                        item03: "false",
                      });
                    }}
                    active={isClickedItem.item02}
                    title={"Standard"}
                    price={"29,800"}
                    content01={"????????? ????????? ???????????? ????????? ??? ??????"}
                    content02={"???????????? ????????? ?????????!"}
                    imgSrc={"./assets/images/membership/standard.png"}
                  />
                  <MSCard
                    onClick={() => {
                      setIsClickedItem({
                        item01: "false",
                        item02: "false",
                        item03: "true",
                      });
                    }}
                    active={isClickedItem.item03}
                    title={"Premium"}
                    price={"99,800"}
                    content01={"???????????? ???????????? ????????????"}
                    content02={"?????? ?????? ??????????????? ??????????????????!"}
                    imgSrc={"./assets/images/membership/premium.png"}
                  />
                </div>
              )}
              {isSmall ? (
                <div
                  onClick={() => {
                    history.push("/membership");
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#555555",
                    fontFamily: "Pretendard",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                >
                  ????????? ?????? ??? ????????? ??????
                </div>
              ) : null}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: isSmall ? 68 : 109,
                  marginTop: isSmall ? 54 : 48,
                }}
              >
                <GrayButton
                  onClick={() => {
                    showModal();
                  }}
                  style={{
                    width: isSmall ? "80%" : 176,
                    height: 40,
                  }}
                >
                  ????????? ????????????
                </GrayButton>

                <div
                  onClick={() => {
                    showCancelModal();
                  }}
                  style={{
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#555555",
                    fontFamily: "Pretendard",
                    textDecorationLine: "underline",
                    marginTop: isSmall ? 20 : 16,
                  }}
                >
                  ????????? ????????????
                </div>
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>

      <MembershipChange
        isModalVisible={isModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />

      <MembershipCancel
        isModalVisible={isModalCancel}
        handleOk={handleCancelModalOk}
        handleCancel={handleCancelModalCancel}
      />
    </>
  );
}

export default MyMembership;
