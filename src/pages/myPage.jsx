import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import MainContainer from "../components/templates/layouts/mainContainer";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import RadioButton from "../components/molecules/buttons/radioButtonThree";
import MyInfo from "../components/templates/mypage/myInfo";
import MyMembership from "../components/templates/mypage/myMembership";
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

function MyPage(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  const [itemClick, setItemClick] = useState({
    myInfo: "true",
    myMS: "false",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/myInfo")) {
      setItemClick({
        myInfo: "true",
        myMS: "false",
      });
    } else if (location.pathname.includes("/myMS")) {
      setItemClick({
        myInfo: "false",
        myMS: "true",
      });
    } else {
      setItemClick({
        myInfo: "false",
        myMS: "false",
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
                padding: isSmall ? "0px 20px" : 0,
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
                    fontWeight: "bold",
                    color: "#191919",
                  }}
                >
                  마이페이지
                </div>
                <img
                  style={{
                    marginLeft: isSmall ? 6 : 8,
                    width: isSmall ? 23 : 34,
                    height: isSmall ? 23 : 34,
                  }}
                  src="./assets/icons/mypage.png"
                  alt="mypage"
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
                회원정보를 확인하고 수정할 수 있습니다!
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 40,
                }}
              >
                <RadioButton
                  style={{
                    width: 123,
                    marginRight: 12,
                  }}
                  active={itemClick.myInfo}
                  onClick={() => {
                    history.push("/myPage/myInfo");
                  }}
                >
                  회원정보 수정
                </RadioButton>
                <RadioButton
                  style={{
                    width: 106,
                    marginRight: 12,
                  }}
                  active={itemClick.myMS}
                  onClick={() => {
                    history.push("/myPage/myMS");
                  }}
                >
                  나의 멤버쉽
                </RadioButton>
              </div>
            </div>
          </MainContainer>
        </BasicLayout>
        {itemClick.myInfo === "true" ? (
          <MyInfo />
        ) : itemClick.myMS === "true" ? (
          <MyMembership />
        ) : null}
      </Layout>

      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default MyPage;
