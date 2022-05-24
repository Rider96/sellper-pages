import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import MainContainer from "../components/templates/layouts/mainContainer";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import Input from "../components/atoms/input";
import TextAreaInput from "../components/atoms/textAreaInput";
import GrayButton from "../components/molecules/buttons/grayButton";
import InquiryComplete from "../components/templates/modal/inquiryComplete";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import FooterM from "../components/templates/footer/footerM";

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

const TitleInput = styled(Input).attrs((props) => {})`
  height: 35px;
  width: ${(props) => (props.isSmall ? "100%" : "535px")};

  border-color: #d9d9d9;
  border-radius: 4px;
`;

const ContentInput = styled(TextAreaInput).attrs((props) => {})`
  width: ${(props) => (props.isSmall ? "100%" : "652px")};
  height: 187px;

  border-color: #d9d9d9;
  border-radius: 4px;
`;

function InquiryCreate(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                padding: isSmall ? "20px" : 0,
              }}
            >
              <div
                style={{
                  marginTop: isSmall ? 12 : 56,
                  marginBottom: 16,
                  fontSize: isSmall ? 15 : 24,
                  fontWeight: isSmall ? 600 : 700,
                  fontFamily: "Pretendard-Bold",
                  color: "#191919",
                }}
              >
                1:1 문의하기
              </div>

              <div
                style={{
                  width: "100%",
                  height: 2,
                  backgroundColor: "#AAAAAA",
                  marginBottom: isSmall ? 16 : 24,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: isSmall ? "column" : "row",
                  alignItems: "center",
                  marginBottom: isSmall ? 24 : 20,
                }}
              >
                <div
                  style={{
                    marginLeft: isSmall ? 0 : 20,
                    fontSize: isSmall ? 14 : 15,
                    fontWeight: 600,
                    fontFamily: "Pretendard-Bold",
                    color: "#191919",
                    width: isSmall ? "100%" : 110,
                    marginBottom: isSmall ? 8 : 0,
                  }}
                >
                  제목
                </div>
                <TitleInput
                  isSmall={isSmall}
                  placeholder="문의글의 제목을 입력해주세요"
                />
              </div>

              {isSmall ? null : (
                <div
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#DADADA",
                    marginBottom: 24,
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: isSmall ? "column" : "row",
                  marginBottom: isSmall ? 24 : 40,
                }}
              >
                <div
                  style={{
                    marginLeft: isSmall ? 0 : 20,
                    fontSize: isSmall ? 14 : 15,
                    fontWeight: 600,
                    fontFamily: "Pretendard-Bold",
                    color: "#191919",
                    width: isSmall ? "100%" : 110,
                    marginBottom: isSmall ? 8 : 0,
                  }}
                >
                  문의 내용
                </div>
                <ContentInput
                  isSmall={isSmall}
                  rows={8}
                  placeholder="문의 내용을 작성해주세요"
                />
              </div>

              {isSmall ? null : (
                <div
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "#AAAAAA",
                    marginBottom: 24,
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: isSmall ? 64 : 200,
                }}
              >
                <GrayButton
                  onClick={() => {
                    showModal();
                  }}
                  style={{
                    width: isSmall ? "100%" : 135,
                    height: 40,
                  }}
                >
                  문의하기
                </GrayButton>
              </div>
            </div>
          </MainContainer>
        </BasicLayout>
      </Layout>
      {isSmall ? <FooterM /> : <Footer />}

      <InquiryComplete
        isModalVisible={isModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default InquiryCreate;
