import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import MainContainer from "../components/templates/layouts/mainContainer";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import RadioButton from "../components/molecules/buttons/radioButtonThree";
import Question from "../components/templates/service/question";
import Inquiry from "../components/templates/service/inquiry";
import Notice from "../components/templates/service/notice";
import IQDetail from "../components/templates/service/iqDetail";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import FooterM from "../components/templates/footer/footerM";
import InquiryM from "../components/templates/service/inquiryM";

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

function Service(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  const [itemClick, setItemClick] = useState({
    question: "true",
    inquiry: "false",
    iqDetail: "false",
    notice: "false",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/question")) {
      setItemClick({
        question: "true",
        inquiry: "false",
        iqDetail: "false",
        notice: "false",
      });
    } else if (location.pathname.includes("/inquiry")) {
      setItemClick({
        question: "false",
        inquiry: "true",
        iqDetail: "false",
        notice: "false",
      });
    } else if (location.pathname.includes("/notice")) {
      setItemClick({
        question: "false",
        inquiry: "false",
        iqDetail: "false",
        notice: "true",
      });
    } else if (location.pathname.includes("/iqDetail")) {
      setItemClick({
        question: "false",
        inquiry: "true",
        iqDetail: "true",
        notice: "false",
      });
    } else {
      setItemClick({
        question: "false",
        inquiry: "false",
        iqDetail: "false",
        notice: "true",
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
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: isSmall ? 40 : 72,
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
                  고객센터
                </div>
                <img
                  style={{
                    marginLeft: isSmall ? 6 : 8,
                    width: isSmall ? 19 : 26,
                    height: isSmall ? 25 : 35,
                  }}
                  src="/assets/icons/service.png"
                  alt="service"
                />
              </div>
              <div
                style={{
                  marginTop: isSmall ? 3 : 6,
                  fontSize: isSmall ? 13 : 15,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#555555",
                }}
              >
                최선을 다하여 불편함을 해결해드리겠습니다!
              </div>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: "#D9D9D9",
                  marginTop: 24,
                  marginBottom: isSmall ? 16 : 32,
                }}
              />

              <CateogryScroll
                style={{
                  marginBottom:
                    itemClick.question === "true" && isSmall ? 2 : 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <RadioButton
                    style={{
                      width: 123,
                      marginRight: 12,
                    }}
                    active={itemClick.question}
                    onClick={() => {
                      history.push("/service/question");
                    }}
                  >
                    자주 묻는 질문
                  </RadioButton>
                  <RadioButton
                    style={{
                      width: 106,
                      marginRight: 12,
                    }}
                    active={itemClick.inquiry}
                    onClick={() => {
                      history.push("/service/inquiry");
                    }}
                  >
                    1:1 문의
                  </RadioButton>
                  <RadioButton
                    style={{
                      width: 106,
                    }}
                    active={itemClick.notice}
                    onClick={() => {
                      history.push("/service/notice");
                    }}
                  >
                    공지사항
                  </RadioButton>
                </div>
              </CateogryScroll>

              {itemClick.question === "true" ? (
                <Question />
              ) : itemClick.inquiry === "true" &&
                itemClick.iqDetail === "false" ? (
                isSmall ? (
                  <InquiryM />
                ) : (
                  <Inquiry />
                )
              ) : itemClick.notice === "true" ? (
                <Notice />
              ) : (
                <IQDetail />
              )}
            </div>
          </MainContainer>
        </BasicLayout>
      </Layout>
      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default Service;
